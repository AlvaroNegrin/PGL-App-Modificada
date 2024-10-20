import React from 'react'
import { View, Text, Pressable, Button } from 'react-native'
import { setMainStyles} from '../styles/MainStyles'
import { Theme } from '../styles/ColorThemes'

type HeaderProps = {
    title: string
    onPressInfo: () => void
    onPressRepo: () => void
    handleThemeMode: () => void
    isDarkMode: boolean
    theme: Theme
}

export const Header = (props: HeaderProps) => {
    const {title, onPressInfo, onPressRepo, handleThemeMode, isDarkMode, theme} = props
    const styles = setMainStyles(theme);
  return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonWrapper} onPress={handleThemeMode}>
          <Text style={{...styles.buttonText, ...styles.shadowEffect}}>Theme Mode</Text>
        </Pressable>
        <Pressable style={styles.buttonWrapper} onPress={onPressInfo}>
          <Text style={{...styles.buttonText, ...styles.shadowEffect}}>Mi info</Text>
        </Pressable>
        <Button onPress={onPressRepo} title="Mi Repo" color="light-gray" accessibilityLabel='A button that shows a QR code' />
        
        </View>
      </View>
      
  )
}

export default Header