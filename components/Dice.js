import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RollDice, CompareArrays } from './Functions';


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


function HandlePress(props) {
    // Expects props
    // * number
    // * size
    // * modifier
    // * advantage
    // * setRoll
    // * setSum
    const number = props.number;
    const size = props.size;
    
    // Roll dice
    let rolls = RollDice({number, size});
    // If advantage or disadvantage, roll second set
    if (props.advantage != 0) {
        let rolls2 = RollDice({number, size});
        // Check which dice to keep
        if (props.advantage == 1) {
            // Advantage
            rolls = CompareArrays({arr1: rolls, arr2: rolls2, keep: 'high'});
        } else {
            // Disadvantage
            rolls = CompareArrays({arr1: rolls, arr2: rolls2, keep: 'low'});
        };
    };
    // Push modifier to roll array
    rolls.push(props.modifier);
    // Sum everything up
    let result = rolls.reduce( function(cumulative, individual){ return cumulative + individual; }, 0);
    // Reset advantage
    props.setAdvantage(0);
    // Report results to parent state
    props.setRoll(rolls);
    props.setSum(result);
}


export function Die(props) {
    const size = props.size;
    const number = props.diceCount;
    const modifier = props.modifier;
    const advantage = props.advantage;
    // Parent state setters
    const setAdvantage = props.setAdvantage;
    const setRoll = props.setRoll;
    const setSum = props.setSum;
    return(
        <View>
        <TouchableOpacity
            onPress={() => HandlePress({size, number, modifier, advantage, setAdvantage, setRoll, setSum})}
            style={styles.container}
        >
            <DieIcon size={size} />
            <Text>Roll d{size}</Text>
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
    }
});