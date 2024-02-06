import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import { StyleSheet, Text, View, Image, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import logoApp from "./assets/cart.png"
import RemoveModal from "./src/components/RemoveModal";
import ErrorModal from "./src/components/ErrorModal";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const handleInputChange = (value) => setInputValue(value);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  const handleModal2 = () => {
    setModalVisible2(true);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleAddPress = () => {
    const inputV = inputValue;
  
    if (inputV.trim().length > 0) {
      addItem();
    } else {
      handleModal2();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
      <ErrorModal
        modalVisible2={modalVisible2}
        setModalVisible2={setModalVisible2}
      />
      <View style={styles.header}>
          <Image style={styles.image} source={logoApp} />
          <Text style={{fontSize: 20, color: "white", fontWeight: "bold",}}>LISTADO DE PRODUCTOS - CARRITO</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <TouchableOpacity style={styles.touchableAgregar} onPress={() => handleAddPress()}>
          <Text style={styles.product}>📝AGREGAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.flatlist}>
              <Text style={styles.product}>{item.name}</Text>
              <TouchableOpacity style={styles.touchableEliminar} onPress={() => handleModal(item.id)}>
                <Text style={styles.product}>🗑️ELIMINAR</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031A6B',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    alignItems: "center",
    padding: 20
  },
  image: {
    width: 50,
    height: 50,
  },
  flatlist:{
    width: 400, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingVertical: 10
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
  },
  touchableAgregar: {
    backgroundColor: 'green', 
    padding: 10, 
    borderRadius: 20 
  },
  touchableEliminar: {
    backgroundColor: 'red', 
    padding: 10, 
    borderRadius: 20 
  },
  input: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "90%",
    marginEnd: 20,
  },
  inputContainer: { 
    flexDirection: "row",
  },
});
