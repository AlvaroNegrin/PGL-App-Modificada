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
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>{title}</Text>
        <View style={styles.rowTopSecondContainer}>
        <Pressable style={styles.buttonruta} onPress={onPressInfo}>
          <Text style={{...{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}, ...styles.shadoxboxing}}>Mi info</Text>
        </Pressable>
        <Button onPress={onPressRepo} title="Mi Repo" color="light-gray" accessibilityLabel='Un botón pal QR' />
        </View>
      </View>
      
  )
}

export default Header