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
        <View style={styles.bodystails}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.avatar} source={require('../assets/SofyanAmrabat.jpg')} />
              <View style={{ margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 10, width: '70%' }}>
                <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>
                  Descripción sobre mí!
                </Text>
                <Text>
                  Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos.
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: 'beriblak',
                fontWeight: '900',
                textTransform: 'capitalize',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Cosas que me gustan mucho:
            </Text>
            <FlatList style={{padding: 10}} data={cards} renderItem={({item}) => (
                <Card info={item.info} />)} 
                keyExtractor={(item, index) => `${index}-${item.info}`}>
            </FlatList>
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </>
  );
}

export default Body