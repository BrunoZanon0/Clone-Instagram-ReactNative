import React,{Component} from "react";
import 
{
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
}
from "react-native";
import Lista from "./src/component/lista.js"

class meuApp extends Component{

  constructor(props){
    super(props);
    this.state = { 
        feed: [
          {
            id: '1', 
            nome: 'Bruno Zanon', 
            descricao: 'Mais um dia de muitos bugs 1:)', 
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
            imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
            likeada: true, 
            likers: 1
           },
          {
            id: '2', 
            nome: 'Mirella Zanon', 
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

  render(){
    return(
      <View style={style.component}>

        <View style={style.header}>
          <TouchableOpacity>
            <Image
              source={require("./src/img/logo.png")}
              style={style.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("./src/img/send.png")}
              style={style.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({item})=> <Lista data={item} />}
        />

      </View>
    )
  }
}

this.style = StyleSheet.create({
  component:{
    flex:1,
    marginTop:40
  },
  header:{
    height:55,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    borderBottomWidth:0.1,
    shadowColor:'black',
    elevation:1
  },
  logo:{

  },
  send:{
    width:23,
    height:23
  }
})

export default meuApp;
