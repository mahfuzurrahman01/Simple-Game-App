import { Pressable, Text, View } from "react-native";
import { styles } from "../useStyle/useStyle";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.primaryButtonOuter}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed ? [styles.pressed, styles.primaryButtonInner] : styles.primaryButtonInner} android_ripple={{ color: "#ccc", borderRadius: "10" }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;