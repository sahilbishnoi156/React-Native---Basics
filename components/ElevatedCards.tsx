/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    marginVertical: 15,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 10,
  },
  card: {
    flexShrink:0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 110,
    margin: 8,
    borderRadius: 4,
  },
  cardOne: {backgroundColor: '#eab676'},
  cardTwo: {backgroundColor: '#76eab6'},
  cardThree: {backgroundColor: '#76aaea'},
});
