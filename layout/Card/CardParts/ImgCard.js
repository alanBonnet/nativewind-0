import { styled } from 'nativewind';
import { useState } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { styleScaled } from '../../../assets/styles/styleScaled';

// const Styled_ = styled();
const Styled_Image = styled(Image);
const Styled_TouchableOpacity = styled(TouchableOpacity);
const Styled_Text = styled(Text);
const Styled_View = styled(View);
const ImgCard = ({ uri, img, mostrarInfo, setMostrarInfo, personajes, setPersonajes, item }) => {
    const [confirmacion, setConfirmacion] = useState(false)
    return (
        <View>
            <TouchableOpacity onPress={() => {
                setMostrarInfo(!mostrarInfo)
            }}
                // setPersonajes(personajes.filter(pj => !pj.name.includes(item.name)))
                onLongPress={() => { if (!mostrarInfo) { setConfirmacion(!confirmacion) } }}

            >
                {!confirmacion && <Styled_Image source={uri} resizeMode='cover' style={{ width: img.size.width, height: img.size.height }} className='rounded-full' />}
            </TouchableOpacity>
            {confirmacion && <View>
                <Styled_TouchableOpacity
                    onPress={() => { setConfirmacion(!confirmacion) }}
                >
                    <Styled_Image source={uri} resizeMode='cover' style={{ width: img.size.width, height: img.size.height }} className='rounded-full mx-auto' />
                </Styled_TouchableOpacity>
                <Styled_View className="bg-gray-600/80 rounded-lg" style={[styleScaled['mt-2'],styleScaled['px-3'],styleScaled['py-2']]}>
                    <Styled_Text className="text-2xl text-center text-gray-100" >
                        ¿Seguro que quieres eliminar a {item.name} ?
                    </Styled_Text>
                    <Styled_View className="self-center w-full grid grid-columns-2">
                        <Styled_TouchableOpacity
                            onPress={()=>{
                                setPersonajes(personajes.filter(pj => !pj.name.includes(item.name)))
                            }}
                            className="flex-1 w-full bg-blue-400/90 rounded-lg"
                            style={styleScaled['my-2']}
                            >
                            <Styled_Text className="text-white text-2xl text-center">
                                Si
                            </Styled_Text>
                        </Styled_TouchableOpacity>
                        <Styled_TouchableOpacity
                            onPress={() => { setConfirmacion(!confirmacion) }}

                            className="flex-1 w-full bg-red-500/90 rounded-lg"
                                style={[styleScaled['my-2'],styleScaled['py-1']]}
                            >
                            <Styled_Text className="text-white text-2xl text-center">
                                No
                            </Styled_Text>
                        </Styled_TouchableOpacity>
                    </Styled_View>
                </Styled_View>
            </View>}
        </View>
    )
}

export default ImgCard