import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import AsyncStorage from '@react-native-community/async-storage';
import * as data from '../components/Collections.json';


class ActionButton extends React.Component {
  render() {
    return(
      <Text>
        {this.props.action.ActionName}
      </Text>
    );
  };
}


class ActionList extends React.Component {
  render() {
    return(
      <View style={styles.content}>
        {this.props.actions.map(action => {
          return <ActionButton key={action.key} action={action}/>
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
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleCollapsed()}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <ActionList actions={actions} />
        </Collapsible>  
      </View>
    );
  };
}


export function CollectionsScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {data.Collections.map(collection => {
                return <CollectionSection key={collection.key} collection={collection}/>
              })}
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
    }
});