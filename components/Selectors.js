import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function DiceCountSelector(props) {
    return(
        <View>
            <Text>Number of dice: </Text>
            <View style={styles.selector}>
                <TouchableOpacity
                    onPress={() => props.setDiceCount(props.diceCount-1)}
                >
                    <MaterialCommunityIcons name='minus' size={25} />
                </TouchableOpacity>
                <Text style={styles.selectorText}>{props.diceCount}</Text>
                <TouchableOpacity
                    onPress={() => props.setDiceCount(props.diceCount+1)}
                >
                    <MaterialCommunityIcons name='plus' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function ModifierSelector(props) {
    return(
        <View style={styles.container}>
            <Text>Modifier: </Text>
            <View style={styles.selector}>
                <TouchableOpacity
                    onPress={() => props.setModifier(props.modifier-1)}
                >
                    <MaterialCommunityIcons name='minus' size={25} />
                </TouchableOpacity>
                <Text style={styles.selectorText}>{props.modifier}</Text>
                <TouchableOpacity
                    onPress={() => props.setModifier(props.modifier+1)}
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