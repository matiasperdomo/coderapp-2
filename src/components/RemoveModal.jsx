import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

const RemoveModal = ({
  modalVisible,
  cartItems,
  setCartItems,
  setModalVisible,
  itemSelected,
}) => {
  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text>Quieres eliminar el producto?</Text>
        <Pressable style={styles.pressable} onPress={() => setModalVisible(false)}>
          <Text style={{color:"white", fontSize: 16, fontWeight: "bold"}}>❌NO</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={removeItem}>
          <Text style={{color:"white", fontSize: 16, fontWeight: "bold"}}>✅SÍ</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default RemoveModal;

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