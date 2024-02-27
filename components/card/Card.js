import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import Modal from 'react-native-modal';
import { s } from "./Card-style";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";

function Card({ openPage, name, description, imageSrc }) {
  let icons = [
    { name: "x-twitter", color: "black" },
    { name: "linkedin-in", color: "blue" },
    { name: "instagram", color: "red" },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image
          source={imageSrc}
          style={{ height: 50, width: 50, borderRadius: 70 }}
        />
      </TouchableOpacity>
      <View style={{ paddingLeft: 4, flex: 1 }}>
        <Text style={{ fontWeight: "bold" }} onPress={()=>Alert.alert(name)}>{name}</Text>
        <Text style={{}}>{description}</Text>
        <View style={{ flexDirection: "row" }}>
          {icons.map((value) => {
            return (
              <TouchableOpacity
                onPress={() => openPage(value.name)}
                key={value.name}
                style={{ flex: 1 }}
              >
                <FontAwesome6 name={value.name} size={24} color={value.color} />
              </TouchableOpacity>
            );
          })}

          {/*<FontAwesome6 style={{flex:1}} name="x-twitter" size={24} color="black" />
      <FontAwesome6 style={{flex:1}} name="linkedin-in" size={24} color="black" />
  <FontAwesome6 style={{flex:1}} name="instagram" size={24} color="black" />*/}
        </View>
      </View>

      <Modal
      style={{backgroundColor:"black",alignSelf:"center",maxHeight: 200}}
        visible={modalVisible}
        onBackdropPress={()=>{
          setModalVisible(false)}
        }
        transparent
        animationType="fade"
        onRequestClose={() =>setModalVisible(false)}>

        <View style={{flex:1,elevation:10 }}>
          <TouchableOpacity
            onPress={() =>setModalVisible(false)}>
            <Image
              source={imageSrc}
              style={{ height: 200, width: 200, borderRadius: 30 }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default Card;
