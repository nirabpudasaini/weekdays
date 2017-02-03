import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Moment from 'moment';

import DayItem from './src/day-item';

// Create a React Component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
    {this.days()}
    </View>
  },
  days: function(){
    var daysItems = [];
    for(var i= 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} key={i} daysUntil={i}/>
      );
    }
    return daysItems;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//Show the React Componennt in screen
AppRegistry.registerComponent('weekdays',function(){
  return Weekdays
});
