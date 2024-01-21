import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140f17',
    padding: 24,
  },
  text: {
    color: "white",
    marginTop: 24,
    fontSize: 24,
    fontWeight: 'bold'
  },
  subText: {
    color: 'white'
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 4,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 10
  }
})