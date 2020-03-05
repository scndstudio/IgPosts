import React, {useState} from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CircularSlider from '../components/CircularSlider';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


function calculateMinutesFromAngle(angle) {
  return Math.round(angle / (2 * Math.PI / (12 * 12))) * 5;
}

function calculateRatingFromMinutes(angle) {
  const minutes = calculateMinutesFromAngle(angle);
  const rating = Math.floor(minutes / 70);

  return rating
}

function roundAngleToFives(angle) {
  const fiveMinuteAngle = 3 * Math.PI / 144;

  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

export default function() {
    const [startAngle, setStartAngle] = useState(0);
    const [angleLength, setAngleLength] = useState(Math.PI * 1/8);
    const [value, setValue] = useState(Math.floor(startAngle));


  onUpdate = ({ startAngle, angleLength }) => {
      setStartAngle(roundAngleToFives(startAngle));
      setAngleLength(roundAngleToFives(angleLength));
      setValue(calculateRatingFromMinutes((angleLength)));
  }

    return (
        <View style={container}>
            <View style={headerTextContainer}>
                <Text style={headerText}>{`Good evening ☾`}</Text>
                <Text style={headerText}>{`How are you feeling?`}</Text>
            </View>

            <View style={elementContainer}>
                <Text style={moonText}>{`🌚`}</Text>
            </View>

            <View style={elementContainer}>
                <Text style={ratingText}>{value}</Text>
                <CircularSlider
                    startAngle={startAngle}
                    angleLength={angleLength}
                    onUpdate={onUpdate}
                    segments={5}
                    strokeWidth={40}
                    radius={110}
                    gradientColorFrom="#FCFBF8"
                    gradientColorTo="#FCFBF8"
                    clockFaceColor="#9d9d9d"
                    bgCircleColor="#383C40"
                />
            </View>

            <View style={elementContainer}>
                <TouchableOpacity style={doneButton}>
                    <Feather name="check" size={16} color="white" />
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 16}}>Done</Text>
            </View>
        </View>
    );
}

const { 
    container, 
    headerTextContainer, 
    headerText,
    elementContainer,
    moonText, 
    ratingText,
    doneButton
} = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22272C'
    },
    headerTextContainer: {
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT * .13,
    },
    headerText: {
        fontSize: 22,
        color: '#FCFBF8'
    },
    elementContainer: {
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT * .065,
    },
    moonText: {
        fontSize: 72
    },
    ratingText: { fontSize: 80, color: 'white', position: 'absolute'},
    doneButton: { height: 56, width: 56, borderWidth: 2, borderColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 56 / 2, marginBottom: 10}
});