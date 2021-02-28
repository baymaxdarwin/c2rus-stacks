import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

('hand-stop-o');
export default function Comp({title, onPress}) {
  const [handIcon, setHandIcon] = React.useState('hand-rock');

  const onHandPress = () => {
    setHandIcon('hand-paper');
    onPress();
    setTimeout(() => {
      setHandIcon('hand-rock');
    }, 800);
  };

  return (
    <>
      <View style={{width: 100}}>
        <TouchableOpacity
          onPress={() => {
            onHandPress();
          }}>
          <View style={styles.circle}>
            <Icon name={handIcon} color="white" size={50} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    backgroundColor: '#e32434',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
