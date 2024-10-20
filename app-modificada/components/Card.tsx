import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { setMainStyles } from '../styles/MainStyles';
import { darkTheme, lightTheme, Theme } from '../styles/ColorThemes';

export type CardProps = {
  info: string
  image: ImageSourcePropType
  isDarkMode?: boolean
}
export const Card = ({image,info, isDarkMode}: CardProps) => {
    const theme = isDarkMode ? darkTheme : lightTheme; 
  const styles = setMainStyles(theme);
  return (
    <View style={styles.item}>
        <Image style={styles.imgItem} source={image}></Image>
        <Text style={styles.textItem}>{info}</Text>
    </View>
  )
}