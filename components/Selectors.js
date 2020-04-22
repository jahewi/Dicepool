import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Selector(props) {
    return(
        <View>
            <Text>{props.txt}</Text>
            <View style={styles.selector}>
                <TouchableOpacity
                    onPress={() => props.selectSetter(props.selectValue-1)}
                >
                    <MaterialCommunityIcons name='minus' size={25} />
                </TouchableOpacity>
                <Text style={styles.selectorText}>{props.selectValue}</Text>
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
        justifyContent: 'center',
        alignContent: 'center',
        padding: 3,
    }
})