import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View, useWindowDimensions } from "react-native";
import PrimaryButton from "../CustomButton/PrimaryButton";
import SecondaryButton from "../CustomButton/SecondaryButton";
import { styles } from "../useStyle/useStyle";


function HomePageScreen({ pickedNumberHandler }) {
    //this state will get the input number
    const [inputNumber, setInputNumber] = useState("");
    //this function will work when user  set the number or change the number 
    const inputChangedHandle = (enteredNumber) => {
        setInputNumber(enteredNumber)
    }
    //this is the reset function
    const resetHandler = () => {
        setInputNumber("")
    }
    //after clicking confirm button this function will work
    const confirmNumberHandle = () => {
        const chosenNumber = parseInt(inputNumber);
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 10) {
            Alert.alert('Invalid Number!', 'The number should not less then 0 or not bigger than 10', [{ text: 'Okay', style: 'destructive', onPress: () => console.log("Invalid number") }])
            resetHandler()
            return
        }
        pickedNumberHandler(chosenNumber)
        resetHandler()
    }

    //change the styles using the dimensions of screen size
    const { width, height } = useWindowDimensions();

    const marginTopDistance = height < 450 ? 40 : 40;
    const styling = height < 450 ? styles.homePage : styles.homePage2;
    return (
        <View style={styles.homePage}>
            <ScrollView>
                <View style={styling}>
                    <View style={[styles.inputContainer, { marginTop: marginTopDistance }]}>

                        <TextInput
                            onChangeText={inputChangedHandle}
                            style={styles.inputBox}
                            maxLength={2}
                            keyboardType="number-pad"
                            value={inputNumber}
                        />
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                            <SecondaryButton onPress={confirmNumberHandle}>Confirm</SecondaryButton>
                        </View>
                    </View>
                    <View style={styles.inputContainer2}>
                        <Text style={styles.noticeTextHead}>Before start!!</Text>
                        <Text style={styles.noticeText}>
                            1. Pick a number between 1 to 10 and lock it in!
                        </Text>
                        <Text style={styles.noticeText}>
                            2. Told your buddy to guess the number.
                        </Text>
                        <Text style={styles.noticeText}>
                            3. Your friend has 3 tries to get it right.
                        </Text>
                        <Text style={styles.noticeText}>
                            4. Your friend deserves a treat if they guess correctly!
                        </Text>
                        <Text style={styles.noticeText}>
                            5. But if not, it's treat time for you!.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default HomePageScreen;