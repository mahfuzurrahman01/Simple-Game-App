import { Text, View } from "react-native";
import { styles } from "../useStyle/useStyle";

function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}
export default Title;