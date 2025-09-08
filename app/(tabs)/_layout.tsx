import { Tabs } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { Home, Search, Send, Truck, MapPin, User } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

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
          paddingBottom: insets.bottom + 8,
          height: 70 + insets.bottom,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#64748b',
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
              tabBarIcon: ({ size, color }) => <Send size={size} color={color} />,
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

      {/* Define all screens but only show relevant ones in tabs */}
      <Tabs.Screen
        name="find"
        options={{
          href: isSender ? null : undefined,
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          href: isSender ? null : undefined,
        }}
      />
      <Tabs.Screen
        name="send"
        options={{
          href: isSender ? undefined : null,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          href: isSender ? undefined : null,
        }}
      />
    </Tabs>
  );
}