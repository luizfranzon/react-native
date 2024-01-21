import { Text, TextInput, View, TouchableOpacity } from "react-native"

import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("participante adicionado")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo!
      </Text>

      <Text style={styles.subText}>20 de Janeiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}