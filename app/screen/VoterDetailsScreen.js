import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../component/Header";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../config/Colors";
import DATA from "../config/DATA";
const VoterDetailsScreen = ({ navigation }) => {
  const voterDetails = DATA.voterDetails;

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
          <Text style={styles.heading}>{": " + voterDetails.voterId}</Text>
          <Text style={styles.heading}>{": " + voterDetails.name}</Text>
          <Text style={styles.heading}>{": " + voterDetails.fatherName}</Text>
          <Text style={styles.heading}>{": " + voterDetails.sex}</Text>
          <Text style={styles.heading}>{": " + voterDetails.dob}</Text>
          <Text style={styles.heading}>{": " + voterDetails.address}</Text>
          <Text style={styles.heading}>
            {": " + voterDetails.linkedAadhaarNo}
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
    marginTop: "20%",
    marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: Colors.ternary,
  },
  item: {
    flexDirection: "row",
  },
  heading: {
    padding: 5,
    fontSize: 18,
    fontWeight: 600,
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
