import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../component/Header";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../config/Colors";
import DATA from "../config/DATA";
const VoterDetailsScreen = ({ navigation }) => {
  const details = DATA.voterDetails;

  return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.heading}>Voter ID</Text>
          <Text style={styles.heading}>Name</Text>
          <Text style={styles.heading}>Father's Name</Text>
          <Text style={styles.heading}>Sex</Text>
          <Text style={styles.heading}>Date Of Birth</Text>
          <Text style={styles.heading}>Address</Text>
          <Text style={styles.heading}>Linked Aadhaar No. </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.heading}>{": " + details["voterId"]}</Text>
          <Text style={styles.heading}>{": " + details["name"]}</Text>
          <Text style={styles.heading}>{": " + details["fatherName"]}</Text>
          <Text style={styles.heading}>{": " + details["sex"]}</Text>
          <Text style={styles.heading}>{": " + details["dob"]}</Text>
          <Text style={styles.heading}>{": " + details["address"]}</Text>
          <Text style={styles.heading}>
            {": " + details["linkedAadhaarNo"]}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VotingScreen")}
      >
        <AntDesign name="arrowright" size={50} color={Colors.secondary} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    top: "20%",
    paddingTop: "5%",
    paddingBottom: "5%",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Colors.ternary,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
  },
  heading: {
    padding: 5,
    fontSize: 16,
  },
  button: {
    top: "5%",
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginLeft: "40%",
    marginTop: "20%",
  },
});

export default VoterDetailsScreen;
