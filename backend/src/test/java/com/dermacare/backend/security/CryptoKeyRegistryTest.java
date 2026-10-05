package com.dermacare.backend.security;

import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.Set;
import java.util.concurrent.*;

import static org.junit.jupiter.api.Assertions.*;

class CryptoKeyRegistryTest {

    @Test
    void getInstance_AlwaysReturnsSameInstance() {
        CryptoKeyRegistry instance1 = CryptoKeyRegistry.getInstance();
        CryptoKeyRegistry instance2 = CryptoKeyRegistry.getInstance();

        assertNotNull(instance1);
        assertSame(instance1, instance2, "Singleton must always return the exact same instance reference");
    }

    @Test
    void getInstance_ConcurrentAccess_IsThreadSafe() throws InterruptedException, ExecutionException {
        int threadCount = 20;
        ExecutorService executor = Executors.newFixedThreadPool(threadCount);
        Set<Integer> identityHashCodes = Collections.newSetFromMap(new ConcurrentHashMap<>());
        CountDownLatch startLatch = new CountDownLatch(1);
        CountDownLatch doneLatch = new CountDownLatch(threadCount);

        for (int i = 0; i < threadCount; i++) {
            executor.submit(() -> {
                try {
                    startLatch.await(); // wait so all threads access at the exact same moment
                    CryptoKeyRegistry instance = CryptoKeyRegistry.getInstance();
                    identityHashCodes.add(System.identityHashCode(instance));
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    doneLatch.countDown();
                }
            });
        }

        startLatch.countDown(); // release all threads
        assertTrue(doneLatch.await(5, TimeUnit.SECONDS));
        executor.shutdown();

        // Exactly one unique instance across all 20 concurrent threads
        assertEquals(1, identityHashCodes.size(), "All concurrent threads must receive the identical singleton instance");
    }

    @Test
    void getKey_ReturnsValidKey() {
        CryptoKeyRegistry registry = CryptoKeyRegistry.getInstance();
        byte[] key = registry.getKey("clinical_data_key");

        assertNotNull(key);
        assertEquals(32, key.length, "AES-256 key must be 32 bytes (256 bits)");
    }
}
