import { StyleSheet, View } from 'react-native'
import Botao from './src/components/Botao'
import Visor from './src/components/Visor'
import { useState } from 'react'

export default function App() {

    const [curtidas, setCurtidas] = useState(0)
    const [seguidores, setSeguidores] = useState(0)

    const curtir = () => {
        setCurtidas(curtidas + 1)
    }

    const comentar = () => {
        setCurtidas(curtidas + 2)
    }

    const compartilhar = () => {
        setCurtidas(curtidas + 5)
    }

    const viralizar = () => {
        setCurtidas(curtidas * 2)
    }

    const seguir = () => {
        setSeguidores(seguidores + 1)
    }

    const engajar = () => {
        setCurtidas(curtidas + 10)
        setSeguidores(seguidores + 3)
    }

    const limpar = () => {
        setCurtidas(0)
        setSeguidores(0)
    }

    return (
        <View style={styles.container}>

            <View style={styles.visor}>
                <Visor
                    curtidas={curtidas}
                    seguidores={seguidores}
                />
            </View>

            <View style={styles.botoes}>

                <Botao label="👍 Curtir" onClick={curtir} />
                <Botao label="💬 Comentar" onClick={comentar} />
                <Botao label="🔁 Compartilhar" onClick={compartilhar} />

                <Botao label="🚀 Viralizar" onClick={viralizar} />
                <Botao label="👤 Seguir" onClick={seguir} />
                <Botao label="🔥 Engajar" onClick={engajar} />

                <Botao
                    label="AC"
                    triplo
                    operacao
                    onClick={limpar}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    visor: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#111'
    },

    botoes: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})