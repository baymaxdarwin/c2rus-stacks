import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const WebScreen = () => {
  return (
    <View style={{height: ScreenHeight, width: ScreenWidth}}>
      <WebView
        style={{flex: 1}}
        allowsFullscreenVideo={true}
        source={{uri: 'https://animepahe.com'}}
        onNavigationStateChange={(request) => {
          // Only allow navigating within this website
          return request.url.startsWith('https://animepahe.com');
        }}
        onShouldStartLoadWithRequest={(request) => {
          // Only allow navigating within this website
          return request.url.startsWith('https://animepahe.com');
        }}
      />
    </View>
  );
};

export default WebScreen;

const styles = StyleSheet.create({});
