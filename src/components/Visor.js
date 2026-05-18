import { StyleSheet, Text, View } from 'react-native'

export default function Visor(props) {

    return (
        <View style={styles.visor}>

            <Text style={styles.titulo}>
                📱 Rede Social
            </Text>

            <Text style={styles.valor}>
                👍 Curtidas: {props.curtidas}
            </Text>

            <Text style={styles.valor}>
                👥 Seguidores: {props.seguidores}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    visor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 20
    },

    titulo: {
        fontSize: 34,
        color: '#fff',
        marginBottom: 30,
        fontWeight: 'bold'
    },

    valor: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold'
    }

})