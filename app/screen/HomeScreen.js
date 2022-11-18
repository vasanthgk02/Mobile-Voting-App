import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import Header from "../component/Header";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import alertComponent from "../component/Alert";
import TwoButtonAlert from "../component/TwoButtonAlert";
import ActivityIndicator from "../component/ActivityIndicator";

const fallBackToDefaultAuth = (msg) => {
  return console.log(msg);
};

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  let ok = true;

  useEffect(() => {
    setLoading(true);
    wait(3000).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const handledBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable)
      return alertComponent(
        "Voting System says",
        "Biometric Auth not supported",
        "Ok",
        () => fallBackToDefaultAuth("Phone not supported")
      );

    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return alertComponent(
        "Biometric record not found",
        "Please add biometric to phone",
        "Ok",
        () => fallBackToDefaultAuth("Biometric record not found")
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Scan your finger print to vote",
      cancelLabel: "cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success && text == "3579246835792468") {
      if (ok) {
        navigation.navigate("VoterDetailsScreen");
        ok = false;
      } else {
        alertComponent("Voting App", "You have already voted!", "Ok", () =>
          fallBackToDefaultAuth("Biometric record not found")
        );
      }
    } else {
      return alertComponent(
        "Voting System says",
        "No user found in database",
        "Ok",
        () => {}
      );
    }
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator
          visible={loading}
          source={require("../assets/vote.json")}
        />
      ) : (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your aadhaar number"
              style={styles.input}
              onChangeText={setText}
              value={text}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handledBiometricAuth}
          >
            <MaterialIcons
              name="navigate-next"
              size={60}
              color={Colors.secondary}
            />
          </TouchableOpacity>
          <View style={styles.disclaimerContainerSuper}>
            <View style={styles.disclaimerContainer}>
              <Text style={styles.disclaimer}>
                <Text style={styles.bold}>Disclaimer :</Text> We don't use any
                of the details for commercial and public use. All the details
                are stored safely.
              </Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
  },
  disclaimer: {
    fontSize: 16,
  },
  disclaimerContainer: { padding: 20 },
  inputContainer: {
    backgroundColor: Colors.input,
    borderRadius: 10,
    height: 50,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  input: {
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
    marginTop: "5%",
  },
  bold: {
    fontWeight: "bold",
  },
  disclaimerContainerSuper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default HomeScreen;
