import { Image, StyleSheet, Text, View,ImageBackground,TouchableOpacity } from "react-native";
import { introStyles } from "@/styles/intro.styles";


export default function Index(){
  return (
    <View style={introStyles.cover}>
      <ImageBackground
        style={introStyles.bg}
        source={require("../assets/images/intro_bg.jpg")}>  
        
        <View style={introStyles.layer}>
            <View style={introStyles.header}>
            <Text style={introStyles.title}>UniPeers</Text>

            </View>

            <View style={introStyles.body}>
              <Text style={introStyles.bodyText}>The school app for socializing.
                connect with friends,create your own event,and 
                other amazing events from students
              </Text>

            </View>

            <View>
              <TouchableOpacity style={introStyles.btn}>
                <Text style={introStyles.bodyText}>Get Started</Text>
              </TouchableOpacity>
             
            </View>
        </View>
      </ImageBackground>
    </View>
  )};
 