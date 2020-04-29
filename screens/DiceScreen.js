import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Die } from '../components/Dice';
import { NumberSelector, AdvantageSelector } from '../components/Selectors';
import { Reporter } from '../components/Reporter';


export function DiceScreen() {
    const [diceCount, setDiceCount] = useState(1);
    const [modifier, setModifier] = useState(0);
    const [advantage, setAdvantage] = useState(0);
    const [previousRoll, setPreviousRoll] = useState([]);
    const [previousSum, setPreviousSum] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.cCS}>
                <Die size={100} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={20} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={12} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={10} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={8} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={6} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={4} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
                <Die size={2} diceCount={diceCount} modifier={modifier} advantage={advantage} setAdvantage={setAdvantage} setRoll={setPreviousRoll} setSum={setPreviousSum} />
            </ScrollView>
            <View style={[styles.selectorContainer, (advantage!=0) ? styles.containerAdvantage : null]}>
                <NumberSelector txt={"#Dice:"} selectValue={diceCount} selectSetter={setDiceCount}/>
                <NumberSelector txt={"Modifier:"} selectValue={modifier} selectSetter={setModifier}/>
                <AdvantageSelector advState={advantage} advSetter={setAdvantage} />
                <Reporter sum={previousSum} roll={previousRoll}/>
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
      marginBottom: 83,
    },
    cCS: {
       flexDirection:'row',
       flexWrap: 'wrap',
       justifyContent: 'space-evenly',
    },
    selectorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fbfbfb',
        paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerAdvantage: {
        borderTopColor: 'tomato',
        borderTopWidth: 3,
    }
});