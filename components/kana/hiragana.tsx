import { ThemedText } from '@/components/ThemedText';
import { hiragana } from '@/constants/hiragana';
import { CardContainer, CardItem } from './card-character';
import { SafeAreaView, ScrollView } from 'react-native';

export default function Hiragana() {
  return (
    <SafeAreaView>
      <ScrollView>
        {' '}
        <ThemedText className="mb-4" type="title">
          Hiragana
        </ThemedText>
        <CardContainer title="gojuuon" data={hiragana} />
        <CardContainer title="dakuon" data={hiragana} />
        <CardContainer title="handakuon" data={hiragana} />
        <CardContainer title="youon" data={hiragana} />
      </ScrollView>
    </SafeAreaView>
  );
}
