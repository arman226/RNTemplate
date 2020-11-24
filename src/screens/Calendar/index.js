import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default Calendar;
