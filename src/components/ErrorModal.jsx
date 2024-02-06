import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

const ErrorModal = ({
    modalVisible2,
    setModalVisible2,
  }) => {
  
    return (
      <Modal animationType="slide" transparent visible={modalVisible2}>
        <View style={styles.modalContainer}>
          <Text>No se detecto ningun caracter, debe ingresar un producto.</Text>
          <Pressable style={styles.pressable} onPress={() => setModalVisible2(false)}>
            <Text style={{color:"white", fontSize: 16, fontWeight: "bold"}}>✅ACEPTAR</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };
  
  export default ErrorModal;

  const styles = StyleSheet.create({
    modalContainer: {
      margin: "auto",
      width: "90%",
      height: 200,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent: "space-between",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    pressable: {
      alignItems: "center",
      width: "100%",
      backgroundColor: '#031A6B', 
      padding: 10, 
      borderRadius: 20 
    },
  });