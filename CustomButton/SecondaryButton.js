import { Pressable, Text, View } from "react-native";
import { styles } from "../useStyle/useStyle";

function secondaryButton({ children, onPress }) {
    return (
        <View style={styles.secondaryButtonOuter}>
            <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.secondaryButtonInner] : styles.secondaryButtonInner} onPress={onPress} android_ripple={{ color: "#ccc", borderRadius: "10" }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default secondaryButton;