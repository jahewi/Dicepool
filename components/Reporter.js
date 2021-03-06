import React from 'react';
import { StyleSheet, View, Text } from 'react-native';



function PrintSum(props) {
    if (props.num == null) {
        return(
            <Text style={styles.selectorText}>-</Text>
        );
    };
    return(
        <Text style={styles.selectorText}>{props.num}</Text>
    );
}


// ToDo: Print only a max amount of numbers
// Maybe sort them and report highest and lowest few
function PrintArray(props) {
    // If reporting saving throw (or other string)
    if (typeof(props.roll)=='string') {
        return(
            <Text style={styles.selectorValueText}>{props.roll}</Text>
        );
    };
    // If roll array empty
    if (props.roll.length == 0) {
        return(
            <Text style={styles.selectorValueText}>&nbsp;</Text>
        );
    };
    // If roll array only contains modifier
    if (props.roll.length == 1) {
        return(
        <Text style={styles.selectorValueText}>{props.roll[0]}</Text>
        );
    };
    // Else array contains both die rolls and modifier
    let str = '[';
    const rolls = props.roll.slice();
    const modifier = rolls.pop();
    rolls.forEach(num => {
        str += num + ', '
    });
    str = str.slice(0, -2) + ']';
    if (modifier < 0) {
        str += ' ' + modifier;        
    } else if (modifier > 0) {
        str += ' +' + modifier;
    };
    return(
        <Text style={styles.selectorValueText}>{str}</Text>
    );
}


export function Reporter(props) {    
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.container}>
                <PrintSum num={props.sum}/>
                <PrintArray roll={props.roll}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#aaa',
        paddingHorizontal: 5,
        paddingVertical: 2,
        minWidth: 50,
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    selectorText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    selectorValueText: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 12,
    }
})