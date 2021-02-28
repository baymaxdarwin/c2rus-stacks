import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Button from '../Components/Button';

const RollDice = () => {
  const [statearr, setStatearr] = React.useState([2]);
  const [resultedNum, setResultNum] = React.useState('');

  const onRoleClick = () => {
    const resultNum = randomNumGenerator();
    console.log(resultNum);
    setStatearr([resultNum]);
    setResultNum(resultNum + 1);
    setTimeout(() => {
      setResultNum('');
    }, 1800);
  };

  return (
    <View>
      <View style={styles.diceContainer}>
        <Image
          source={dicearr[statearr[0]]}
          style={{width: 80, height: 80, marginHorizontal: 15}}
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={{color: 'black', fontSize: 20}}>Your lucky number is</Text>
        <Text style={styles.resultText}>{resultedNum}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="" onPress={() => onRoleClick()} />
      </View>
    </View>
  );
};

export default RollDice;

const styles = StyleSheet.create({
  diceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingRight: 20,
    justifyContent: 'center',
    paddingTop: 80,
  },
  resultContainer: {
    justifyContent: 'center',
    paddingTop: 80,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 100,
    color: '#e32434',
    fontWeight: 'bold',
  },
});

const dicearr = [
  require('../assets/images/dice/dice-1.png'),
  require('../assets/images/dice/dice-2.png'),
  require('../assets/images/dice/dice-3.png'),
  require('../assets/images/dice/dice-4.png'),
  require('../assets/images/dice/dice-5.png'),
  require('../assets/images/dice/dice-6.png'),
];

function randomNumGenerator() {
  let index = Math.floor(Math.random() * 10 - 4);
  if (index < 0) {
    return index * -1;
  }
  return index;
}
