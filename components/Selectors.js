import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Selector(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.selectorText}>{props.txt}</Text>
            <View style={styles.selector}>
                <TouchableOpacity
                    onPress={() => props.selectSetter(props.selectValue-1)}
                >
                    <MaterialCommunityIcons name='minus' size={25} />
                </TouchableOpacity>
                <Text style={styles.selectorValueText}>{props.selectValue}</Text>
                <TouchableOpacity
                    onPress={() => props.selectSetter(props.selectValue+1)}
                >
                    <MaterialCommunityIcons name='plus' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    selectorText: {
        textAlign: 'center',
    },
    selectorValueText: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 3,
    }
})