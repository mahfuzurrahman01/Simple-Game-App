import { Dimensions, SafeAreaView, Text } from 'react-native';
import HomePageScreen from './Screens/HomePageScreen';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from './useStyle/useStyle';
import { useEffect, useState, } from 'react';
import GamePageScreen from './Screens/GamePageScreen';
import GameOver from './Screens/GameOverScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';



export default function App() {
  
  const [pickedNumber, setPickedNumber] = useState()
  const [gameOverScreen, setGameOverScreen] = useState(false)
  const [gameFinalResult, setGameFinalResult] = useState(false)
  const [newMatch, setNewMatch] = useState(false)

  const pickedNumberHandler = (number) => {
    setPickedNumber(number)
  }
  const [fontsLoaded] = useFonts({
    'Open-sans': require('./assets/font/OpenSans-Regular.ttf'),
    'Open-sans-bold': require('./assets/font/OpenSans-Bold.ttf'),
    'Lobster': require('./assets/font/Lobster_1.3.otf')
  })


  if (!fontsLoaded) {
    return (
      <Text>Loading</Text>
    )
  }

  //this function will change the condition for game over screen
  function gameOverScreenState(result) {
    if (result === "winner") {
      setGameFinalResult(true)
    } else {
      setGameFinalResult(false)
    }
    setGameOverScreen(true)
  }

  function startNewMatch() {
    setPickedNumber(null)
    setGameFinalResult(false)
    setGameOverScreen(false)
    setNewMatch(true)
  }


  let screen = <HomePageScreen pickedNumberHandler={pickedNumberHandler}></HomePageScreen>

  if (newMatch) {
    screen = <HomePageScreen pickedNumberHandler={pickedNumberHandler}></HomePageScreen>
  }


  if (pickedNumber) {
    screen = <GamePageScreen userNumber={pickedNumber} onGameOverStateChange={gameOverScreenState} />
  }

  // game over screen
  if (gameOverScreen === true) {
    screen = <GameOver onNewMatchStart={() => startNewMatch()} userNumber={pickedNumber} result={gameFinalResult}></GameOver>
  }

  return (
    <LinearGradient colors={['#3C4CAD', '#F04393']} style={styles.container}>
      <SafeAreaView>
        {screen}
      </SafeAreaView>
    </LinearGradient>
  );
}

