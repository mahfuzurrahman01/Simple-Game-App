import { useEffect, useState } from "react";
import { Alert, FlatList, TextInput, View, useWindowDimensions } from "react-native";
import GameFunctionality from "../Components/Game";
import ScoreBoard from "../Components/ScoreBoard";
import Title from "../Components/Title";
import PrimaryButton from "../CustomButton/PrimaryButton";
import SecondaryButton from "../CustomButton/SecondaryButton";
import { styles } from "../useStyle/useStyle";


function GamePageScreen({ userNumber, onGameOverStateChange }) {
    const [inputNumber, setInputNumber] = useState("");
    const [alreadyTriedNum, setAlreadyTriedNum] = useState([])
    const [tryCount, setTryCount] = useState(0)

    const inputChangedHandle = (num) => {
        if (num > 10 || num < 0 || num === undefined) {
            return Alert.alert('Invalid Number', 'Number should not more than 10 and not less then 0', [{ text: 'Bhujsi', style: 'default', onPress: () => console.log('Invalid number') }])
        }
        setInputNumber(num)
    }
    //reset function
    const resetHandle = () => {
        setInputNumber("")
    }
    //confirm clicked function 
    const confirmButtonClicked = () => {
        const chosenNumber = parseInt(inputNumber)
        if (isNaN(chosenNumber)) {
            return Alert.alert('Invalid Number', 'Number should not more than 10 and not less then 0', [{ text: 'Bhujsi', style: 'default', onPress: () => console.log('Invalid number') }])
        }
      
        if (alreadyTriedNum.find(number => inputNumber === number)) {
            Alert.alert('Bhujlam na kiso!', 'Toi na akbar try korli ei number dia', [{ text: 'Okay', style: 'destructive', onPress: () => console.log("Invalid number") }])
            resetHandle()
            return;
        }
        else {
            setAlreadyTriedNum((prevState) => [inputNumber, ...prevState])
            setTryCount(tryCount + 1)
        }

        if (userNumber == inputNumber) {
            onGameOverStateChange("winner")
            return
        }
        if (tryCount === 2) {
            onGameOverStateChange("loser")
        }
        resetHandle()
    }

    const { width, height } = useWindowDimensions()

    const marginDimensions = height < 450 ? 40 : 70
    const flexDirec = height > 500 ? 'column' : 'row'

    const guessLength = alreadyTriedNum.length;
    return (
        <View style={[styles.rootScreen, { marginTop: marginDimensions }]}>
            <Title>Opponent's Guess</Title>
            <View style={[styles.gamePageDivider, { flexDirection: flexDirec }]}>
                <View>
                    <View style={styles.inputContainer3} >
                        <TextInput
                            onChangeText={inputChangedHandle}
                            style={styles.inputBox}
                            maxLength={2}
                            keyboardType="number-pad"
                            value={inputNumber}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetHandle}>
                            Reset
                        </PrimaryButton>
                        <SecondaryButton onPress={confirmButtonClicked}>
                            Confirm
                        </SecondaryButton>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList data={alreadyTriedNum} renderItem={(itemData) => <ScoreBoard guessRound={guessLength - itemData.index} guess={itemData.item} keyExtractor={item => item} />} />
                </View>
            </View>
        </View>
    )
}

export default GamePageScreen;