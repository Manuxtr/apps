import { events } from "@/assets/local-data/events";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const sceenWidth = Dimensions.get("window").width *0.94

export default function EventDetails(){
  // to search the array we use localsearchparam
  // we destructure the array
  const {id}=useLocalSearchParams();
  const [data,setData]= React.useState(undefined);  

  React.useEffect(()=>{
    if (id !== undefined && id !== null && id !== "") {
      const filteredData = events.filter((item) => item.id === id)[0];
      setData(filteredData);  
    }
  },[id]);

  console.log("Event Details Data:", events);

  if(data !==undefined){
    return(
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1, paddingVertical:16}}>

           {/* upper group */}
       <View>
          <View className=" flex flex-row justify-center border-b-2 border-black-200">
            <Image
            source={{ uri:data.bannerUrl }}
            style={{ width:sceenWidth, height: 200, resizeMode:"cover" }}
            className="rounded-md"
            alt="Event cover image"/>
          </View>
       </View>
      {/* body area */}
      <View className="flex flex-row justify-between gap-x-4">

        <View>

        </View>

        <View>

        </View>

      </View>


       {/* bottom view */}
       <View>
          <TouchableOpacity>
            <Text>Save event</Text>
          </TouchableOpacity>

       </View>

        </SafeAreaView>
      
      </SafeAreaProvider>
      )
    }  

  }