export type Theme = {
    backgroundColor: string
    textColor: string
    headerBackground: string
    buttonBackground: string
    buttonTextColor: string
    borderColor: string
    avatarBorderColor: string
    itemBackgroundColor: string
    itemTextColor: string
  }

export const lightTheme: Theme = {
    backgroundColor: '#fff',
    textColor: '#000',
    headerBackground: 'gray',
    buttonBackground: 'darkgray',
    buttonTextColor: 'white',
    borderColor: 'black',
    avatarBorderColor: 'gray',
    itemBackgroundColor: 'silver',
    itemTextColor: 'darkred',
  };
  
export const darkTheme: Theme = {
    backgroundColor: '#121212',
    textColor: '#fff',
    headerBackground: '#333',
    buttonBackground: '#444',
    buttonTextColor: '#fff',
    borderColor: '#fff',
    avatarBorderColor: '#fff',
    itemBackgroundColor: '#555',
    itemTextColor: '#e0e0e0',
  };