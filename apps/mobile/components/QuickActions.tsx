import { QUICK_ACTIONS } from '@heymax/constants';
import { Chip } from '@heymax/ui';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';

const QuickActions = function () {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  return (
    <FlatList
      data={QUICK_ACTIONS}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      nestedScrollEnabled={true}
      keyboardShouldPersistTaps="always"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => setSelectedItem(index)}>
          <Chip text={item} applyNeonEffect={selectedItem === index} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    gap: scale(5),
    height: 80,
    marginTop: scale(30),
    marginLeft: scale(5),
  },
});

export default QuickActions;
