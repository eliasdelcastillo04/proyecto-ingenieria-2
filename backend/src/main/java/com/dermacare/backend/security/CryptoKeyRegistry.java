package com.dermacare.backend.security;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Thread-Safe Singleton implementing the Bill Pugh Singleton Design Pattern
 * (Initialization-on-demand holder idiom).
 *
 * Provides central, immutable management of cryptographic keys and salts for RNF-03
 * without introducing race conditions in multi-threaded execution environments.
 */
public final class CryptoKeyRegistry {

    private final Map<String, byte[]> keyStore;

    // Private constructor prevents instantiation from outside
    private CryptoKeyRegistry() {
        // Prevent reflection attacks
        if (Holder.INSTANCE != null) {
            throw new IllegalStateException("CryptoKeyRegistry instance already exists!");
        }
        this.keyStore = new ConcurrentHashMap<>();
        initializeDefaultKeys();
    }

    // Lazy, thread-safe initialization via JVM ClassLoader guarantees
    private static class Holder {
        private static final CryptoKeyRegistry INSTANCE = new CryptoKeyRegistry();
    }

    /**
     * Global access point for the Singleton instance.
     * Guaranteed to be thread-safe without synchronized performance penalty.
     */
    public static CryptoKeyRegistry getInstance() {
        return Holder.INSTANCE;
    }

    private void initializeDefaultKeys() {
        String masterSecret = System.getenv("DERMACARE_MASTER_KEY");
        if (masterSecret == null || masterSecret.isBlank()) {
            masterSecret = "DermaCare-Master-Static-Fallback-Key-2026";
        }
        try {
            MessageDigest sha256 = MessageDigest.getInstance("SHA-256");
            byte[] derivedKey = sha256.digest(masterSecret.getBytes(StandardCharsets.UTF_8));
            keyStore.put("clinical_data_key", derivedKey);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 algorithm unavailable", e);
        }
    }

    public byte[] getKey(String keyAlias) {
        byte[] key = keyStore.get(keyAlias);
        if (key == null) {
            return keyStore.get("clinical_data_key");
        }
        return Arrays.copyOf(key, key.length);
    }

    public void registerKey(String alias, byte[] key) {
        if (alias == null || key == null) {
            throw new IllegalArgumentException("Alias and key cannot be null");
        }
        keyStore.put(alias, Arrays.copyOf(key, key.length));
    }
}
