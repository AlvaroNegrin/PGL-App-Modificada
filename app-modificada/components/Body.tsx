import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { styles } from '../styles/MainStyles'
import QRCode from 'react-native-qrcode-svg'
import { Card } from './Card'
import { cards } from '../data/Cards'

type BodyProps = {
    displayMyQR: boolean
}

const Body = ({displayMyQR}: BodyProps) => {
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
                <Card info={item.info} />)} 
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