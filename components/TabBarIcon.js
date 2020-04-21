import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../themes/default/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.activeTint : Colors.inactiveTint}
    />
  );
}
