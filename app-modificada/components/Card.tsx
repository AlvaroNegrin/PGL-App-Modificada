import React from 'react';
import { Text, View } from 'react-native';
import { setMainStyles } from '../styles/MainStyles';
import { darkTheme, lightTheme, Theme } from '../styles/ColorThemes';

export type CardProps = {
  info: string
  isDarkMode?: boolean
}
export const Card = ({info, isDarkMode}: CardProps) => {
    const theme = isDarkMode ? darkTheme : lightTheme; 
  const styles = setMainStyles(theme);
  return (
    <Text style={styles.bodyItem}>{info}</Text>
  )
}