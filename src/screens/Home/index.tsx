import { Text, View } from "react-native"

import { styles } from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>
            Bem-vindo!
          </Text>
          <Text style={styles.subText}>20 de Janeiro de 2024</Text>
        </View>
        <Text style={styles.text}>Luiz F.</Text>
      </View>
    </View>
  )
}