import { FETCH_PJS_SUCCESS, FETCH_PJS_ERROR } from '../type/types';

const INITIAL_STATE = {
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch ( type){
        case FETCH_PJS_SUCCESS:
            return {
                loading:false,
                data:payload,
                msj:"Pjs cargados correctamente."
            }
        case FETCH_PJS_ERROR:
            return {
                loading:false,
                data:[],
                msj:"Pjs error."
            }
        default:
            return state;
    }
}