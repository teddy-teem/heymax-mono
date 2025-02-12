import { Text, StyleSheet } from 'react-native';
import { TypographyProps } from './typography.type';

export const Typography = ({
  variant = 'body',
  children,
  style,
  color='#FFF'
}: TypographyProps) => {
  return (
    <Text style={[styles[variant], style, {color}]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: 'bold',
    display: 'flex',
    flexWrap: 'wrap'
  },
  h2: {
    fontFamily: 'Inter',
    fontSize: 30,
    fontWeight: 'bold',
     display: 'flex',
    flexWrap: 'wrap'
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
     display: 'flex',
    flexWrap: 'wrap'
  },
  h4: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter',
     display: 'flex',
    flexWrap: 'wrap'
  },
  body: {
    fontFamily: 'Inter',
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#666',
  },
});