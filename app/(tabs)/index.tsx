import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { Package, Truck, MapPin, Clock, Star, TrendingUp } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function HomeScreen() {
  const { user } = useAuth();

  if (!user?.role) {
    return null;
  }

  const isSender = user.role === 'sender';

  const SenderDashboard = () => (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="medium" color="white" variant="full" />
          <Text style={styles.roleIndicator}>Sender</Text>
        </View>
        <Text style={styles.headerSubtitle}>Welcome back, {user.name}!</Text>
      </View>

      <View style={styles.actionCards}>
        <TouchableOpacity style={[styles.actionCard, styles.primaryCard]}>
          <Package size={32} color="#ffffff" />
          <Text style={styles.actionCardTitle}>Send New Parcel</Text>
          <Text style={styles.actionCardSubtitle}>Create a new shipment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionCard, styles.secondaryCard]}>
          <MapPin size={32} color="#3b82f6" />
          <Text style={[styles.actionCardTitle, styles.secondaryCardTitle]}>Track Parcels</Text>
          <Text style={[styles.actionCardSubtitle, styles.secondaryCardSubtitle]}>Monitor your shipments</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Shipments</Text>
        <View style={styles.placeholderCard}>
          <Clock size={24} color="#64748b" />
          <Text style={styles.placeholderText}>No recent shipments</Text>
          <Text style={styles.placeholderSubtext}>Your recent parcels will appear here</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Movers</Text>
        <View style={styles.placeholderCard}>
          <Star size={24} color="#64748b" />
          <Text style={styles.placeholderText}>No favorite movers yet</Text>
          <Text style={styles.placeholderSubtext}>Save your trusted delivery partners</Text>
        </View>
      </View>
    </ScrollView>
  );

  const MoverDashboard = () => (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="medium" color="white" variant="full" />
          <Text style={styles.roleIndicator}>Mover</Text>
        </View>
        <Text style={styles.headerSubtitle}>Welcome back, {user.name}!</Text>
      </View>

      <View style={styles.actionCards}>
        <TouchableOpacity style={[styles.actionCard, styles.primaryCard]}>
          <MapPin size={32} color="#ffffff" />
          <Text style={styles.actionCardTitle}>Find Parcels</Text>
          <Text style={styles.actionCardSubtitle}>Discover deliveries on your route</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionCard, styles.secondaryCard]}>
          <Truck size={32} color="#14b8a6" />
          <Text style={[styles.actionCardTitle, styles.secondaryCardTitle]}>My Deliveries</Text>
          <Text style={[styles.actionCardSubtitle, styles.secondaryCardSubtitle]}>Manage active deliveries</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        <View style={styles.placeholderCard}>
          <Clock size={24} color="#64748b" />
          <Text style={styles.placeholderText}>No upcoming trips</Text>
          <Text style={styles.placeholderSubtext}>Your scheduled routes will appear here</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Earnings Summary</Text>
        <View style={styles.placeholderCard}>
          <TrendingUp size={24} color="#64748b" />
          <Text style={styles.placeholderText}>$0.00 this week</Text>
          <Text style={styles.placeholderSubtext}>Start delivering to earn money</Text>
        </View>
      </View>
    </ScrollView>
  );

  return isSender ? <SenderDashboard /> : <MoverDashboard />;
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
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  roleIndicator: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#dcfce7',
  },
  actionCards: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 16,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  primaryCard: {
    backgroundColor: '#22c55e',
  },
  secondaryCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  actionCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 12,
    textAlign: 'center',
  },
  actionCardSubtitle: {
    fontSize: 12,
    color: '#e2e8f0',
    marginTop: 4,
    textAlign: 'center',
  },
  secondaryCardTitle: {
    color: '#166534',
  },
  secondaryCardSubtitle: {
    color: '#15803d',
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
  placeholderCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#15803d',
    marginTop: 12,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: '#16a34a',
    marginTop: 4,
    textAlign: 'center',
  },
});