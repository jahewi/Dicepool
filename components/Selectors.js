import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


function FaceIcon(props) {
    let iconname;
    if (props.advState == 1) {
        iconname = 'smile';
    } else if (props.advState == -1) {
        iconname = 'frown'
    } else {
        iconname = 'meh'
    };
    return(
        <FontAwesome5 name={iconname} size={22} />
    );
}


export function AdvantageSelector(props) {
    return(
        <View>
            <TouchableOpacity
                onPress={() => {
                        if (props.advState == 1) {
                            props.advSetter(0)
                        } else {
                            props.advSetter(1)                        
                        }
                }}
            >
                <Text style={props.advState==1 ? styles.textSelected : ''}>Adv.</Text>
            </TouchableOpacity>
            <FaceIcon advState={props.advState} />
            <TouchableOpacity
                onPress={() => {
                        if (props.advState == -1) {
                            props.advSetter(0)
                        } else {
                            props.advSetter(-1)                        
                        }
                }}
            >
                <Text style={props.advState==-1 ? styles.textSelected : ''}>Dis.</Text>
            </TouchableOpacity>
        </View>
    );
}


export function NumberSelector(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.selectorText}>{props.txt}</Text>
            <View style={styles.selector}>
                <TouchableOpacity
                    onPress={() => props.selectSetter(props.selectValue-1)}
                >
                    <MaterialCommunityIcons name='minus' size={23} />
                </TouchableOpacity>
                <Text style={styles.selectorValueText}>{props.selectValue}</Text>
                <TouchableOpacity
                    onPress={() => props.selectSetter(props.selectValue+1)}
                >
                    <MaterialCommunityIcons name='plus' size={23} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    selectorText: {
        textAlign: 'center',
    },
    selectorValueText: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 3,
    },
    textSelected: {
        fontWeight: 'bold',
        color: 'tomato',
    }
})