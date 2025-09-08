import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MapPin, Package, Clock, DollarSign, Truck, Search } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function FindScreen() {
  const [availableParcels] = useState([
    {
      id: 'PAR001',
      from: 'Westlands',
      to: 'CBD',
      distance: '5.2 km',
      pickupTime: 'ASAP',
      deliveryTime: 'Within 2 hours',
      earnings: 18.50,
      packageType: 'Documents',
      senderName: 'Alice Johnson',
      urgency: 'High',
    },
    {
      id: 'PAR002',
      from: 'Karen',
      to: 'Kilimani',
      distance: '8.7 km',
      pickupTime: '2:00 PM',
      deliveryTime: '4:00 PM',
      earnings: 25.00,
      packageType: 'Electronics',
      senderName: 'Bob Wilson',
      urgency: 'Medium',
    },
    {
      id: 'PAR003',
      from: 'Parklands',
      to: 'Lavington',
      distance: '3.1 km',
      pickupTime: 'Tomorrow 9:00 AM',
      deliveryTime: 'Tomorrow 11:00 AM',
      earnings: 12.75,
      packageType: 'Food',
      senderName: 'Carol Davis',
      urgency: 'Low',
    },
  ]);

  const handleAcceptParcel = (parcelId: string) => {
    // Handle accepting the parcel delivery
    console.log('Accept parcel:', parcelId);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#64748b';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="small" color="white" variant="icon" />
          <Text style={styles.headerTitle}>Find Parcels</Text>
        </View>
        <Text style={styles.headerSubtitle}>Discover deliveries on your route</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchWrapper}>
          <Search size={20} color="#64748b" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search by location or package type</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Parcels</Text>

        {availableParcels.map((parcel) => (
          <View key={parcel.id} style={styles.parcelCard}>
            <View style={styles.parcelHeader}>
              <View style={styles.parcelInfo}>
                <Text style={styles.parcelId}>{parcel.id}</Text>
                <View style={[styles.urgencyBadge, { backgroundColor: getUrgencyColor(parcel.urgency) }]}>
                  <Text style={styles.urgencyText}>{parcel.urgency}</Text>
                </View>
              </View>
              <Text style={styles.earnings}>${parcel.earnings.toFixed(2)}</Text>
            </View>

            <View style={styles.routeInfo}>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.routeText}>From: {parcel.from}</Text>
              </View>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#14b8a6" />
                <Text style={styles.routeText}>To: {parcel.to}</Text>
              </View>
            </View>

            <View style={styles.parcelDetails}>
              <View style={styles.detailItem}>
                <Package size={14} color="#64748b" />
                <Text style={styles.detailText}>{parcel.packageType}</Text>
              </View>
              <View style={styles.detailItem}>
                <Clock size={14} color="#64748b" />
                <Text style={styles.detailText}>{parcel.pickupTime}</Text>
              </View>
              <View style={styles.detailItem}>
                <Truck size={14} color="#64748b" />
                <Text style={styles.detailText}>{parcel.distance}</Text>
              </View>
            </View>

            <Text style={styles.senderName}>Sender: {parcel.senderName}</Text>

            <View style={styles.timeInfo}>
              <Text style={styles.timeText}>Pickup: {parcel.pickupTime}</Text>
              <Text style={styles.timeText}>Delivery: {parcel.deliveryTime}</Text>
            </View>

            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => handleAcceptParcel(parcel.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.acceptButtonText}>Accept Delivery</Text>
            </TouchableOpacity>
          </View>
        ))}

        {availableParcels.length === 0 && (
          <View style={styles.emptyState}>
            <Package size={48} color="#94a3b8" />
            <Text style={styles.emptyStateText}>No parcels available</Text>
            <Text style={styles.emptyStateSubtext}>Check back later for new delivery opportunities</Text>
          </View>
        )}
      </View>
    </ScrollView>
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
  searchPlaceholder: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#94a3b8',
  },
  filterButton: {
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
  filterButtonText: {
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
  urgencyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  urgencyText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  earnings: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22c55e',
  },
  routeInfo: {
    marginBottom: 12,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  routeText: {
    fontSize: 14,
    color: '#15803d',
    marginLeft: 8,
  },
  parcelDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
  senderName: {
    fontSize: 14,
    color: '#166534',
    fontWeight: '500',
    marginBottom: 8,
  },
  timeInfo: {
    marginBottom: 12,
  },
  timeText: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 2,
  },
  acceptButton: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
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