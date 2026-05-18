import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native'

export default function Botao(props){

    const estilosBotao = [styles.botao]
    
    if(props.triplo) estilosBotao.push(styles.botaoTriplo)
    if(props.operacao) estilosBotao.push(styles.botaoOperacao)

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    botao: {
        fontSize: 22,
        height: Dimensions.get('screen').width / 4,
        width: Dimensions.get('screen').width / 3,
        padding: 20,
        backgroundColor: '#6200ee',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#111'
    },
    botaoTriplo: {
        width: Dimensions.get('screen').width / 4 * 3.999
    },
    botaoOperacao: {
        backgroundColor: '#d32f2f',
    }
})