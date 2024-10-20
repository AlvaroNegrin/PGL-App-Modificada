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
              <Image style={styles.bodyAvatar} source={require('../assets/images/ranita-feliz.png')} />
              <View style={styles.bodyDescription}>
                <Text style={styles.descriptionTitle}>
                  Descripción sobre mí!
                </Text>
                <Text style={styles.descriptionText}>
                  Soy alumno, me llamo Álvaro y me gusta la programacion aunque a veces me pongo a leer manga en medio de clase.
                </Text>
              </View>
            </View>
            <Text style={styles.bodyItemTitle}>
              Ya que estamos, mis mangas favoritos:
            </Text>
            <FlatList style={styles.bodyItemList} data={cards} renderItem={({item}) => (
                <Card image={item.image} info={item.info} isDarkMode={isDarkMode} />)} 
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