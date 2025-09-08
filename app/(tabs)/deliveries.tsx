import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Truck, MapPin, Clock, DollarSign, Package, CheckCircle } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function DeliveriesScreen() {
  const [activeDeliveries] = useState([
    {
      id: 'DEL001',
      from: 'Downtown Nairobi',
      to: 'Westlands',
      status: 'In Progress',
      statusColor: '#f59e0b',
      pickupTime: '2:30 PM',
      deliveryTime: '4:00 PM',
      earnings: 15.50,
      packageType: 'Documents',
      customerName: 'John Doe',
    },
    {
      id: 'DEL002',
      from: 'Karen',
      to: 'Kilimani',
      status: 'Picked Up',
      statusColor: '#3b82f6',
      pickupTime: '1:15 PM',
      deliveryTime: '3:30 PM',
      earnings: 22.00,
      packageType: 'Electronics',
      customerName: 'Jane Smith',
    },
  ]);

  const [completedDeliveries] = useState([
    {
      id: 'DEL003',
      from: 'CBD',
      to: 'Parklands',
      status: 'Completed',
      statusColor: '#10b981',
      pickupTime: '10:00 AM',
      deliveryTime: '11:45 AM',
      earnings: 18.75,
      packageType: 'Food',
      customerName: 'Mike Johnson',
    },
  ]);

  const handleMarkDelivered = (deliveryId: string) => {
    // Handle marking delivery as completed
    console.log('Mark delivery as completed:', deliveryId);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="small" color="white" variant="icon" />
          <Text style={styles.headerTitle}>My Deliveries</Text>
        </View>
        <Text style={styles.headerSubtitle}>Manage your active deliveries</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Deliveries</Text>

        {activeDeliveries.map((delivery) => (
          <View key={delivery.id} style={styles.deliveryCard}>
            <View style={styles.deliveryHeader}>
              <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryId}>{delivery.id}</Text>
                <View style={[styles.statusBadge, { backgroundColor: delivery.statusColor }]}>
                  <Text style={styles.statusText}>{delivery.status}</Text>
                </View>
              </View>
              <Text style={styles.earnings}>${delivery.earnings.toFixed(2)}</Text>
            </View>

            <View style={styles.routeInfo}>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.routeText}>From: {delivery.from}</Text>
              </View>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#14b8a6" />
                <Text style={styles.routeText}>To: {delivery.to}</Text>
              </View>
            </View>

            <View style={styles.deliveryDetails}>
              <View style={styles.detailItem}>
                <Package size={14} color="#64748b" />
                <Text style={styles.detailText}>{delivery.packageType}</Text>
              </View>
              <View style={styles.detailItem}>
                <Clock size={14} color="#64748b" />
                <Text style={styles.detailText}>{delivery.pickupTime} - {delivery.deliveryTime}</Text>
              </View>
            </View>

            <Text style={styles.customerName}>Customer: {delivery.customerName}</Text>

            {delivery.status !== 'Completed' && (
              <TouchableOpacity
                style={styles.deliverButton}
                onPress={() => handleMarkDelivered(delivery.id)}
                activeOpacity={0.8}
              >
                <CheckCircle size={16} color="#ffffff" />
                <Text style={styles.deliverButtonText}>Mark as Delivered</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {activeDeliveries.length === 0 && (
          <View style={styles.emptyState}>
            <Truck size={48} color="#94a3b8" />
            <Text style={styles.emptyStateText}>No active deliveries</Text>
            <Text style={styles.emptyStateSubtext}>New deliveries will appear here</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Deliveries</Text>

        {completedDeliveries.map((delivery) => (
          <View key={delivery.id} style={styles.deliveryCard}>
            <View style={styles.deliveryHeader}>
              <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryId}>{delivery.id}</Text>
                <View style={[styles.statusBadge, { backgroundColor: delivery.statusColor }]}>
                  <Text style={styles.statusText}>{delivery.status}</Text>
                </View>
              </View>
              <Text style={styles.earnings}>${delivery.earnings.toFixed(2)}</Text>
            </View>

            <View style={styles.routeInfo}>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.routeText}>From: {delivery.from}</Text>
              </View>
              <View style={styles.routePoint}>
                <MapPin size={16} color="#14b8a6" />
                <Text style={styles.routeText}>To: {delivery.to}</Text>
              </View>
            </View>

            <View style={styles.deliveryDetails}>
              <View style={styles.detailItem}>
                <Package size={14} color="#64748b" />
                <Text style={styles.detailText}>{delivery.packageType}</Text>
              </View>
              <View style={styles.detailItem}>
                <Clock size={14} color="#64748b" />
                <Text style={styles.detailText}>{delivery.pickupTime} - {delivery.deliveryTime}</Text>
              </View>
            </View>

            <Text style={styles.customerName}>Customer: {delivery.customerName}</Text>
          </View>
        ))}
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
  deliveryCard: {
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
  deliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  deliveryId: {
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
  deliveryDetails: {
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
  customerName: {
    fontSize: 14,
    color: '#166534',
    fontWeight: '500',
    marginBottom: 12,
  },
  deliverButton: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  deliverButtonText: {
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