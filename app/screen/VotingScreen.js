import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../component/Header";
import DATA from "../config/DATA";
import Colors from "../config/Colors";
import ActivityIndicator from "../component/ActivityIndicator";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const VotingScreen = ({ navigation }) => {
  const partyData = DATA.partyData;
  const [loading, setLoading] = useState(false);
  let key = 0;

  const handlePress = (partyName) => {
    Alert.alert("Vote for " + partyName, "", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: () => {
          setLoading(true);
          wait(2000).then(() => navigation.navigate("HomeScreen"));
        },
      },
    ]);
  };

  const Item = ({ partyName, partySymbol }) => (
    <TouchableOpacity onPress={() => handlePress(partyName)}>
      <View style={styles.item}>
        <Text style={styles.itemPartyName}>{partyName}</Text>
        <View style={styles.itemImageContainer}>
          <Image style={styles.itemImage} source={partySymbol}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item partyName={item.partyName} partySymbol={item.imageUrl} />
  );

  return (
    <>
      {loading ? (
        <ActivityIndicator
          visible={loading}
          source={require("../assets/done.json")}
        />
      ) : (
        <>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Party Name</Text>
            <Text style={styles.heading}>Party Symbol</Text>
          </View>
          <FlatList
            data={partyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  heading: { fontWeight: "bold", fontSize: 20, margin: 10 },
  itemPartyName: {
    fontSize: 16,
  },
  itemImageContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  itemImage: {
    height: 100,
    width: 100,
    width: "50%",
    alignItems: "center",
  },
});

export default VotingScreen;
