import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const RegisterForm_v2 = () => {
    const [currentTab, setCurrentTab] = useState("login");

    return (
        <View style={styles.container}>
            {currentTab === "login" && (
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="EMAIL ADDRESS" placeholderTextColor="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("Logging in...");
                        }}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styles.forget}>
                        <TouchableOpacity onPress={() => setCurrentTab("forget")}>
                            <Text style={styles.linkText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {currentTab === "signup" && (
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="NAME" placeholderTextColor="black" />
                    <TextInput style={styles.input} placeholder="EMAIL ADDRESS" placeholderTextColor="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("Signing up...");
                        }}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            )}

            {currentTab === "forget" && (
                <View style={styles.form}>
                    <Text style={styles.normalText}>
                        To reset your password enter your email we'll send you a link to reset your password.
                    </Text>
                    <TextInput style={styles.input} placeholder="EMAIL ADDRESS" placeholderTextColor="#708B75" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>RESET PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.tabs}>
                <TouchableOpacity style={styles.tab} onPress={() => setCurrentTab("login")}>
                    <Text style={styles.tabText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setCurrentTab("signup")}>
                    <Text style={styles.tabText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6E8E6",
        padding: 5,
    },
    tabs: {
        marginTop: 20,
        flexDirection: "row",
        backgroundColor: "#0A2463",
        borderRadius: 5,
        opacity: 0.8,
        width: "100%",
    },
    tab: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: "#FFF",
    },
    tabText: {
        color: "#F4FFFD",
        fontSize: 18,
    },
    form: {
        width: "100%",
        marginTop: 20,
        padding: 20,
        backgroundColor: "#708B75",
        borderRadius: 5,
        opacity: 0.8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#a0b3b0",
        backgroundColor: "#E6E8E6",
        color: "black",
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#0A2463",
        alignItems: "center",
        padding: 10,
    },
    buttonText: {
        color: "#E6E8E6",
        fontSize: 16,
    },
    forget: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    linkText: {
        color: "#FFF",
    },
    normalText: {
        color: "#FFF",
        marginBottom: 20,
    },
});

export default RegisterForm_v2;
