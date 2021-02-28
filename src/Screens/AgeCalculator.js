import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const AgeCalculator = () => {
  const [date, setDate] = useState(new Date());
  const [currentAge, setCurrentAge] = useState('');
  const [calculateAge, setCalculateAge] = useState(false);

  const onDateChange = (date) => {
    console.log(date);
    setDate(date);
    let currentAge1 = calculateCurrentAge(date);
    setCurrentAge(currentAge1);
  };

  return (
    <View style={style.root}>
      <View style={{flexDirection: 'row'}}>
        <Icon name="date" size={25} style={{paddingRight: 5}} />
        <Text style={{fontSize: 18}}> Select your Date of Birth</Text>
      </View>
      <View style={{padding: 30}}>
        <DatePicker
          date={date}
          onDateChange={(date) => onDateChange(date)}
          maximumDate={new Date()}
          mode={'date'}
        />
      </View>
      <View>
        <Image source={require('../assets/images/saitama_ok.png')}></Image>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green'}}>
          {currentAge}
        </Text>
      </View>
    </View>
  );
};

export default AgeCalculator;

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
  },
});

const calculateCurrentAge = (date) => {
  const dateString = date;
  const now = new Date();

  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const dateNow = now.getDate();

  const dob = new Date(dateString);

  const yearDob = dob.getFullYear();
  const monthDob = dob.getMonth();
  const dateDob = dob.getDate();

  let yearAge = yearNow - yearDob;
  let monthAge;

  if (monthNow >= monthDob) {
    monthAge = monthNow - monthDob;
  } else {
    yearAge--;
    monthAge = 12 + monthNow - monthDob;
  }

  let dateAge;
  if (dateNow >= dateDob) {
    dateAge = dateNow - dateDob;
  } else {
    monthAge--;
    dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  const age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  const yearString = age.years > 1 ? 'years' : 'year';
  const monthString = age.months > 1 ? ' months' : ' month';
  const dayString = age.days > 1 ? ' days' : ' day';

  let ageString = '';

  if (age.years > 0 && age.months > 0 && age.days > 0) {
    ageString =
      age.years +
      yearString +
      ', ' +
      age.months +
      monthString +
      ', and ' +
      age.days +
      dayString +
      ' old.';
  } else if (age.years === 0 && age.months === 0 && age.days > 0) {
    ageString = 'Only ' + age.days + dayString + ' old!';
  } else if (age.years === 0 && age.months === 0 && age.days === 0) {
    ageString = 'Many more Happy returns of the Day';
  } else if (age.years > 0 && age.months === 0 && age.days === 0) {
    ageString = age.years + yearString + ' old. Happy Birthday!!';
  } else if (age.years > 0 && age.months > 0 && age.days === 0) {
    ageString =
      age.years + yearString + ' and ' + age.months + monthString + ' old.';
  } else if (age.years === 0 && age.months > 0 && age.days > 0) {
    ageString =
      age.months + monthString + ' and ' + age.days + dayString + ' old.';
  } else if (age.years > 0 && age.months === 0 && age.days > 0) {
    ageString =
      age.years + yearString + ' and ' + age.days + dayString + ' old.';
  } else if (age.years === 0 && age.months > 0 && age.days === 0) {
    ageString = age.months + monthString + ' old.';
  } else {
    ageString = 'Oops! Could not calculate age!';
  }
  return ageString;
};
