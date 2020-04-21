import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function DieIcon(props) {
    const size = props.size;
    const iconsize = 40;
    switch (size) {
        case 100:
            return <Text style={styles.icon}>
                    <MaterialCommunityIcons name='dice-d10' size={0.8*iconsize} />
                    <MaterialCommunityIcons name='dice-d10' size={0.8*iconsize} />
                </Text>
        case 20:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d20' size={iconsize} /></Text>
        case 12:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d12' size={iconsize} /></Text>
        case 10:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d10' size={iconsize} /></Text>
        case 8:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d8' size={iconsize} /></Text>
        case 4:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d4' size={iconsize} /></Text>
        case 2:
            return <Text style={styles.icon}><MaterialCommunityIcons name='coin' size={iconsize} /></Text>
        default:
            return <Text style={styles.icon}><MaterialCommunityIcons name='dice-d6' size={iconsize} /></Text>
    };
}


function ThrowDice(props) {
    const number = props.number;
    const size = props.size;
    const modifier = props.modifier;
    let result = 0;
    for (let index = 0; index < number; index++) {
        result += Math.floor(Math.random() * size) + 1;
    };
    result += modifier;
    alert(result);
}


export function Die(props) {
    const size = props.size;
    const number = props.diceCount;
    const modifier = props.modifier;
    return(
        <View>
        <TouchableOpacity
            onPress={() => ThrowDice({size, number, modifier})}
            style={styles.container}
        >
            <DieIcon size={size} />
            <Text style={styles.txt}>Roll d{size}</Text>
        </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
    icon: {
        marginBottom: 5,
    },
    txt: {
    }
});