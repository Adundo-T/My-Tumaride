import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { Package, Truck } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function RoleSelectionScreen() {
  const [selectedRole, setSelectedRole] = useState<'sender' | 'mover' | null>(null);
  const { updateUserRole } = useAuth();

  const handleRoleSelection = async (role: 'sender' | 'mover') => {
    setSelectedRole(role);
    await updateUserRole(role);
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoSection}>
          <TumaRideLogo size="large" color="green" />
        </View>
        <Text style={styles.title}>How will you be using TumaRide?</Text>
        <Text style={styles.subtitle}>Choose your role to get started</Text>

        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'sender' && styles.selectedCard,
            ]}
            onPress={() => handleRoleSelection('sender')}
            activeOpacity={0.8}
          >
            <View style={styles.roleIcon}>
              <Package size={48} color="#3b82f6" />
            </View>
            <Text style={styles.roleTitle}>I want to send a parcel</Text>
            <Text style={styles.roleDescription}>
              Send parcels to destinations along existing routes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'mover' && styles.selectedCard,
            ]}
            onPress={() => handleRoleSelection('mover')}
            activeOpacity={0.8}
          >
            <View style={styles.roleIcon}>
              <Truck size={48} color="#14b8a6" />
            </View>
            <Text style={styles.roleTitle}>I want to deliver parcels on my route</Text>
            <Text style={styles.roleDescription}>
              Earn money by delivering parcels along your regular routes
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.note}>
          You can change your role later in the profile settings
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#15803d',
    textAlign: 'center',
    marginBottom: 48,
  },
  roleContainer: {
    marginBottom: 32,
  },
  roleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#22c55e',
    backgroundColor: '#dcfce7',
  },
  roleIcon: {
    backgroundColor: '#dcfce7',
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
  },
  roleTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 8,
  },
  roleDescription: {
    fontSize: 14,
    color: '#15803d',
    textAlign: 'center',
    lineHeight: 20,
  },
  note: {
    fontSize: 12,
    color: '#16a34a',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});