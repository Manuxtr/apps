import { EventSnippet } from "@/components/eventSnippet";
import { Seperator } from "@/components/ListSeperator";
import { themeColors } from "@/utils/theme.utils";
import { useState ,useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {getDocs,collection,query,orderBy} from "firebase/firestore"
import{db}  from "@/config/firebase.config"

export default function index(){
  const [events,setEvents]=useState([])

  // fetches events from database
  useEffect(() => {
    const handleFetchData= async () =>{
      const recievedData = []
      const onSnap= await getDocs(collection(db,"events"));
      onSnap.docs.forEach(doc => recievedData.push({
        id:doc.id,
        data:doc.data()
      }))
      setEvents(recievedData)
    }
    handleFetchData()
  },[])


if (events.length > 0) {
  
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <FlatList
        data={events}
        ItemSeparatorComponent={() => (<Seperator h={32}w={0}/>)}
        renderItem={({item}) =>{
        return(
          <EventSnippet data={item.data}/>
        )
        }}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
  
  } else {
    return(
      <SafeAreaProvider>
        <SafeAreaView style={styles.emptyWrapper}>
          <ActivityIndicator size="large" color={themeColors.darkGreen}/>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
} 

const styles = StyleSheet.create({
  emptyWrapper:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
});