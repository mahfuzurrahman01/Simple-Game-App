import { StyleSheet, Platform } from "react-native";


export const styles = StyleSheet.create({
    rootScreen: {
        height: "90%",
    },
    container: {
        flex: 1,
    },
    inputContainer: {
        marginHorizontal: 26,
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        elevation: 50,
        alignItems: 'center',
        opacity: 0.7,
        overflow: 'hidden'
    },
    inputContainer2: {
        marginTop: 20,
        marginHorizontal: 16,
        backgroundColor: "white",
        padding: 26,
        borderRadius: 10,
        elevation: 50,
        opacity: 0.7,
    },
    inputContainer3: {
        marginTop: 20,
        marginHorizontal: 16,
        backgroundColor: "white",
        padding: 26,
        borderRadius: 10,
        elevation: 50,
        opacity: 0.7,
        alignItems: 'center',
    },
    noticeTextHead: {
        fontFamily: "Open-sans-bold",
        fontSize: 25,
        textAlign: "center",
        width: "100%",
        color: "#3C4CAD",
        marginBottom: 15,
    },
    noticeText: {
        fontSize: 16,
        marginTop: 5,
    },
    inputBox: {
        width: "100%",
        borderRadius: 10,
        padding: 10,
        paddingBottom: 5,
        height: 100,
        borderWidth: 5,
        borderBottomColor: "#3C4CAD",
        fontSize: 50,
        color: "#787ff6",
        fontWeight: "bold",
        width: 100,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
    },
    primaryButtonOuter: {
        marginRight: 5,
        borderRadius: 6,
        overflow: "hidden"
    },
    primaryButtonOuter2: {
        overflow: "hidden",
        borderRadius: 20
    },
    primaryButtonInner: {
        backgroundColor: '#787ff6',
        padding: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: "center",
    },
    secondaryButtonOuter: {
        marginLeft: 5,
        borderRadius: 6,
        overflow: "hidden"
    },
    secondaryButtonInner: {
        backgroundColor: '#F04393',
        padding: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: "center",
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        color: "#fff"
    },
    imageStyles: {
        opacity: 0.5,
    },
    title: {
        fontFamily: "Lobster",
        fontSize: 30,
        textAlign: "center",
        color: "#fafad2",
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: "#787ff6",
        padding: 5,
        marginHorizontal: 16,
    },
    gameContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    gameText: {
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        color: "#F04393",
        padding: 5,
        marginHorizontal: 30,
        width: "60%",
        backgroundColor: "white",
        marginTop: 20,
        borderRadius: 10,
        opacity: 0.75,
        elevation: 50,
    },
    scoreBoardDiv: {
        marginHorizontal: 30,
        backgroundColor: '#7b68ee',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        elevation: 20,
        opacity: 0.8,
        borderColor: "#dcdcdc",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    gameOverImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        opacity: 0.8,
        elevation: 20,
        shadowColor: "white",
    },
    gameOverDiv: {
        width: "100%",
        height: "95%",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
    },
    announceDiv: {
        marginTop: 40,
    },
    announce: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    },
    newMatch: {
        // color: 'white',
        // backgroundColor: "#7b68ee",
        // padding: 10,
        // borderRadius: 20,
        // elevation: 10,
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 5,
        // shadowColor: 'white',
        // shadowRadius: 0.4,
        // overflow:'hidden'
        backgroundColor: '#787ff6',
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
    },
    listContainer: {
        height: "70%",
        minHeight: 300,
        padding: 20,
        minWidth: "60%"
    },
    gamePageDivider: {
        justifyContent: "center",
    },
    homePage: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    homePage2: {
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        width: "100%"
    },


});