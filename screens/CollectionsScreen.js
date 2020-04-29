import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { AdvantageSelector } from '../components/Selectors';
import { Reporter } from '../components/Reporter';
import { RollDice, CompareArrays } from '../components/Functions';
import AsyncStorage from '@react-native-community/async-storage';
import * as data from '../components/Collections.json';


function handlePress(props) {
  // Report name of action
  props.setActName(props.actionName)

  const advantage = props.advantage;
  const hitMod = props.hitMod;
  const numOfDice = props.numOfDice;
  const sizeOfDice = props.sizeOfDice;
  const dmgMod = props.dmgMod;
  
  const setAdvantage = props.setAdvantage;
  const setHitRoll = props.setHitRoll;
  const setHitSum = props.setHitSum;
  const setDmgRoll = props.setDmgRoll;
  const setDmgSum = props.setDmgSum;

  let crit = 0; // 1 if crit success, -1 if crit fail

  // Roll to hit or Saving Throw?
  if (typeof(hitMod)=='number') {
    // To hit
    console.log("To hit");
    let rolls = RollDice({number: 1, size: 20});
    console.log(rolls);
    // Advantage/disadvantage?
    if (advantage != 0) {
      let rolls2 = RollDice({number: 1, size: 20});
      // Check which dice to keep
      if (advantage == 1) {
          // Advantage
          rolls = CompareArrays({arr1: rolls, arr2: rolls2, keep: 'high'});
      } else {
          // Disadvantage
          rolls = CompareArrays({arr1: rolls, arr2: rolls2, keep: 'low'});
      };
    };
    // Push modifier to roll array
    rolls.push(hitMod);
    let hitTotal = 0;
    // Critical hit
    if (rolls[0]==20) {
      crit = 1;
      hitTotal = "CRIT";
    // Critical miss
    } else if (rolls[0]==1) {
      crit = -1;
      hitTotal = "MISS";
    // Non-critical
    } else {
      // Sum everything up
      hitTotal = rolls.reduce( function(cumulative, individual){ return cumulative + individual; }, 0);
    };
    // Report results to parent state
    setHitRoll(rolls);
    setHitSum(hitTotal);
  } else {
    // Saving Throw
    console.log("ST");
    // Parse string of format "WIS 13"
    let ST = hitMod.split(" ");
    setHitRoll(ST[0] + " ST");
    setHitSum(ST[1]);
  };

  // Roll for damage, ONLY if not a Critical Miss
  let rolls = [];
  let dmgTotal = 0;
  console.log("Damage");
  if (crit==-1) {
    // Critical Miss
    rolls = "-";
    dmgTotal = 0;
  } else {
    rolls = RollDice({number: numOfDice, size: sizeOfDice});
    console.log(rolls);
    // If Critical Hit
    if (crit==1) {
      let rolls2 = RollDice({number: numOfDice, size: sizeOfDice});
      dmgTotal += rolls2.reduce( function(cumulative, individual){ return cumulative + individual; }, 0);
      console.log(rolls2);
      rolls = rolls.concat(rolls2);
      console.log(rolls);
    };
    // Add modifier
    rolls.push(dmgMod);
    // Sum everything up
    dmgTotal += rolls.reduce( function(cumulative, individual){ return cumulative + individual; }, 0);
  };
  // Reset advantage
  setAdvantage(0);
  // Report results to parent state
  setDmgRoll(rolls);
  setDmgSum(dmgTotal);
}


class ActionButton extends React.Component {

  render() {
    const advantage = this.props.advantage;
    // Get data for action
    const action = this.props.action;
    const actionName = action.ActionName; // str
    const hitMod = action.HitModifier; // num or str
    const numOfDice = action.NumberOfDice; // array
    const sizeOfDice = action.SizeOfDice; // array
    const dmgMod = action.DamageModifier; // num
    // State setters
    const setAdvantage = this.props.setAdvantage;
    const setActName = this.props.setActName;
    const setHitRoll = this.props.setHitRoll;
    const setHitSum = this.props.setHitSum;
    const setDmgRoll = this.props.setDmgRoll;
    const setDmgSum = this.props.setDmgSum;
  
    return(
      <TouchableOpacity
        onPress={() => handlePress({
                        actionName, setActName,
                        advantage, setAdvantage, hitMod, setHitRoll, setHitSum,
                        numOfDice, sizeOfDice, dmgMod, setDmgRoll, setDmgSum,
                      })}
      >
        <Text>{this.props.action.ActionName}</Text>
      </TouchableOpacity>
    );
  };
}


class ActionList extends React.Component {
  render() {
    const advantage = this.props.advantage;
    const setAdvantage = this.props.setAdvantage;
    const setActName = this.props.setActName;
    const setHitRoll = this.props.setHitRoll;
    const setHitSum = this.props.setHitSum;
    const setDmgRoll = this.props.setDmgRoll;
    const setDmgSum = this.props.setDmgSum;
    return(
      <View style={styles.content}>
        {this.props.actions.map(action => {
          return <ActionButton
                    key={action.key}
                    action={action}
                    advantage={advantage}
                    setAdvantage={setAdvantage}
                    setActName={setActName}
                    setHitRoll={setHitRoll}
                    setHitSum={setHitSum}
                    setDmgRoll={setDmgRoll}
                    setDmgSum={setDmgSum}
                  />
        })}
      </View>
    );
  };
}


class CollectionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true 
    };
  };
  
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const header = this.props.collection.CollectionName;
    const actions = this.props.collection.Actions;
    const advantage = this.props.advantage;
    const setAdvantage = this.props.setAdvantage;
    const setActName = this.props.setActName;
    const setHitRoll = this.props.setHitRoll;
    const setHitSum = this.props.setHitSum;
    const setDmgRoll = this.props.setDmgRoll;
    const setDmgSum = this.props.setDmgSum;
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleCollapsed()}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <ActionList
            actions={actions}
            advantage={advantage}
            setAdvantage={setAdvantage}
            setActName={setActName}
            setHitRoll={setHitRoll}
            setHitSum={setHitSum}
            setDmgRoll={setDmgRoll}
            setDmgSum={setDmgSum}
          />
        </Collapsible>  
      </View>
    );
  };
}


export function CollectionsScreen() {
  const [advantage, setAdvantage] = useState(0);
  const [actName, setActName] = useState("");
  const [hitRoll, setHitRoll] = useState([]);
  const [hitSum, setHitSum] = useState(null);
  const [dmgRoll, setDmgRoll] = useState([]);
  const [dmgSum, setDmgSum] = useState(null);

  return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {data.Collections.map(collection => {
            return <CollectionSection
                      key={collection.key}
                      collection={collection}
                      advantage={advantage}
                      setAdvantage={setAdvantage}
                      setActName={setActName}
                      setHitRoll={setHitRoll}
                      setHitSum={setHitSum}
                      setDmgRoll={setDmgRoll}
                      setDmgSum={setDmgSum}
                    />
          })}
        </ScrollView>
        <View style={[styles.selectorContainer, (advantage!=0) ? styles.containerAdvantage : null]}>
            <AdvantageSelector advState={advantage} advSetter={setAdvantage} />
            <Text>{actName}</Text>
            <Reporter title="To hit" sum={hitSum} roll={hitRoll}/>
            <Reporter title="Damage" sum={dmgSum} roll={dmgRoll}/>
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
    },
    header: {
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 3,
        marginTop: 8,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    content: {
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    contentText: {
        fontSize: 18,
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