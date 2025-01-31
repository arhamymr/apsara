import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Camera, User } from 'lucide-react-native';
import { ThemedText } from '@/components/ThemedText';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="hiragana"
        options={{
          title: 'Hiragana',
          tabBarIcon: ({ color }) => (
            <ThemedText
              style={{
                color,
              }}
              type="subtitle"
            >
              あ
            </ThemedText>
          ),
        }}
      />
      <Tabs.Screen
        name="katakana"
        options={{
          title: 'Katakana',
          tabBarIcon: ({ color }) => (
            <ThemedText
              style={{
                color,
              }}
              type="subtitle"
            >
              ア
            </ThemedText>
          ),
        }}
      />
      <Tabs.Screen
        name="kanji"
        options={{
          title: 'Kanji',
          tabBarIcon: ({ color }) => {
            return (
              <ThemedText
                style={{
                  color,
                }}
                type="subtitle"
              >
                漢
              </ThemedText>
            );
          },
        }}
      />
    </Tabs>
  );
}
