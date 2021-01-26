import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from '../Text/AppText';


const StopWatch = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(!isActive)
    {
      !isActive ?
      (increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 10))
      :
      (clearInterval(increment.current))
    }
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}.${getSeconds}`
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        {formatTime()}
      </AppText>
      <TouchableOpacity onPress={handleStart}>
        <Text style={{ fontSize: 30 }}>{!isActive ? "Start" : "Stop"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 44,
  }
})

export default StopWatch;