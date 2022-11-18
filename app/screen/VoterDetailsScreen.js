import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../component/Header";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../config/Colors";

const VoterDetailsScreen = ({ navigation }) => {
  const name = "Sharukhan",
    fatherName = "Amitha Bachan",
    sex = "MALE",
    dob = "25/01/2002",
    address = "Coimbatore - 641014",
    linkedAadhaarNo = "0987456789374567",
    voterId = "AXCB234ADA";
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
          <Text style={styles.heading}>{": " + voterId}</Text>
          <Text style={styles.heading}>{": " + name}</Text>
          <Text style={styles.heading}>{": " + fatherName}</Text>
          <Text style={styles.heading}>{": " + sex}</Text>
          <Text style={styles.heading}>{": " + dob}</Text>
          <Text style={styles.heading}>{": " + address}</Text>
          <Text style={styles.heading}>{": " + linkedAadhaarNo}</Text>
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
    marginTop: "20%",
    marginLeft: "5%",
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
  },
  heading: {
    padding: 5,
    fontSize: 16,
  },
  button: {
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
