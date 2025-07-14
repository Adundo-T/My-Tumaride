import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Package, ArrowRight, Truck } from 'lucide-react-native';

interface TumaRideLogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'full' | 'icon' | 'text';
  color?: 'green' | 'white' | 'dark';
}

export const TumaRideLogo: React.FC<TumaRideLogoProps> = ({ 
  size = 'medium', 
  variant = 'full',
  color = 'green'
}) => {
  const getSize = () => {
    switch (size) {
      case 'small': return { icon: 20, text: 16, container: 40 };
      case 'medium': return { icon: 32, text: 24, container: 60 };
      case 'large': return { icon: 48, text: 36, container: 80 };
    }
  };

  const getColors = () => {
    switch (color) {
      case 'green': return { primary: '#22c55e', secondary: '#16a34a', text: '#166534' };
      case 'white': return { primary: '#ffffff', secondary: '#f0fdf4', text: '#ffffff' };
      case 'dark': return { primary: '#166534', secondary: '#15803d', text: '#166534' };
    }
  };

  const sizes = getSize();
  const colors = getColors();

  const LogoIcon = () => (
    <View style={[styles.iconContainer, { 
      width: sizes.container, 
      height: sizes.container,
      backgroundColor: colors.primary,
    }]}>
      <View style={styles.iconContent}>
        <Package size={sizes.icon * 0.4} color={colors.secondary === '#f0fdf4' ? colors.primary : '#ffffff'} />
        <ArrowRight size={sizes.icon * 0.3} color={colors.secondary === '#f0fdf4' ? colors.primary : '#ffffff'} style={styles.arrow} />
        <Truck size={sizes.icon * 0.4} color={colors.secondary === '#f0fdf4' ? colors.primary : '#ffffff'} />
      </View>
    </View>
  );

  const LogoText = () => (
    <Text style={[styles.logoText, { 
      fontSize: sizes.text, 
      color: colors.text 
    }]}>
      TumaRide
    </Text>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  if (variant === 'text') {
    return <LogoText />;
  }

  return (
    <View style={styles.fullLogo}>
      <LogoIcon />
      <LogoText />
    </View>
  );
};

const styles = StyleSheet.create({
  fullLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  iconContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  arrow: {
    opacity: 0.8,
  },
  logoText: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});