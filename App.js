import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, ToastAndroid, TextInput, View } from 'react-native';
import Card from './components/Card';
import DatePicker from '@dietime/react-native-date-picker';
import CardBack from './components/CardBack';

export default function App() {

  const handleSubmit = () => {
    if (!name || !number || !date || !cvv) {
      ToastAndroid.show('Field cannot be empty !', ToastAndroid.TOP);
      // alert('Field cannot be empty !');
    }
    else {
      alert(`${name}
${number}
${date.toLocaleDateString()}
${cvv}`);

      setName("")
      setNumber("")
      setDate()
      setCVV("")
      setFlip(true)

      // ToastAndroid.show('Success', ToastAndroid.TOP);
    }
  }


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState();
  const [cvv, setCVV] = useState('');

  const [flip, setFlip] = useState(true)

  return (
    <View style={styles.container}>

      {
        flip
          ? <Card name={name} number={number} date={date} ></Card>
          : <CardBack number={number} cvv={cvv}></CardBack>
      }

      <TextInput
        placeholder="Cart Number"
        keyboardType='number-pad'
        maxLength={number.includes(' ') ? 19 : 16}
        style={{
          width: 250,
          marginTop: 16,
          borderColor: '#c1c2c3',
          padding: 8,
          borderRadius: 8,
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={number}
        onChangeText={value => setNumber(value)}
      />
      <TextInput
        placeholder="Name Surname"
        maxLength={19}
        style={{
          width: 250,
          textTransform: 'capitalize',
          borderColor: '#c1c2c3',
          padding: 8,
          borderRadius: 8,
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={value => {
          setName(value);
        }}
      />
      <View style={{
        width: 250,
        marginBottom: 10
      }}>
        <DatePicker
          value={date}
          onChange={(value) => setDate(value)}
          format="mm-dd-yyyy"
        />
      </View>
      <TextInput
        onFocus={() => {
          setFlip(false)
        }}
        onBlur={() => {
          setFlip(true)
        }}
        maxLength={3}
        keyboardType='number-pad'
        placeholder="CVV"
        style={{
          width: 250,
          borderColor: '#c1c2c3',
          padding: 8,
          borderRadius: 8,
          borderWidth: 1,
          marginBottom: 20,
        }}
        value={cvv}
        onChangeText={value => setCVV(value)}
      />

      <Button
        onPress={() => { handleSubmit() }}
        title="Submit"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
