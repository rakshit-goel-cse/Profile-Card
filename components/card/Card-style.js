import { StyleSheet } from "react-native";



export const s = StyleSheet.create({
  container: {
    borderRadius:10,
    flexDirection:"row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 8,
    margin:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});