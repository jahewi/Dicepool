import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

function Bullet(props) {
    return (
        <Text>{'\u2022'} {props.msg}{"\n"}</Text>
    );
}

export function DevScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.header}>To Do</Text>
                <Text style={styles.body}>
                    <Bullet msg="Advantage / Disadvantage selector" />
                    <Bullet msg="Savable user made roll combinations" />
                    <Bullet msg="User can make collections (characters) that include these roll combinations (actions)" />
                    <Bullet msg="Report result with modal instead of alert()" />
                    <Bullet msg="Report individual die rolls" />
                    <Bullet msg="Keep a log of recent rolls" />
                    <Bullet msg="Select which type of game system a collection uses" />
                    <Bullet msg="Import/export collection files for backup and transfer" />
                    <Bullet msg="Make pretty" />
                    <Bullet msg="Let user create themes, aka set app colors" />
                </Text>
            </ScrollView>
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
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    body: {
    }
});