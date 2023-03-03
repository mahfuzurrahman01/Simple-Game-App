import { Text, View } from "react-native";
import { styles } from "../useStyle/useStyle";

function GameFunctionality({ children }) {
    return (
        <View style={styles.gameContainer}>
            <Text style={styles.gameText}>{children}</Text>
        </View>
    )
}

export default GameFunctionality;