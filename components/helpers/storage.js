
//AsyncStorage es un sistema de almacenamiento de valor clave simple, no cifrado, asíncrono, 
//persistente que es global para la aplicación.Debería usarse en lugar de LocalStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = {

    //Establece el valor de una key e invoca una devolución de llamada al finalizar

    set: (key, value) => AsyncStorage.setItem(key, value),

    //Obtiene un elemento para una key e invoca una devolución de llamada al finalizar
    get: (key) => AsyncStorage.getItem(key),

};

export default storage;