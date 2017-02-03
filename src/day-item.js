import React from 'react';
import {Text} from 'react-native';

//Make the component
var DayItem = React.createClass({
  render: function(){
    return <Text style={this.style()}>
    {this.props.day}
    </Text>
  },
  style: function(){
    return {
      color: this.color(),
      fontSize: this.fontSize(),
      fontWeight: this.fontWeight(),
      lineHeight: this.lineHeight()
    }
  },
  color: function(){
    var opacity = 9 - this.props.daysUntil;
      return '#fb5906'+ opacity + opacity ;
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  },
  fontWeight: function(){
    var weight = 8 - this.props.daysUntil;
    if (weight > 4){
      return 'bold';
    } else {
      return 'normal';
    }
  },
  lineHeight: function(){
    return 70 - 4 * this.props.daysUntil;
  }
});




//Make the code available to others
export default DayItem;
