import { events } from "@/assets/local-data/events";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



function Seperator(){
  return(
    <View style={{height:16,backgroundColor:"transparent"}}></View>
  )
}

export default function index(){
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList 
        data={events}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
              source={{uri:item.bannerUrl}}
              alt="event photo"
              style={{width:600,height:400,resizeMode:"cover"}}/>
              <Text className="text-xs font-bold">{item.title}</Text>
            </View>
          );
        }}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  )


}