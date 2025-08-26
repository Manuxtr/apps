import { events } from "@/assets/local-data/events";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {useFonts} from "expo-font"
import { EventSnippet } from "@/components/eventSnippet";
import {Main} from "@/styled/custom-styled-component";


// calculate screen width
// const screenWidth = Dimensions.get("window").width;

function Seperator(){
  return(
    <View style={{height:36,backgroundColor:"transparent"}}></View>
  )
}

export default function index(){


  const [fontsLoaded]=useFonts({
    "Bodoni-Bold":require("../../assets/fonts/BodoniFLF-Bold.ttf"),
    "Raleway-Bold":require("../../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular":require("../../assets/fonts/Raleway-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null

  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={{ flex:1}}>
      <FlatList
      data={events}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) =>{
        return(
          <EventSnippet data={item}/>
        )
      }}
      keyExtractor={(item) => item.id}
      />
        
      </SafeAreaView>
    </SafeAreaProvider>
  )


}

const styles = StyleSheet.create({
  text:{
    fontSize:24,
    fontFamily:"Bodoni-Bold",
    fontWeight:"bold"

  },


});