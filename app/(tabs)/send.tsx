import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Package, MapPin, User, Calendar, DollarSign } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function SendScreen() {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [packageDescription, setPackageDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleSendParcel = () => {
    if (!fromAddress || !toAddress || !recipientName || !recipientPhone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert('Success', 'Parcel request submitted successfully!');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TumaRideLogo size="small" color="white" variant="icon" />
            <Text style={styles.headerTitle}>Send New Parcel</Text>
          </View>
          <Text style={styles.headerSubtitle}>Create a new shipment request</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pickup & Delivery</Text>
          
            <View style={styles.inputGroup}>
              <View style={styles.inputWrapper}>
                <MapPin size={20} color="#64748b" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="From address"
                  value={fromAddress}
                  onChangeText={setFromAddress}
                  multiline
                  textContentType="fullStreetAddress"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputWrapper}>
                <MapPin size={20} color="#14b8a6" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="To address"
                  value={toAddress}
                  onChangeText={setToAddress}
                  multiline
                  textContentType="fullStreetAddress"
                  returnKeyType="next"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recipient Information</Text>
          
            <View style={styles.inputGroup}>
              <View style={styles.inputWrapper}>
                <User size={20} color="#64748b" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Recipient name"
                  value={recipientName}
                  onChangeText={setRecipientName}
                  textContentType="name"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputWrapper}>
                <User size={20} color="#64748b" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Recipient phone"
                  value={recipientPhone}
                  onChangeText={setRecipientPhone}
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  returnKeyType="next"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Package Details</Text>
          
            <View style={styles.inputGroup}>
              <View style={styles.inputWrapper}>
                <Package size={20} color="#64748b" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Package description"
                  value={packageDescription}
                  onChangeText={setPackageDescription}
                  multiline
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Calendar size={20} color="#64748b" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Preferred delivery date"
                  value={deliveryDate}
                  onChangeText={setDeliveryDate}
                  returnKeyType="done"
                />
              </View>
            </View>
          </View>

          <View style={styles.priceCard}>
            <DollarSign size={24} color="#3b82f6" />
            <Text style={styles.priceText}>Estimated Cost: $12.50</Text>
            <Text style={styles.priceSubtext}>Final price depends on selected mover</Text>
          </View>

          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSendParcel}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Request Parcel Delivery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  header: {
    backgroundColor: '#22c55e',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#16a34a',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#dcfce7',
    marginTop: 4,
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 16,
  },
  inputGroup: {
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#166534',
  },
  priceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#166534',
    marginTop: 8,
  },
  priceSubtext: {
    fontSize: 14,
    color: '#15803d',
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#22c55e',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});