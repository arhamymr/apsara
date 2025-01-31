import Hiragana from '@/components/kana/hiragana';
import { Button, ButtonText } from '@/components/ui/button';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Center } from '@/components/ui/center';

export default function HiraganaPage() {
  return (
    <View>
      <Center className="h-full">
        <Text>First page </Text>
        <Link href={'/hiragana'}>
          <Text>Go to dashboard</Text>
        </Link>
      </Center>
    </View>
  );
}
