import React from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from '../styles/MainStyles'
import QRCode from 'react-native-qrcode-svg'

type BodyProps = {
    displayMyQR: boolean
}

const Body = (props: BodyProps) => {
    const displayMyQR = props;
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
            <ScrollView style={{ padding: 10 }}>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Salir a pasear</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ir a la playita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Domingos de misa</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>La guitarrita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>El monte con lluvia</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Música variadita</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Anime</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ducharme</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Videojuegos</Text>
              <Text style={styles.cosasQmeGustanMuxoEstails}>Ir de cenar romántica</Text>
            </ScrollView>
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

Body.propTypes = {}

export default Body