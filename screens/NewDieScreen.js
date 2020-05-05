import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


async function getData() {
    try {
      console.log("Trying to getItem...");
      const value = await AsyncStorage.getItem('UserDice');
      console.log("Got value: ", value);
      if(value !== null) {
        // value previously stored
        console.log("Value read.");
        return value;
      } else {
        console.log("No value found.");
        return;
      }
    } catch(e) {
      // error reading value
      console.log("Reading error :(")
    }
};


async function storeData(props) {
    try {
      console.log("Saving...");
      await AsyncStorage.setItem('UserDice', props.userDiceList);
      consol.log("Saved: ", props.userDiceList);
    } catch (e) {
      // saving error
      console.log("Saving error :(")
    }

    console.log("storeData finished.");
};


function AddNewDie(props) {
    // Read UserDice from AsyncStorage
    let userDiceList = [];
    const storedData = getData();
    if (storedData!=null && storedData!=undefined) {
        console.log("Pushing old: ", storedData);
        userDiceList.push(storedData);
    }
    // Generate unique key for new die OR increment list length as key
    const newKey = userDiceList.length + 1;
    // Create new JSON object
    const newDieObject = {
        "key": newKey,
        "sides": props.sides
    };
    // Push new object into list
    userDiceList.push({newDieObject});
    // Save list as UesrDice to AsyncStorage
    storeData(userDiceList);
    // Hurray!(?)
    alert("Added " + props.sides + "-sided die!\nList is now " + newKey + " items long.");
}


export function NewDieScreen() {
    const [sides, setSides] = useState(0);    

    return(
        <View style={styles.container}>
            <Text>How many sides?</Text>
            <TextInput
                onChangeText={(txt) => {setSides(txt)}}
                keyboardType='numeric'
                style={styles.input}
            />
            <Button
                title="Add"
                onPress={() => AddNewDie({sides})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
        marginBottom: 83,
    },
    input: {
        borderWidth: 1,
        marginTop: 3,
        marginBottom: 5,
    }
})