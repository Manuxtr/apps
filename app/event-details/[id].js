import { events } from "@/assets/local-data/events";
import { EventSnippet } from "@/components/eventSnippet";
import { themeColors } from "@/utils/theme.utils";
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

  // convert timestamp to date
  const convertTimestamp=(stamp)=>{
    const evenDate=new Date(stamp)
    return String(evenDate)
  }
  // a function to decide if the event is free or has a fee
  // and return the appropriate text
  const decideFee=(free,fee) =>{
    let feeText="";
    if(free===true){
      feeText="FREE"
    }else{
      feeText=`₦${fee}`
    }
    return feeText;
  }

  console.log("Event Details Data:", events);

  if(data !==undefined){
    return(
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1, paddingVertical:16,display:"flex",justifyContent:"space-between"}}>
           {/* upper group */}
          <View className="flex gap-y-3">
            <View className="flex flex-row justify-center">
              <Image
              source={{ uri:data.bannerUrl }}
              style={{ width:sceenWidth, height: 200, resizeMode:"cover" }}
              className="rounded-md"
              alt="Event cover image"/>
            </View>

            {/* body area */}
            <View className="flex  justify-between gap-y-4 px-3">
              <EventSnippet mainTitle={data.time} subTitle={data.date} iconName="event-note"/>
              <EventSnippet mainTitle={data.title} subTitle={data.createdBy} iconName="person"/>
              <EventSnippet mainTitle={decideFee(data.free,data.fee)} subTitle={convertTimestamp(data.createdAt)} iconName="account-balance-wallet"/>
              <EventSnippet mainTitle={data.venue} subTitle={data.school} iconName="location-pin"/>
          
              {/* description block */}
              <View>
                <Text style={{color:themeColors.darkGreen,fontWeight:"bold" ,fontSize:20}}>event discription</Text>
                <Text>{data.desc}</Text>
              </View>
            </View>
          </View>
 
          {/* bottom view */}
          <View className="px-3">
              <TouchableOpacity style={{backgroundColor:themeColors.darkGreen}} className="h-16 flex justify-center items-center rounded-full  ">
                <Text className="text-3xl text-white ">Save event</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      )
    }else{
      return(
        <SafeAreaProvider>
        <SafeAreaView style={{flex:1, paddingVertical:16,display:"flex",justifyContent:"space-between"}}></SafeAreaView>
          <Text style={{fontSize:20}}>undefined</Text>
        </SafeAreaProvider>
      )
    } 



  }