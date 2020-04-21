import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Die } from '../components/Dice'

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.cCS}>
                <Die size="100" number="1" />
                <Die size="20" number="1" />
                <Die size="12" number="1" />
                <Die size="10" number="1" />
                <Die size="8" number="1" />
                <Die size="6" number="1" />
                <Die size="4" number="1" />
                <Die size="2" number="1" />
                <Die size="66" number="1" />
                <Die size="666" number="1" />
                <Die size="69" number="1" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    cCS: {
       flexDirection:'row',
       flexWrap: 'wrap',
       justifyContent: 'space-evenly',
    }
});