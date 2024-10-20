import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      height: '15%',
      paddingTop: 50,
      width: '100%',
    },
    headerTitle: {
      backgroundColor: 'gray',
      textAlign: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      fontSize: 30,
    },
    buttonsContainer: {
      flexDirection: 'row',
      backgroundColor: 'darkgray',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonWrapper: {
      width:'50%',
    },
    buttonText: {
      color: 'white', 
      fontWeight: 'bold', 
      textTransform: 'uppercase'
    },
    bodyContainer: {
      width: '100%',
      borderWidth: 2,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '85%'
    },
    profileWrapper: {
      flexDirection: 'row', 
      alignItems: 'center' 
    },
    bodyAvatar: {
      height: 90,
      width: 90,
      borderRadius: 100
    },
    bodyDescription: { 
      margin: 10, 
      backgroundColor: 'lightgray', 
      padding: 10, 
      borderRadius: 10, 
      width: '70%' 
    },
    descriptionTitle: { 
      textAlign: 'center', 
      fontWeight: '700', 
      fontSize: 20 
    },
    descriptionText: {  
      textAlign: 'center',
    },
    bodyItemTitle: {  
      color: 'darkred',  
      fontWeight: '900',
      textTransform: 'capitalize',
      fontSize: 20,
      textAlign: 'center',
    },
    bodyItemList: { 
      padding: 10,
    },
    
    bodyItem: {
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'dashed',
      padding: 20,
      color: 'darkred',
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 16,
      backgroundColor: 'silver'
    },
    qrCodeContainer: {
      justifyContent: 'center',
      borderWidth: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center'
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
    }
  });