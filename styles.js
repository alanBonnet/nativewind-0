import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export const styles = StyleSheet.create({
    text: {
        fontFamily: 'fuentecita',
    },
    text2:{
        fontFamily: 'fuentecita1',
    }
})
// Código para cargar fuentes
export const loadCustomFonts = async() => {
  await Font.loadAsync({
    'fuentecita': require('./assets/fonts/get_schwifty.ttf'),
    'fuentecita1': require('./assets/fonts/RushTurbo.ttf')
  });
}