import { ScaledSheet } from 'react-native-size-matters'

export const styleScaled = ScaledSheet.create(
    // * Cada Escala con paddings y demás comienza en p-1 por ejemplo en 3.75 Scala, p-2 es 7.5 y así...
    /* 
        "":
        {

        },
    */
    {
        // * paddings
        "p-2":
        {
            padding: "7.5@ms"
        },
            // * horizontal padding
        "px-3":
        {
            paddingHorizontal: "11.25@ms"
        },
        "px-5":
        {
            paddingHorizontal: "18.75@ms"
        },
            // * vertical padding
        "py-1":
        {
            paddingVertical: "3.75@mvs"
        },
        "py-2":
        {
            paddingVertical: "7.5@mvs"
        },
        "py-4":
        {
            paddingVertical: "15@mvs"
        },
        "py-6":
        {
            paddingVertical: "22.5@mvs"
        },
            // * padding top
        "pt-9":
        {
            paddingTop: "33.75@mvs"
        },
        // * margins
        "my-2":
        {
            marginVertical: "7.5@mvs"
        },
            // * bottom margins
        "mb-flatlist":
        {
            marginBottom: "160@mvs0.8"
        },
        "mb-12":
        {
            marginBottom: "45@mvs"
        },
            // * top margins
        "mt-2":
        {
            marginTop: "7.5@mvs"
        },
        "mt-6":
        {
            marginTop: "22.5@mvs"
        },
        // * absolute position
        "bottom-[250]":
        {
            bottom: "250@mvs"
        }
    }
)