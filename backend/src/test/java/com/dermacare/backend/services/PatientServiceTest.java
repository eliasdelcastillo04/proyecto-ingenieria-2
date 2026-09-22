package com.dermacare.backend.services;

import com.dermacare.backend.entities.Patient;
import com.dermacare.backend.repositories.PatientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @InjectMocks
    private PatientService patientService;

    private Patient samplePatient;

    @BeforeEach
    void setUp() {
        samplePatient = new Patient();
        samplePatient.setId(1L);
        samplePatient.setFirstName("Juan");
        samplePatient.setLastName("Perez");
        samplePatient.setDni("12345678");
        samplePatient.setAge(30);
        samplePatient.setProfession("Ingeniero");
        samplePatient.setContactEmail("juan.perez@example.com");
        samplePatient.setContactPhone("1122334455");
    }

    @Test
    void getAllPatients_ReturnsListOfPatients() {
        Patient p2 = new Patient();
        p2.setId(2L);
        p2.setFirstName("Maria");
        p2.setLastName("Gomez");
        p2.setDni("87654321");

        when(patientRepository.findAll()).thenReturn(List.of(samplePatient, p2));

        List<Patient> result = patientService.getAllPatients();

        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Juan", result.get(0).getFirstName());
        assertEquals("Maria", result.get(1).getFirstName());
        verify(patientRepository, times(1)).findAll();
    }

    @Test
    void getAllPatients_WhenEmpty_ReturnsEmptyList() {
        when(patientRepository.findAll()).thenReturn(Collections.emptyList());

        List<Patient> result = patientService.getAllPatients();

        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(patientRepository, times(1)).findAll();
    }

    @Test
    void getPatientById_WhenExists_ReturnsOptionalPatient() {
        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));

        Optional<Patient> result = patientService.getPatientById(1L);

        assertTrue(result.isPresent());
        assertEquals("Juan", result.get().getFirstName());
        assertEquals("12345678", result.get().getDni());
        verify(patientRepository, times(1)).findById(1L);
    }

    @Test
    void getPatientById_WhenNotFound_ReturnsEmptyOptional() {
        when(patientRepository.findById(99L)).thenReturn(Optional.empty());

        Optional<Patient> result = patientService.getPatientById(99L);

        assertFalse(result.isPresent());
        verify(patientRepository, times(1)).findById(99L);
    }

    @Test
    void getPatientById_NullId_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.getPatientById(null));
        assertEquals("Patient ID cannot be null", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_Success_ReturnsSavedPatient() {
        when(patientRepository.save(any(Patient.class))).thenReturn(samplePatient);

        Patient created = patientService.createPatient(samplePatient);

        assertNotNull(created);
        assertEquals("Juan", created.getFirstName());
        assertEquals("12345678", created.getDni());
        verify(patientRepository, times(1)).save(samplePatient);
    }

    @Test
    void createPatient_NullPatient_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(null));
        assertEquals("Patient cannot be null", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_NullOrBlankFirstName_ThrowsIllegalArgumentException() {
        samplePatient.setFirstName(null);
        IllegalArgumentException ex1 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient first name is required", ex1.getMessage());

        samplePatient.setFirstName("   ");
        IllegalArgumentException ex2 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient first name is required", ex2.getMessage());

        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_NullOrBlankLastName_ThrowsIllegalArgumentException() {
        samplePatient.setLastName(null);
        IllegalArgumentException ex1 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient last name is required", ex1.getMessage());

        samplePatient.setLastName("   ");
        IllegalArgumentException ex2 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient last name is required", ex2.getMessage());

        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_NullOrBlankDni_ThrowsIllegalArgumentException() {
        samplePatient.setDni(null);
        IllegalArgumentException ex1 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient DNI is required", ex1.getMessage());

        samplePatient.setDni("   ");
        IllegalArgumentException ex2 = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));
        assertEquals("Patient DNI is required", ex2.getMessage());

        verifyNoInteractions(patientRepository);
    }

    @Test
    void updatePatient_Success_UpdatesFieldsAndSaves() {
        Patient updateData = new Patient();
        updateData.setFirstName("Juan Carlos");
        updateData.setLastName("Perez Rodriguez");
        updateData.setDni("12345678-Updated");
        updateData.setAge(31);
        updateData.setProfession("Arquitecto");
        updateData.setContactPhone("99887766");
        updateData.setContactEmail("jc@example.com");
        updateData.setPathologicalHistory("Hipertension");
        updateData.setAllergies("Penicilina");
        updateData.setToxicHabits("Ninguno");
        updateData.setSunExposure("Moderada");
        updateData.setSpfUse("Diario FPS 50");
        updateData.setSurgicalHistory("Apendicectomia");
        updateData.setGynecologicalHistory("N/A");
        updateData.setHabitualMedication("Enalapril");

        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));
        when(patientRepository.save(any(Patient.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Patient result = patientService.updatePatient(1L, updateData);

        assertNotNull(result);
        assertEquals("Juan Carlos", result.getFirstName());
        assertEquals("Perez Rodriguez", result.getLastName());
        assertEquals("12345678-Updated", result.getDni());
        assertEquals(31, result.getAge());
        assertEquals("Arquitecto", result.getProfession());
        assertEquals("99887766", result.getContactPhone());
        assertEquals("jc@example.com", result.getContactEmail());
        assertEquals("Hipertension", result.getPathologicalHistory());
        assertEquals("Penicilina", result.getAllergies());
        assertEquals("Ninguno", result.getToxicHabits());
        assertEquals("Moderada", result.getSunExposure());
        assertEquals("Diario FPS 50", result.getSpfUse());
        assertEquals("Apendicectomia", result.getSurgicalHistory());
        assertEquals("N/A", result.getGynecologicalHistory());
        assertEquals("Enalapril", result.getHabitualMedication());
        verify(patientRepository, times(1)).findById(1L);
        verify(patientRepository, times(1)).save(samplePatient);
    }

    @Test
    void updatePatient_NullId_ThrowsIllegalArgumentException() {
        Patient updateData = new Patient();
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(null, updateData));
        assertEquals("Patient ID cannot be null", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void updatePatient_NullData_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(1L, null));
        assertEquals("Updated patient data cannot be null", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void updatePatient_NotFound_ThrowsIllegalArgumentException() {
        when(patientRepository.findById(404L)).thenReturn(Optional.empty());
        Patient updateData = new Patient();
        updateData.setFirstName("Nuevo");

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(404L, updateData));
        assertEquals("Patient not found with id: 404", ex.getMessage());
        verify(patientRepository, times(1)).findById(404L);
        verify(patientRepository, never()).save(any());
    }

    @Test
    void deletePatient_Success_DeletesById() {
        doNothing().when(patientRepository).deleteById(1L);

        patientService.deletePatient(1L);

        verify(patientRepository, times(1)).deleteById(1L);
    }

    @Test
    void deletePatient_NullId_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.deletePatient(null));
        assertEquals("Patient ID cannot be null", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_DuplicateDni_ThrowsIllegalArgumentException() {
        when(patientRepository.existsByDni("12345678")).thenReturn(true);

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));

        assertEquals("Patient with DNI already exists: 12345678", ex.getMessage());
        verify(patientRepository, times(1)).existsByDni("12345678");
        verify(patientRepository, never()).save(any());
    }

    @Test
    void createPatient_NegativeAge_ThrowsIllegalArgumentException() {
        samplePatient.setAge(-1);

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));

        assertEquals("Patient age must be between 0 and 150", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_AgeGreaterThan150_ThrowsIllegalArgumentException() {
        samplePatient.setAge(151);

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.createPatient(samplePatient));

        assertEquals("Patient age must be between 0 and 150", ex.getMessage());
        verifyNoInteractions(patientRepository);
    }

    @Test
    void createPatient_TrimsWhitespaceFields() {
        samplePatient.setFirstName("   Juan   ");
        samplePatient.setLastName("   Perez   ");
        samplePatient.setDni("   12345678   ");

        when(patientRepository.existsByDni("12345678")).thenReturn(false);
        when(patientRepository.save(any(Patient.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Patient created = patientService.createPatient(samplePatient);

        assertEquals("Juan", created.getFirstName());
        assertEquals("Perez", created.getLastName());
        assertEquals("12345678", created.getDni());
    }

    @Test
    void updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException() {
        Patient anotherPatient = new Patient();
        anotherPatient.setId(2L);
        anotherPatient.setDni("99999999");

        Patient updateData = new Patient();
        updateData.setDni("99999999");

        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));
        when(patientRepository.findByDni("99999999")).thenReturn(Optional.of(anotherPatient));

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(1L, updateData));

        assertEquals("Patient with DNI already exists: 99999999", ex.getMessage());
        verify(patientRepository, never()).save(any());
    }

    @Test
    void updatePatient_SameDniForCurrentPatient_Success() {
        Patient updateData = new Patient();
        updateData.setDni("12345678");

        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));
        when(patientRepository.findByDni("12345678")).thenReturn(Optional.of(samplePatient));
        when(patientRepository.save(any(Patient.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Patient updated = patientService.updatePatient(1L, updateData);

        assertEquals("12345678", updated.getDni());
        verify(patientRepository, times(1)).save(samplePatient);
    }

    @Test
    void updatePatient_NegativeAge_ThrowsIllegalArgumentException() {
        Patient updateData = new Patient();
        updateData.setAge(-1);

        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(1L, updateData));

        assertEquals("Patient age must be between 0 and 150", ex.getMessage());
        verify(patientRepository, never()).save(any());
    }

    @Test
    void updatePatient_AgeGreaterThan150_ThrowsIllegalArgumentException() {
        Patient updateData = new Patient();
        updateData.setAge(151);

        when(patientRepository.findById(1L)).thenReturn(Optional.of(samplePatient));

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> patientService.updatePatient(1L, updateData));

        assertEquals("Patient age must be between 0 and 150", ex.getMessage());
        verify(patientRepository, never()).save(any());
    }
}
