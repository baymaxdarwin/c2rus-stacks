import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {findWinner, areAllBoxesClicked} from '../utils';

const DeviceWidth = Dimensions.get('window').width;
const xIcon = 'hashtag';
const oIcon = 'fire-alt';
const xColor = '#0a62fa';
const oColor = '#ed5e3e';

const customIcon = (boxType) => {
  console.log(boxType);
  if (boxType) {
    return (
      <Icon
        name={boxType === 'x' ? xIcon : oIcon}
        size={DeviceWidth / 10}
        color={boxType === 'x' ? xColor : oColor}
      />
    );
  } else {
    return <Text>{boxType}</Text>;
  }
};

const gameStatus = (status) => {
  let user = status.charAt(0);
  if (status.includes('turn')) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontStyle: 'italic'}}>
          next player : {'   '}
        </Text>
        <Icon
          name={user === 'x' ? xIcon : oIcon}
          size={DeviceWidth / 15}
          color={user === 'x' ? xColor : oColor}
        />
      </View>
    );
  } else if (status.includes('won')) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontStyle: 'italic'}}>Hurray!....</Text>
        <Icon
          name={user === 'x' ? xIcon : oIcon}
          size={DeviceWidth / 10}
          color={user === 'x' ? xColor : oColor}
        />
        <Text style={{fontSize: 20, color: 'green', fontStyle: 'italic'}}>
          {' '}
          Won
        </Text>
      </View>
    );
  } else if (status.includes('draw')) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontStyle: 'italic'}}>
          up next {'     '}
        </Text>
        <Icon
          name={user === 'x' ? xIcon : oIcon}
          size={DeviceWidth / 10}
          color={user === 'x' ? xColor : oColor}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>{''}</Text>
      </View>
    );
  }
};

const TikTocToe = () => {
  const [state, setState] = useState({
    boxes: Array(9).fill(null),
    xIsNext: true,
  });

  const isFilled = areAllBoxesClicked(state.boxes);
  const winner = findWinner(state.boxes);
  let status;

  const clearGame = () => {
    setState({
      boxes: Array(9).fill(null),
      xIsNext: true,
    });
  };

  if (winner) {
    status = `${winner}_won`;
    setTimeout(() => {
      clearGame();
    }, 2000);
  } else if (!winner && isFilled) {
    status = 'draw';
    setTimeout(() => {
      clearGame();
    }, 2000);
  } else {
    status = `${state.xIsNext ? 'x' : 'o'}_turn`;
  }

  const onSelect = (index) => {
    let boxes = state.boxes.slice();
    if (findWinner(boxes) || boxes[index]) {
      return;
    }
    boxes[index] = state.xIsNext ? 'x' : 'o';
    console.log(boxes);
    setState({
      boxes: boxes,
      xIsNext: !state.xIsNext,
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={{flex: 1}}>{gameStatus(status)}</View>
      <View
        style={{
          flex: 4,
          paddingTop: 50,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(0)}>
              {state.boxes[0] ? (
                <Icon
                  name={state.boxes[0] === 'x' ? xIcon : oIcon}
                  size={DeviceWidth / 10}
                  color={state.boxes[0] === 'x' ? xColor : oColor}
                />
              ) : (
                <Text>{state.boxes[0]}</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(1)}>
              {customIcon(state.boxes[1])}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(2)}>
              {customIcon(state.boxes[2])}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(3)}>
              {customIcon(state.boxes[3])}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(4)}>
              {customIcon(state.boxes[4])}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(5)}>
              {customIcon(state.boxes[5])}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(6)}>
              {customIcon(state.boxes[6])}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(7)}>
              {customIcon(state.boxes[7])}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSelect(8)}>
              {customIcon(state.boxes[8])}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingTop: 100, flex: 1}}>
        <Button title="clear game" color="red" onPress={() => clearGame()} />
      </View>
    </View>
  );
};

export default TikTocToe;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 6,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: DeviceWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: DeviceWidth * 0.2,
  },
  rowContainer: {
    width: DeviceWidth * 0.2,
    height: DeviceWidth * 0.2,
    margin: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
});
