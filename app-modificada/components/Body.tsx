import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { setMainStyles } from '../styles/MainStyles'
import QRCode from 'react-native-qrcode-svg'
import { Card } from './Card'
import { cards } from '../data/Cards'
import { darkTheme, lightTheme, Theme } from '../styles/ColorThemes'

type BodyProps = {
    displayMyQR: boolean
    isDarkMode: boolean
}

const Body = ({displayMyQR, isDarkMode}: BodyProps) => {
    const theme = isDarkMode ? darkTheme : lightTheme; 
    const styles = setMainStyles(theme);
  return (
    <>
      {displayMyQR ? (
        <View style={styles.bodyContainer}>
          <View>
            <View style={styles.profileWrapper}>
              <Image style={styles.bodyAvatar} source={require('../assets/SofyanAmrabat.jpg')} />
              <View style={styles.bodyDescription}>
                <Text style={styles.descriptionTitle}>
                  Descripción sobre mí!
                </Text>
                <Text style={styles.descriptionText}>
                  Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos.
                </Text>
              </View>
            </View>
            <Text style={styles.bodyItemTitle}>
              Cosas que me gustan mucho:
            </Text>
            <FlatList style={styles.bodyItemList} data={cards} renderItem={({item}) => (
                <Card info={item.info} isDarkMode={isDarkMode} />)} 
                keyExtractor={(item, index) => `${index}-${item.info}`}>
            </FlatList>
          </View>
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.qrCodeContainer}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </>
  );
}

export default Body