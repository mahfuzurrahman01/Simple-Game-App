import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "../useStyle/useStyle";

function GameOver({ userNumber, result, onNewMatchStart, }) {
  
    const newMatchHandle = () => {
        onNewMatchStart()
    }
    return (
        <SafeAreaView style={styles.gameOverDiv}>
            <View>
                {
                    result === true ? <Image style={styles.gameOverImage} source={require('../assets/winner.jpg')} /> : <Image style={styles.gameOverImage} source={require('../assets/loser.jpg')} />
                }
            </View>
            <View style={styles.announceDiv}>

                {
                    result === true ? <Text style={styles.announce}>Winner</Text> : <View><Text style={styles.announce}>Loser</Text><Text>The number was {userNumber}</Text></View>
                }

            </View>

            <View style={styles.primaryButtonOuter}>
                <View style={styles.primaryButtonOuter2}>
                    <Pressable onPress={newMatchHandle} style={({ pressed }) => pressed ? [styles.pressed, styles.newMatch] : styles.newMatch} android_ripple={{ color: "#ccc", borderRadius: 30 }}>
                        <Text style={styles.buttonText}>Start a new match</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GameOver;