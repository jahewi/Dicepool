import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Die } from '../components/Dice';
import { DiceCountSelector, ModifierSelector } from '../components/Selectors';

export function DiceScreen() {
    const [diceCount, setDiceCount] = useState(1);
    const [modifier, setModifier] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.cCS}>
                <Die size={100} diceCount={diceCount} modifier={modifier} />
                <Die size={20} diceCount={diceCount} modifier={modifier} />
                <Die size={12} diceCount={diceCount} modifier={modifier} />
                <Die size={10} diceCount={diceCount} modifier={modifier} />
                <Die size={8} diceCount={diceCount} modifier={modifier} />
                <Die size={6} diceCount={diceCount} modifier={modifier} />
                <Die size={4} diceCount={diceCount} modifier={modifier} />
                <Die size={2} diceCount={diceCount} modifier={modifier} />
            </ScrollView>
            <View style={styles.tabBarInfoContainer}>
                <DiceCountSelector diceCount={diceCount} setDiceCount={setDiceCount} />
                <ModifierSelector modifier={modifier} setModifier={setModifier} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    scrollView: {
      marginHorizontal: 20,
      marginBottom: 65,
    },
    cCS: {
       flexDirection:'row',
       flexWrap: 'wrap',
       justifyContent: 'space-evenly',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }   
});