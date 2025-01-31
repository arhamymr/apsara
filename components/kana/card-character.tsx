import React from 'react';
import { ThemedText } from '../ThemedText';
import { Box } from '../ui/box';
import { KANA_CHARACTER, KANA_TYPE } from '@/constants/hiragana';
import { Grid, GridItem } from '@/components/ui/grid';

export const CardContainer = ({
  data,
  title,
  column = 4,
}: {
  data: KANA_CHARACTER[];
  title: KANA_TYPE;
  column?: number;
}) => {
  return (
    <Box className="mb-5">
      <ThemedText className="mb-4" type="subtitle">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </ThemedText>

      <Grid
        className="gap-5"
        _extra={{
          className: 'grid-cols-8',
        }}
      >
        {data.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export function CardItem({
  item,
}: {
  item: {
    kana: string;
    roumaji: string;
  };
}) {
  return (
    <GridItem
      className="bg-background-50 rounded-md"
      _extra={{
        className: 'col-span-1',
      }}
    >
      <Box className="p-2 border-2 border-gray-200 rounded-md w-[60px]">
        <ThemedText type="subtitle" className="text-center">
          {item.kana}
        </ThemedText>
        <ThemedText className="text-center">{item.roumaji}</ThemedText>
      </Box>
    </GridItem>
  );
}
