import { events } from "@/assets/local-data/events";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


// calculate screen width
const screenWidth = Dimensions.get("window").width;

function Seperator(){
  return(
    <View style={{height:36,backgroundColor:"transparent"}}></View>
  )
}

export default function index(){
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList 
          data={events}
          ItemSeparatorComponent={Seperator}
          renderItem={({ item }) => {
          return (
            <View className="relative">
              <Image
              source={{uri:item.bannerUrl}}
              alt="event photo"
              style={{width:screenWidth,height:400,resizeMode:"cover"}}/>

              {/* this view is set to absolute on event components*/}
              <View className=" absolute top-3 left-3 p-3 bg-teal-800 rounded-md">
              {item.free === true ?
              <Text className="text-white font-bold">free</Text>
              :
              <Text className="text-white font-bold">{item.fee}</Text>
              }
              </View>

            
            <View className="px-3">
              <View className="p-3 rounded-b-md border border-teal-600 border-t-0" >
                <Text className="text-xs font-bold">{item.title}</Text>
                <View className="flex flex-row justify-between">
                <View className="flex flex-row items-center gap-x-2">
                <FontAwesome name="user-circle" size={24} /> 
                <Text>{item.createdBy.length > 24 ? `${item.createdBy.slice(0,24)}...` : item.createdBy}</Text>
                </View>
                <Link href={`/event-details/${item.id}`} className=" p-3 text-white font-bold bg-teal-800 rounded-md">
                <Text> Event Details</Text>
                {/* <AntDesign name="arrowright" size={24} />  */}
                </Link>
                </View>
              </View>
            </View>

            </View>
          );
          }}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  )


}