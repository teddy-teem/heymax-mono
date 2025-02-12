import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { Typography } from '../typography';

export interface ChipProps {
  text: string;
  applyNeonEffect?: boolean;
}

export const Chip = ({ text, applyNeonEffect }: ChipProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          ...(applyNeonEffect && {
            ...styles.glow,
          }),
        },
      ]}
    >
      <Typography variant="body" style={{ color: 'white', fontWeight: 'bold' }}>
        {text}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#331D61',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  glow: {
    borderRadius: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: COLORS.default.primary,
  },
});
