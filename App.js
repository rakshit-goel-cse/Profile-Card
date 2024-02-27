import { StatusBar } from "expo-status-bar";
import { StyleSheet, Linking, Alert ,Modal ,View ,Text ,TouchableOpacity} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/card/Card";
import { useState } from "react";

export default function App() {

  const [modalVisible,setModalVisible] = useState(false);

  const openLink = (link) => {
    Linking.openURL(link);
  };

  const openPage = (pageName) => {
    switch (pageName) {
      case "x-twitter":
        openLink("https://twitter.com/i/flow/login");
        break;

      case "linkedin-in":
        openLink("https://www.linkedin.com/login");
        break;

      case "instagram":
        openLink("https://www.instagram.com/accounts/login/?hl=en");
        break;

      default:
        Alert.alert("Something went Wrong!!");
        break;
    }
  };

  let userData = [
    { name: "Omega", description: "I am the fire I am burning brighter" },
    { name: "Beta", description: "roaring like a storm And I am the one" },
    { name: "Alfa", description: "I've been waiting for Screaming" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safearea}>
        {userData.map((value) => {
          return (
            <Card
              key={value.name}
              name={value.name}
              description={value.description}
              openPage={openPage}
              imageSrc={{ uri: "https://i.pravatar.cc/300?" + Math.random() }}
              setModalVisible={setModalVisible}
            />
          );
        })}



      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
});
