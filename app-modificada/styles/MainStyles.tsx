import { StyleSheet} from 'react-native';
import { Theme } from './ColorThemes';

  export const setMainStyles = (theme: Theme) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      height: '15%',
      paddingTop: 50,
      width: '100%',
      backgroundColor: theme.headerBackground,
    },
    headerTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      fontSize: 30,
      color: theme.textColor,
    },
    buttonsContainer: {
      flexDirection: 'row',
      backgroundColor: theme.buttonBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonWrapper: {
      width: '33%',
    },
    buttonText: {
      color: theme.buttonTextColor, 
      fontWeight: 'bold', 
      textTransform: 'uppercase',
    },
    bodyContainer: {
      width: '100%',
      borderWidth: 2,
      borderColor: theme.borderColor,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '85%',
    },
    profileWrapper: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    bodyAvatar: {
      height: 90,
      width: 90,
      borderRadius: 100,
      borderColor: theme.avatarBorderColor,
      borderWidth: 1,
    },
    bodyDescription: { 
      margin: 10, 
      backgroundColor: theme.itemBackgroundColor, 
      padding: 10, 
      borderRadius: 10, 
      width: '70%',
    },
    descriptionTitle: { 
      textAlign: 'center', 
      fontWeight: '700', 
      fontSize: 20,
      color: theme.textColor,
    },
    descriptionText: {
      textAlign: 'center',
      color: theme.textColor,
    },
    bodyItemTitle: {  
      color: theme.itemTextColor,  
      fontWeight: '900',
      textTransform: 'capitalize',
      fontSize: 20,
      textAlign: 'center',
    },
    bodyItemList: { 
      padding: 10,
    },
    item: {
      flexDirection: 'row', 
      borderColor: theme.borderColor,
      borderWidth: 1,
      borderStyle: 'dashed',
      padding: 20,
      color: theme.itemTextColor,
      textAlign: 'center',
      backgroundColor: theme.itemBackgroundColor,
    },
    imgItem: {
      height: 110,
      width: 90,
      borderRadius: 10,
      borderColor: theme.avatarBorderColor,
      borderWidth: 1,
    },
    textItem: {
      borderColor: theme.borderColor,
      padding: 20,
      color: theme.itemTextColor,
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 16,
      margin: 'auto'
    },
    qrCodeContainer: {
      justifyContent: 'center',
      borderWidth: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      borderColor: theme.borderColor,
    },
    shadowEffect: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 15,
    },
  });