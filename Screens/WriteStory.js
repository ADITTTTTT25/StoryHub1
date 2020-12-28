import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { Header} from "react-native-elements";
import {TextInput} from "react-native-gesture-handler";
export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            text2:'',
            text3:'',
        }
    }
    render(){
        return(
            <View >
            <Header
          backgroundColor={'#FFC0CB'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'black', fontSize: 50 },
          }}
            />
            <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          placeholder="Title Of Story"
          value={this.state.text}
        />

<TextInput
          style={styles.inputBox}
          onChangeText={(text2) => {
            this.setState({ text2: text2 });
          }}
          placeholder="Author Of Story"
          value={this.state.text2}
        />

<TextInput
          style={styles.inputBox2}
          onChangeText={(text3) => {
            this.setState({ text3: text3 });
          }}
          placeholder="Write Your Story"
          multiline={true}
          value={this.state.text3}
        />
        <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Submit!</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        marginTop:100,
        fontSize:20
        
      },
      inputBox2: {
        width: '80%',
        alignSelf: 'center',
        height: 500,
        textAlign: 'center',
        borderWidth: 4,
        marginTop:100,
        fontSize:20
        
      },
      submitButton:{
        backgroundColor:"#FFC0CB",
        width:200,
        height:50,
        justifyContent:"center",
        marginLeft:300,
        marginTop:20,
        borderWidth:2
      },
      submitButtonText:{
        fontSize:20,
        textAlign:"center",
        fontWeight:'bold',
        color:"black",
        padding:10,
      },
  });