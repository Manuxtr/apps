import { Link } from "expo-router";
import { SafeAreaView, Text, View ,Image, Dimensions} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";
import { getDocs ,collection,query,where,orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Seperator } from "@/components/ListSeperator";
import { FlatList } from "react-native";
import {UserEventSnippet} from "@/components/UserEventSnippet"
import { db } from "@/config/firebase.config";


// 24 IS USED FOR PADDING ,16 FOR GAP,4 MEANT FOR UNACCOUNTED SPACES
const screenwidth = Dimensions.get("window").width - 24 -16 - 4

export default function Profile(){
  let user = "anonymous"
  const [userEvents,setUserEvents]=useState([])
  console.log("??????",userEvents)

  useEffect(() => {
    const handleFetchUserEvents= async () =>{
      const reData = [];
      const q=query(
        collection(db,"events"),
        where("createdBy","==",user),
      );

      const onSnap=await getDocs(q);
      onSnap.docs.forEach(doc => reData.push({
        id:doc.id,
        data:doc.data()
      }));
      
      setUserEvents(reData);
    }

    // call and execute function
    handleFetchUserEvents();
  },[user]);
  
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{paddingHorizontal:12}} className="flex gap-6">
  
        {/* header section */}
        <View className="flex items-center">
          <Image
          style={{width:86,height:86}}
          source={require("../../assets/images/user.png")}
          alt="demo user profile pic"
          />
          <Text className="font-bold">Ademola Sulieman</Text>
          <Text className="text-stone-600 tracking-widest">@adesule</Text>
        </View>
          <View className="flex flex-row items-center gap-6 mt-3 justify-center">
         <Link href={"/"} className=" flex flex-row items-center px-2 py-2 rounded-md bg-teal-700">
            <View className=" flex flex-row items-center gap-3" >
              <FontAwesome name="pencil-square-o" size={24} color="white"/>
              <Text className="text-lg font-semibold text-white">Update profile</Text>
            </View>
         </Link>

          <Pressable className="flex flex-row items-center px-3 py-2 rounded-md bg-red-700 gap-3">
            <MaterialIcons name="logout" size={24} color="white"/>
            <Text className="text-lg font-semibold text-white">Log out</Text>
         </ Pressable>
          
        </View>
        {/*body section  */}
        <View className=" flex gap-3 border border-stone-300 rounded-md p-4">
          {/*this view is  aparent  */}
          <View className="flex flex-row justify-between">
              <Text className="text-stone-600 tracking-wider text-lg">Account Email</Text>
              <Text className="text-md text-stone-800">ademola_sule@gmail.com</Text>
          </View>

                {/* bottom section */}

          <View className="flex flex-row justify-between">
              <Text className="text-stone-600 tracking-wider text-lg">Department</Text>
              <Text className="text-md text-stone-800">Computer Engineering</Text>
          </View>

          <View className="flex flex-row justify-between">
              <Text className="text-stone-600 tracking-wider text-lg">Faculty</Text>
              <Text className="text-md text-stone-800">Engineering</Text>
          </View>

          <View className="flex flex-row justify-between">
              <Text className="text-stone-600 tracking-wider text-lg">Institution</Text>
              <Text className="text-md text-stone-800">Amodu Bello University Zaria</Text>
          </View>

         
        </View>
       

        {/* show events by user */}
        
          <View >
             <Text style={{fontSize:24,marginBottom:16}}>My Events</Text>
            <FlatList
              data={userEvents}
              renderItem={({item}) =>{
              return(
                <UserEventSnippet boxWidth={screenwidth/3} eventData={item}/>
               )
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Seperator h={0} w={8}/> }
              
              />
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )


}