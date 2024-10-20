import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from './styles/MainStyles';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  
  return (
    <View style={styles.container}>
      <Header title='My Portfolio App' onPressInfo={() => setDisplayMyQR(true)} onPressRepo={() => setDisplayMyQR(false)}/>
      <Body displayMyQR = {displayMyQR}/>
    </View>
  );
}


