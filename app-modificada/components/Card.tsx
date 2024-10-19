import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/MainStyles';

export type CardProps = {
  info: string
}
export const Card = (props: CardProps) => {
  const {info} = props;
  return (
    <Text style={styles.cosasQmeGustanMuxoEstails}>{info}</Text>
  )
}