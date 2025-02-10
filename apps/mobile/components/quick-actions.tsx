import { Chip } from '@repo/ui';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { scale } from 'react-native-size-matters';

const actions = [
  { id: 1, label: 'Shop Online' },
  { id: 2, label: 'Book Travel' },
  { id: 3, label: 'Order Food' },
  { id: 4, label: 'Order Med' },
];

const QuickActions = function () {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  return (
    <FlatList
      data={actions}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      nestedScrollEnabled={true} 
      keyboardShouldPersistTaps="always"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
      renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedItem(index)}>
            <Chip text={item.label} applyNeonEffect={selectedItem === index} />
          </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    gap: scale(10),
    height: 80,
    marginTop: scale(40),
    marginLeft: scale(5),
  },
});

export default QuickActions;
