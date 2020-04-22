import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

// SUPER slow on phone?!!
import Accordion from 'react-native-collapsible/Accordion';


const SECTIONS = [
    {
      title: 'Example Character 1',
      content: 'Attack 1\nAttack 2',
    },
    {
      title: 'Example Chracter 2',
      content: 'Attack 1\nAttack 2',
    }
];

class AccordionView extends React.Component {
    state = {
        activeSections: [],
    };
    
    _renderHeader = section => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
    };
    
    _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text style={styles.contentText}>{section.content}</Text>
          </View>
        );
    };
    
    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    
    render() {
        return (
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
        );
    }
}


// Currently uses Accordion, which only keeps one section open
// Switch to Collapsible to be able to keep several open simultaneously
// see: https://github.com/oblador/react-native-collapsible
// and  https://aboutreact.com/collapsible-accordion-expandable-view/
export function CollectionsScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <AccordionView />
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