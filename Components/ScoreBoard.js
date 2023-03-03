import { Text, View } from "react-native"
import { styles } from "../useStyle/useStyle"

const ScoreBoard = ({ guessRound, guess }) => {

    return (
        <View>
            <View style={styles.scoreBoardDiv}>
                <Text style={{color: "white",fontSize:16}}># {guessRound}</Text>
                <Text style={{color: "white",fontSize:16}}>Opponents guess: {guess}</Text>
            </View>
        </View>
    )
}

export default ScoreBoard;