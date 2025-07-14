import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { User, Settings, Bell, CircleHelp as HelpCircle, LogOut, RefreshCw } from 'lucide-react-native';
import { TumaRideLogo } from '@/components/TumaRideLogo';

export default function ProfileScreen() {
  const { user, logout, updateUserRole } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: logout },
      ]
    );
  };

  const handleRoleSwitch = () => {
    const newRole = user?.role === 'sender' ? 'mover' : 'sender';
    const roleText = newRole === 'sender' ? 'Parcel Sender' : 'Parcel Mover';
    
    Alert.alert(
      'Switch Role',
      `Are you sure you want to switch to ${roleText}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Switch', onPress: () => updateUserRole(newRole) },
      ]
    );
  };

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TumaRideLogo size="small" color="white" variant="icon" />
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <Text style={styles.headerSubtitle}>Manage your account settings</Text>
      </View>

      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <User size={48} color="#3b82f6" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>
              {user.role === 'sender' ? 'Parcel Sender' : 'Parcel Mover'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={handleRoleSwitch}
          activeOpacity={0.8}
        >
          <View style={styles.menuItemLeft}>
            <RefreshCw size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Switch Role</Text>
          </View>
          <Text style={styles.menuItemSubtext}>
            Change to {user.role === 'sender' ? 'Mover' : 'Sender'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.8}
        >
          <View style={styles.menuItemLeft}>
            <Settings size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Account Settings</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.8}
        >
          <View style={styles.menuItemLeft}>
            <Bell size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.8}
        >
          <View style={styles.menuItemLeft}>
            <HelpCircle size={20} color="#64748b" />
            <Text style={styles.menuItemText}>Help & Support</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
        activeOpacity={0.8}
      >
        <LogOut size={20} color="#ef4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>TumaRide v1.0.0</Text>
        <Text style={styles.footerSubtext}>Your trusted parcel delivery partner</Text>
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
  userCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#15803d',
    marginBottom: 8,
  },
  roleBadge: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  roleText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#166534',
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    color: '#166534',
    marginLeft: 12,
  },
  menuItemSubtext: {
    fontSize: 14,
    color: '#15803d',
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#94a3b8',
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: 32,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#15803d',
    fontWeight: '500',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#16a34a',
    marginTop: 4,
  },
});