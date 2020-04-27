import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';


class CollapsibleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  };
  
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleCollapsed()}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.header}</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>
              {this.props.content}
            </Text>
          </View>
        </Collapsible>  
      </View>
    );
  };
}


export function CollectionsScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <CollapsibleSection header="ASPA" content="Here are Aspa's actions!"/>
              <CollapsibleSection header="THOSMOR" content="Thosmor does sneak attack!"/>
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