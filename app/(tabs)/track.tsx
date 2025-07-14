import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Search, Package, MapPin, Clock, CircleCheck as CheckCircle, Truck } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function TrackScreen() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const mockTrackingData = [
    {
      id: 'TR001',
      from: 'New York, NY',
      to: 'Boston, MA',
      status: 'In Transit',
      statusColor: '#f59e0b',
      deliveryDate: '2024-01-15',
      progress: 60,
    },
    {
      id: 'TR002',
      from: 'Chicago, IL',
      to: 'Detroit, MI',
      status: 'Delivered',
      statusColor: '#10b981',
      deliveryDate: '2024-01-12',
      progress: 100,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="small" color="white" variant="icon" />
          <Text style={styles.headerTitle}>Track Parcels</Text>
        </View>
        <Text style={styles.headerSubtitle}>Monitor your shipments in real-time</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchWrapper}>
          <Search size={20} color="#64748b" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChangeText={setTrackingNumber}
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
        <TouchableOpacity 
          style={styles.searchButton}
          activeOpacity={0.8}
        >
          <Text style={styles.searchButtonText}>Track</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Parcels</Text>
        
        {mockTrackingData.map((item) => (
          <View key={item.id} style={styles.parcelCard}>
            <View style={styles.parcelHeader}>
              <View style={styles.parcelInfo}>
                <Text style={styles.parcelId}>{item.id}</Text>
                <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
              <Text style={styles.deliveryDate}>{item.deliveryDate}</Text>
            </View>

            <View style={styles.routeInfo}>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.routeText}>From: {item.from}</Text>
              </View>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#14b8a6" />
                <Text style={styles.routeText}>To: {item.to}</Text>
              </View>
            </View>

            <View style={styles.progressSection}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{item.progress}% Complete</Text>
            </View>

            <View style={styles.trackingSteps}>
              <View style={styles.step}>
                <CheckCircle size={16} color="#10b981" />
                <Text style={styles.stepText}>Picked up</Text>
              </View>
              <View style={styles.step}>
                <Truck size={16} color={item.progress >= 50 ? '#10b981' : '#d1d5db'} />
                <Text style={[styles.stepText, { color: item.progress >= 50 ? '#1e293b' : '#9ca3af' }]}>
                  In transit
                </Text>
              </View>
              <View style={styles.step}>
                <CheckCircle size={16} color={item.progress === 100 ? '#10b981' : '#d1d5db'} />
                <Text style={[styles.stepText, { color: item.progress === 100 ? '#1e293b' : '#9ca3af' }]}>
                  Delivered
                </Text>
              </View>
            </View>
          </View>
        ))}

        {mockTrackingData.length === 0 && (
          <View style={styles.emptyState}>
            <Package size={48} color="#94a3b8" />
            <Text style={styles.emptyStateText}>No parcels to track</Text>
            <Text style={styles.emptyStateSubtext}>Your shipments will appear here</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
        }
  )
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
  searchSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: 'row',
    gap: 12,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#166534',
  },
  searchButton: {
    backgroundColor: '#22c55e',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 16,
  },
  parcelCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  parcelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  parcelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  parcelId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#166534',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  deliveryDate: {
    fontSize: 14,
    color: '#15803d',
  },
  routeInfo: {
    marginBottom: 16,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeText: {
    fontSize: 14,
    color: '#15803d',
    marginLeft: 8,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#15803d',
    textAlign: 'center',
  },
  trackingSteps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  step: {
    alignItems: 'center',
    flex: 1,
  },
  stepText: {
    fontSize: 12,
    color: '#166534',
    marginTop: 4,
    textAlign: 'center',
  },
  emptyState: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 48,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#15803d',
    marginTop: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#16a34a',
    marginTop: 4,
  },
});