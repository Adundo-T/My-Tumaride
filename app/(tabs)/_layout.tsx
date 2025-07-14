import { Tabs } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { Chrome as Home, Package, Search, Truck, MapPin, User } from 'lucide-react-native';

export default function TabLayout() {
  const { user } = useAuth();

  if (!user?.role) {
    return null;
  }

  const isSender = user.role === 'sender';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#15803d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      
      {isSender ? (
        <>
          <Tabs.Screen
            name="send"
            options={{
              title: 'Send',
              tabBarIcon: ({ size, color }) => <Package size={size} color={color} />,
            }}
          />
          <Tabs.Screen
            name="track"
            options={{
              title: 'Track',
              tabBarIcon: ({ size, color }) => <MapPin size={size} color={color} />,
            }}
          />
        </>
      ) : (
        <>
          <Tabs.Screen
            name="find"
            options={{
              title: 'Find',
              tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
            }}
          />
          <Tabs.Screen
            name="deliveries"
            options={{
              title: 'Deliveries',
              tabBarIcon: ({ size, color }) => <Truck size={size} color={color} />,
            }}
          />
        </>
      )}
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />

      {/* Hide screens not relevant to current role */}
      {isSender && (
        <>
          <Tabs.Screen
            name="find"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="deliveries"
            options={{
              href: null,
            }}
          />
        </>
      )}
      
      {!isSender && (
        <>
          <Tabs.Screen
            name="send"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="track"
            options={{
              href: null,
            }}
          />
        </>
      )}
    </Tabs>
  );
}