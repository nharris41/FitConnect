import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Pressable, Alert, TouchableOpacity, ScrollView } from 'react-native'

class Inputs extends Component {
   state = {
      fullName: '',
      emailAddress: '',
      password: '',
      passwordmatch: '',
      sex: '',
      age: '',
      height: '',
      weight: ''
   }
   fullName = (text)=> {
    this.setState({ fullName: text })
   }
   emailAddress = (text)=> {
    this.setState({ emailAddress: text })
   }
   password = (text)=> {
    this.setState({ password: text })
   }
   passwordmatch = (text)=> {
    this.setState({ passwordmatch: text })
   }
   sex = (text)=> {
    this.setState({ sex: text })
   }
   age = (text)=> {
    this.setState({ age: text })
   }
   height = (text)=> {
    this.setState({ height: text })
   }
   weight = (text)=> {
    this.setState({ weight: text })
   }

   
   textboxErrors() {

    errors = []
    passwords = []
    if(this.state.fullName.length == 0){
      errors.push("full name")
    }
    if(this.state.emailAddress.length == 0){
      errors.push("email address")
    }
    if(this.state.password.length == 0){
      errors.push("password")
    }
    if(this.state.passwordmatch.length == 0){
      errors.push("password confirmation")
    }
    if(this.state.sex.length == 0){
      errors.push("sex")
    }
    if(this.state.age.length == 0){
      errors.push("age")
    }
    if(this.state.height.length == 0){
      errors.push("height")
    }
    if(this.state.weight.length == 0){
      errors.push("weight")
    }
    if(errors.length == 0){
      if(this.state.password.length < 5 || (this.state.password != this.state.passwordmatch)){
        if(this.state.password.length < 5){
          passwords.push("at least 5 characters")
        }
        else{
          passwords.push("match")
        }
        Alert.alert("Please make password " + passwords[0])
        passwords.pop() 
      }
      else{
        Alert.alert("Account created")
      }
    }
    else{
      Alert.alert("Please fill out your " + errors[0])
      errors.pop()
    }

}
  
   render() {
      return (

          <ScrollView contentInset={{bottom: 100}}
            style = {styles.container}>  
            
            <View>
              <Text style = {styles.text}> Create Trainer Account </Text>
            </View>

            <TextInput style = {styles.input}
              placeholder = "Full Name (e.g. John Smith)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.fullName}/>
              

           <TextInput style = {styles.input}

              placeholder = "Email Address (e.g. johnsmith@gmail.com)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.emailAddress}/>

          <TextInput secureTextEntry={true} style = {styles.input}

              placeholder = "Password"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.password}/>  
          
          <TextInput secureTextEntry={true} style = {styles.input}

              placeholder = "Confirm Password"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.passwordmatch}/>  

          
          <ScrollView horizontal = {true} scrollEnabled = {false}>
          
            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>M</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>T</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>W</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>TH</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>F</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>S</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.calendarButtonContainer}>
              <Text style={styles.calendarButtonText}>Su</Text>
            </TouchableOpacity>

            
          </ScrollView>
         
          <ScrollView horizontal = {true} scrollEnabled = {false}>
          
            <TouchableOpacity style={styles.activityContainer}>
              <Text style={styles.activityButtonText}>Strength</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activityContainer}>
              <Text style={styles.activityButtonText}>Aerobic</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activityContainer}>
              <Text style={styles.activityButtonText}>Flexibility</Text>
            </TouchableOpacity>
            
          </ScrollView>
         

          <TextInput style = {styles.input}

              placeholder = "Sex (e.g. male)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.sex}/> 

          
          <TextInput style = {styles.input}

              placeholder = "Age (e.g. 20)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.age}/>  
          
          <TextInput style = {styles.input}

              placeholder = "Height (e.g. feet'inches)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.height}/>  
          
          <TextInput style = {styles.input}

              placeholder = "Weight in pounds (e.g. 160)"
              placeholderTextColor = "#a9a9a9"
              autoCapitalize = "none"
              onChangeText = {this.weight}/>  



          <TouchableOpacity style = {styles.createContainer}
            onPress = {() => {this.textboxErrors()}}>

            <Text style = {styles.createButtonText}> Create </Text>
          </TouchableOpacity>

         </ScrollView>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 70,
      
   },
   input: {
      margin: 16,
      height: 44,
      borderWidth: 0.7,
      borderRadius: 13,
      borderColor: "black",
      fontSize: 16
   },
   text: {
      textAlign: 'center',
      margin: 12,
      fontWeight: "bold",
      color: '#ff1c99',
      fontSize: 36
  },
   buttonText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "bold",

   },
    sideButtons: {
      flexDirection: 'row',
      paddingLeft: 30,
      width: "90%",
      justifyContent: 'space-between',
    },
    calendarButtonContainer: {
      backgroundColor: '#ff1c99',
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      marginLeft: 16,
      marginBottom: 15,
      flexDirection: 'row',

    },
    calendarButtonText: {
      fontSize: 22,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
    },
    activityContainer: {
      backgroundColor: '#ff1c99',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 40,
      marginLeft: 26,
      marginBottom: 0,
      flexDirection: 'row',

    },
    activityButtonText: {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
    },
    createContainer: {
      backgroundColor: '#ff1c99',
      borderRadius: 13,
      borderWidth: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
      width: 380,
      height: 60,
      marginLeft: 18,
      marginTop: 7,
      marginBottom: 0,
      flexDirection: 'row',
      borderColor: "black"

    },
    createButtonText: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold",
      alignSelf: "center",
    }

  
})

