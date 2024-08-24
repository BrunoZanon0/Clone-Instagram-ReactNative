import React, { Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"

class Lista extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed: this.props.data,
        }

        this.mostraLikes     = this.mostraLikes.bind(this)
        this.trocaLike       = this.trocaLike.bind(this);
        this.verificaLikeada = this.verificaLikeada.bind(this);
    }

    verificaLikeada(likeada){
        let    icone = likeada == true ? `${require("../img/likeada.png")}` : `${require("../img/like.png")}`;

        return icone
    }

    mostraLikes(likes){

        if(likes <= 0){
            return;
        }

        return(
        <Text style={style.like}>
            {likes} {likes > 1 ? 'curtidas' : 'curtida'}
        </Text>
        )
    }

    trocaLike(){
        
        let feed = this.state.feed;

        if(feed.likeada == true){
            this.setState({
                feed:{
                    ...feed,
                    likeada:false,
                    likers: feed.likers - 1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada:true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    render(){
        return(
            <View style={style.areaFeed}> 
                

                <View style={style.viewPerfil}>
                    <Image
                    source={{uri:this.state.feed.imgperfil}}
                    style={style.fotoPerfil}
                    />

                    <Text style={style.nomeUsuario}>
                        {this.state.feed.nome}
                    </Text>
                </View>
                <Image
                resizeMode="cover"
                style={style.fotoPublicacao}
                source={{uri:this.state.feed.imgPublicacao}}
                />

                <View style={style.iconesArea}>
                    <TouchableOpacity onPress={this.trocaLike}>
                        <Image
                        source={this.verificaLikeada(this.state.feed.likeada)}
                        style={style.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft:10}}>
                        <Image
                        source={require("../img/send.png")}
                        style={style.iconeSend}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={style.rodape}>
                    <Text style={style.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={style.descricaoRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    areaFeed:{

    },
    viewPerfil:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        padding:9
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius:25
    },
    nomeUsuario:{
        fontSize:22,
        textAlign:'left',
        color:'#000'
    },
    fotoPublicacao:{
        flex:1,
        height:400,
        alignItems:'center'
    },
    iconesArea:{
        flexDirection:'row',
        padding:5,
    },
    iconeLike:{
        width:33,
        height:33
    },
    iconeSend:{
        width:33,
        height:33
    },
    rodape:{
        flexDirection:'row',
        alignItems:'center'
    },
    nomeRodape:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        paddingLeft:5
    },
    descricaoRodape:{
        paddingLeft:5,
        fontSize:15,
        color:"#000"
    },
    like:{
        fontWeight:'bold',
        marginLeft:5
    }


})


export default Lista;