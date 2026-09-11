import React, { Component } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Lista from './src/components/lista';

// Componente para renderizar cada Story individual
const StoryItem = ({ item }) => (
  <TouchableOpacity style={styles.storyContainer}>
    <View style={styles.storyBorder}>
      <Image source={{ uri: item.imgperfil }} style={styles.storyImage} />
      {item.isUser && (
        <View style={styles.addUserIcon}>
          <Text style={styles.addUserText}>+</Text>
        </View>
      )}
    </View>
    <Text style={styles.storyName} numberOfLines={1}>
      {item.nome}
    </Text>
  </TouchableOpacity>
);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      // Lista de dados para os Stories
      stories: [
        {
          id: '1',
          nome: 'Your story',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          isUser: true,
        },
        {
          id: '2',
          nome: 'super_santi_73',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        },
        {
          id: '3',
          nome: 'lil_wyatt838',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
        },
        {
          id: '4',
          nome: 'liam_beanz5',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
        },
        {
          id: '5',
          nome: 'matheus_raiz',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        }
      ],
      // Lista do Feed
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: true, 
          likers: 1
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
     };
  }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

          {/* Cabeçalho Fixo do App */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
          source={require('./assets/img/logo.png')}
          style={styles.logo}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
          source={require('./assets/img/like.png')}
          style={styles.send}
              />
            </TouchableOpacity>
          </View>

          {/* Feed com Header de Stories embutido */}
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={this.state.feed}
            renderItem={({ item }) => <Lista data={item} />}
            ListHeaderComponent={
              <View style={styles.storiesSection}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  data={this.state.stories}
                  renderItem={({ item }) => <StoryItem item={item} />}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                />
              </View>
            }
          />

        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#DDD',
  },
  logo: {
    width: 110,
    height: 30,
    resizeMode: 'contain',
  },
  iconHeader: {
    width: 24,
    height: 24,
  },

  send: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  // Estilos dos Stories
  storiesSection: {
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF',
  },
  storyContainer: {
    alignItems: 'center',
    width: 76,
    marginRight: 8,
  },
  storyBorder: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#C13584',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    position: 'relative',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyName: {
    fontSize: 11,
    color: '#262626',
    textAlign: 'center',
  },
  addUserIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0095F6',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addUserText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -2,
  },
});

export default App;