//La función combineReducers devuelve un objeto cuyos valores son 
//diferentes funciones reductoras en una única función reductora que puedes
// enviar a createStore.
import { combineReducers } from "redux";

import pjsRickAndMorty from "./pjsRickAndMorty.reducer";

export default combineReducers({
   pjsRickAndMorty
})