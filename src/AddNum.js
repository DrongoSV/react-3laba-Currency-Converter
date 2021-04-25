import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Text} from 'react-native';
 
export const AddInput = ({setResult}) => {
 
    const [value, setValue] = useState(null);
 
    const handlerButton = () => {
        fetch('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=3309deb379f86bcbe798')
            .then(e => e.json())
            .then(res => {
                if (!!res.USD_RUB) {
                    setResult(<Text>Сумма в USD составит: {(value/res.USD_RUB).toFixed(2)}$</Text>)
                } else {
                    setResult(<Text>Что-то сломалось :( Обратитесь к разработчику</Text>)
                }
            })
            .catch(error => setResult(<Text>Что-то сломалось :( Обратитесь к разработчику. {error}</Text>));
    }
 
    return (
        <View>
            <Text> Введите сумму в RUB</Text>
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={e =>  !!+e && setValue(e)}
                    placeholder="Сумма RUB"
                    keyboardType={'number-pad'}
                />
            </View>
                <Button style={styles.button} title="Рассчитать" onPress={handlerButton}/>
           
        </View>
    );
};
 
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: '15%',
        color: '#0066CC',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '70%',
    },
    input: {
        width: '70%',
        padding: 10,
        marginBottom: 20,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#0066CC',
    },
});