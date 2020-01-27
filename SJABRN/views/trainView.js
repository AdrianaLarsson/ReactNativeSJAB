import TrainClass from '../classes/trainClass.js';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class trainView extends Component {
  constructor(props) {
    super(props);
    this.train = new TrainClass()
    this.train.arrivalTime =  "11:00"
  }

  render() {
    return (
      <View>
        <Text> Ankomsttid {this.train.arrivalTime} </Text>
      </View>
    );
  }
}
