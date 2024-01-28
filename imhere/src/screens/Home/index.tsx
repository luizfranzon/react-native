import { Text, TextInput, ScrollView, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { useState } from "react"

import { styles } from "./styles"

import { Participant } from "../../components/Participant"

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Adicionar participante", "Esse participante já existe na lista.")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Tem certeja que deseja remover "${name}" da lista?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert(`Removido com sucesso!`, `"${name}" foi removido da lista de participantes.`)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function getCurrentDate() {
    const day = new Date().getDate()
    const month = new Date().toLocaleString('pt-BR', { month: 'long' })
    const year = new Date().getFullYear()

    return `${day} de ${month} de ${year}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo!
      </Text>

      <Text style={styles.subText}>{`${getCurrentDate()}`}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity disabled={participantName.length < 3} style={participantName.length < 3 ? styles.disabledButton : styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Ninguém chegou ao evento? Adicione participantes para mostrar na lista!</Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.length < 1 ?
            (
              <Text style={styles.emptyListText}>Ninguém chegou ao evento? Adicione participantes para mostrar na lista!</Text>
            )
            :
            (
              participants.map((participant, index) => {
                return (
                  <Participant
                    key={index}
                    name={participant}
                    onRemove={handleParticipantRemove}
                  />
                )
              })
            )
        }
      </ScrollView> */}

    </View>
  )
}