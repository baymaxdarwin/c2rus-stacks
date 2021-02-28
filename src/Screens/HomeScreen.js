import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import HomeScreenGrid from './HomeScreenGrid';

let ScreenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Welcome!</Text>
        </View>
        <View style={styles.headerMainContainer}>
          <HomeScreenGrid />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    width: ScreenWidth,
    flex: 1,
  },
  headerTextContainer: {
    flex: 0.5,
  },
  headerMainContainer: {
    flex: 10,
  },
  headerText: {
    fontSize: 30,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
  },
  mainRow: {
    backgroundColor: 'white',
  },
});
