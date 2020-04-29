import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';


function Bullet(props) {
    return (
        <Text>{'\u2022'} {props.msg}{"\n"}</Text>
    );
}


export function DevScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.header}>Upcoming Changes</Text>
                <Text>
                    <Bullet msg="Hightlight result box border when in an adv. state." />
                    <Bullet msg="Savable user made roll combinations" />
                    <Bullet msg="User can make collections (characters) that include these roll combinations (actions)" />
                    <Bullet msg="Keep a log of recent rolls" />
                    <Bullet msg="Report not-used advantage/disadvantage dice" />
                    <Bullet msg="Add ads" />
                    <Bullet msg="Select which type of game system a collection uses" />
                    <Bullet msg="Import/export collection files for backup and transfer" />
                    <Bullet msg="Make pretty" />
                    <Bullet msg="Let user create themes, aka set app colors" />
                    <Bullet msg="Change theme according to active collection" />
                </Text>

                <Text style={styles.header}>Licenses</Text>
                <Text>
                    <Bullet msg="This software is licensed under the GNU General Public License v3.0" />
                    <Bullet msg="This software uses 'react-native-collapsible', which is licensed under the MIT License" />
                    <Bullet msg="This software uses 'react-native-community/async-storage', which is licensed under the MIT License" />
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
    }
});