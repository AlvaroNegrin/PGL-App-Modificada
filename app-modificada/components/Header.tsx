import React from 'react'
import { View, Text, Pressable, Button } from 'react-native'
import { styles } from '../styles/MainStyles'

type HeaderProps = {
    title: string
    onPressInfo: () => void
    onPressRepo: () => void
}

export const Header = (props: HeaderProps) => {
    const {title, onPressInfo, onPressRepo} = props
  return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonWrapper} onPress={onPressInfo}>
          <Text style={{...styles.buttonText, ...styles.shadowEffect}}>Mi info</Text>
        </Pressable>
        <Button onPress={onPressRepo} title="Mi Repo" color="light-gray" accessibilityLabel='A button that shows a QR code' />
        </View>
      </View>
      
  )
}

export default Header