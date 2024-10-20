import { useState } from 'react';
import { View } from 'react-native';
import { setMainStyles } from './styles/MainStyles';
import Header from './components/Header';
import Body from './components/Body';
import { darkTheme, lightTheme } from './styles/ColorThemes';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeMode = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };
  const theme = isDarkMode ? darkTheme : lightTheme; 
  const styles = setMainStyles(theme);
  
  return (
    <View style={styles.container}>
      <Header 
        title='My Portfolio App' 
        onPressInfo={() => setDisplayMyQR(true)} 
        onPressRepo={() => setDisplayMyQR(false)}
        handleThemeMode={handleThemeMode}
        isDarkMode={isDarkMode}
        theme={theme}
      />
      <Body displayMyQR = {displayMyQR} isDarkMode={isDarkMode}/>
    </View>
  );
}


