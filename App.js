import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Agentes do Vava
      </Text>
  
  <FlatList
    data={arrayDados}
    renderItem={({item})=>
    <SafeAreaView styles={styles.containerVava}>
    <Text style={styles.textoVava}> {item.agente} </Text>

    </SafeAreaView>
    }
  />

    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B22222',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textoVava: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#FFE4C4',
    borderRadius:10,
    padding:10
  },
});

const arrayDados = [
  {agente:'Skye'},
  {agente:'Omen'},
  {agente:'DeadLock'},
  {agente:'Brimstone'},
  {agente:'Reyna'},
  {agente:'Sage'},
  {agente:'Gekko'},
  {agente:'Jett'},
  {agente:'Raze'},
  {agente:'Viper'},
  {agente:'Fade'},
  {agente:'Neon'},
  {agente:'Iso'},
  {agente:'Harbor'},
  {agente:'Kay-o'},
  {agente:'Chamber'},
  {agente:'KillJoy'},
  {agente:'Astra'},
  {agente:'Yoru'},
  {agente:'Breach'},
  {agente:'Chyper'},
  {agente:'Sova'}
];
