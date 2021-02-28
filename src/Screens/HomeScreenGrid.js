/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

import AgeCalculator from './AgeCalculator';
import RollDice from './RollDice';

const ModelSelector = (item) => {
  if (item && item.name === 'AgeCalculator') {
    return <AgeCalculator />;
  } else if (item && item.name === 'RollDice') {
    return <RollDice />;
  } else {
    return (
      <View>
        <Text>Default</Text>
      </View>
    );
  }
};

export default function HomeScreenGrid() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentModel, setCurrentModel] = React.useState(null);

  const [items, setItems] = React.useState([
    {
      code: '#1abc9c',
      displayName: 'Age Calculator',
      icon: 'calculator',
      iconSize: 30,
      id: 1,
      name: 'AgeCalculator',
    },
    {
      code: '#2ecc71',
      displayName: 'Roll Dice',
      icon: 'dice',
      iconSize: 30,
      id: 2,
      name: 'RollDice',
    },
    {displayName: '3D Figure', code: '#3498db', id: 3},
    {displayName: 'TBD', code: '#9b59b6', id: 4},
    {displayName: 'TBD', code: '#34495e', id: 5},
    {displayName: 'TBD', code: '#16a085', id: 6},
  ]);

  const onPress = (item) => {
    console.log(item);
    setModalVisible(true);
    setCurrentModel(item);
  };

  return (
    <View style={styles.container}>
      <SectionGrid
        itemDimension={90}
        sections={[
          {
            title: 'Igniting',
            data: items.slice(0, 6),
          },
        ]}
        style={styles.gridView}
        renderItem={({item, section, index}) => (
          <TouchableOpacity
            styles={styles.submit}
            onPress={() => onPress(item)}>
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Icon name={item.icon} size={item.iconSize} />
              <Text style={styles.itemName}>{item.displayName}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{}</Text>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="window-close" size={40} />
              </TouchableOpacity>
            </View>
            {ModelSelector(currentModel)}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    // backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: ScreenWidth / 1,
    height: ScreenHeight / 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
