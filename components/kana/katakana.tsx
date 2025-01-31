import { ThemedText } from '@/components/ThemedText';
import { Box } from '@/components/ui/box';
import { hiragana } from '@/constants/hiragana';
import { CardContainer, CardItem } from './card-character';
import { ScrollView } from 'react-native';

export default function Hiragana() {
  return (
    <ScrollView className="p-5">
      <ThemedText className="mb-4" type="title">
        Hiragana
      </ThemedText>

      <CardContainer title="gojuuon" data={hiragana} />

      <ThemedText className="mb-4" type="subtitle">
        Gojuuon
      </ThemedText>
      <Box className="flex gap-4 flex-row flex-wrap">
        {hiragana.map((item, index) =>
          item.type === 'gojuuon' ? <CardItem item={item} key={index} /> : null
        )}
      </Box>

      <ThemedText type="subtitle">Dakuon</ThemedText>
      <Box className="flex gap-4 flex-row flex-wrap">
        {hiragana.map((item, index) =>
          item.type === 'dakuon' ? (
            <ThemedText key={index}>{item.kana}</ThemedText>
          ) : null
        )}
      </Box>

      <ThemedText type="subtitle">Handakuon</ThemedText>
      <Box>
        {hiragana.map((item, index) =>
          item.type === 'handakuon' ? (
            <ThemedText key={index}>{item.kana}</ThemedText>
          ) : null
        )}
      </Box>

      <ThemedText type="subtitle">Youon</ThemedText>
      <Box>
        {hiragana.map((item, index) =>
          item.type === 'youon' ? (
            <ThemedText key={index}>{item.kana}</ThemedText>
          ) : null
        )}
      </Box>
    </ScrollView>
  );
}
