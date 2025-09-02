import { HowtoCreateEvent } from "@/assets/local-data/how-create-events";
import { schools } from "@/assets/local-data/school-list";
import { formatTimestampToDate } from "@/utils/format-date.utils";
import { themeColors } from "@/utils/theme.utils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity,View ,ActivityIndicator, Alert} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { db } from "../../config/firebase.config";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";


const option = [
    {
        label:"Lagos",
        venue:"lagos"
    }
]


export default function Create() {
    const [title,setTitle]= useState("");
    const [Description,setDescription]=useState("");
    const [venue,setVenue]=useState("");
    const [imgUrl,setimgUrl]=useState("");
    const [fee,setFee]=useState(0);
    const [schoolOptions,setschoolOptions]=useState([]);
    const [selectedSchool,setselectedSchool]=useState(null);
    const [date,setDate]=useState(new Date());
    const [showPicker,setShowPicker]=useState(false);
    const [loading,setLoading]=useState(false);

    // firebase handle create event
    const handleCreateEvent= async ()=>{
        setLoading(true);
        try {
            const docRef=addDoc(collection(db,"events"),{
            title:title,
            desc:Description,
            venue:venue,
            school:selectedSchool,
            date:"",
            createdBy:"anonymous",
            createdAt:new Date().getTime(),
            imgUrl:"",
            fee:fee
        })
        setLoading(false)

        Alert.alert(
            "ALERT",
            "Event successfully created",
            [
                {text:"Okay"},
                {
                    text:"return",
                    onPress:()=> console.log("to be implimented")
                }
            ]
        )
        // clear input data
        setDate("");
        setTitle("");
        setVenue("");
        setDescription("");
        setFee("");
        setimgUrl("");

        } catch (error) {
            console.log("an error was encountered",error)
            setLoading(false);
            
        }
    }

    // make a simple list of schools
    useEffect(() => {
        const list=[];
        schools.forEach(item => list.push({
            label: item.title,
            value: item.symbol
        }));
        setschoolOptions(list)
        
    },[]);


    const onChange = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShowPicker(false);
    }
  
    return(
        <View style={styles.main}>
                <Text className="text-black text-4xl font-bold">create an event</Text>
            <ScrollView contentContainerStyle={{gap:16}}>
                        {/* form */}
                <View className="bg-white flex gap-4 rounded-md p-3 ">
                    <View>
                        <Text className="text-sx text-neutral-500">Event Title:</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="TITLE OF YOUR EVENT"
                        value={title}
                        onChangeText={(text)=> setTitle(text)}
                        />
                    </View>
                        <View>
                        <Text className="text-sx text-neutral-500">Event fee:</Text>
                        <TextInput
                        keyboardType="numeric" 
                        style={styles.input}
                        placeholder="fee in naria"
                        value={fee}
                        onChangeText={(text)=> setFee(text)}
                        />
                    </View>
                    <View>
                        <Text className="text-sx text-neutral-500">Event Description:</Text>
                        <TextInput 
                        multiline={true}
                        style={styles.input}
                        placeholder="TITLE OF YOUR EVENT"
                        value={Description}
                        onChangeText={(text)=> setDescription(text)}
                        />
                    </View>
                           <View>
                        <Text className="text-sx text-neutral-500">image address:</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="image link address"
                        value={imgUrl}
                        onChangeText={(text)=> setimgUrl(text)}
                        />
                    </View>

                    {/* <View>
                       <TouchableOpacity 
                       onPress={() => setShowPicker(true)}
                       style={styles.picker}
                       className="flex flex-row justify-between items-center">
                        <Text className="font-bold text-lg  text-neutral-100">{formatTimestampToDate(date)}</Text>
                        <Text className="font-bold text-2xl text-neutral-100">Select Event DATE</Text>
                       </TouchableOpacity>
                        {showPicker && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            mode="date"
                            value={date}
                            onChange={onChange}/>
                        )}
                    </View> */}

                        <View>
                        <Text className="text-sx text-neutral-500">Event Venue:</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="exact event venue"
                        value={venue}
                        onChangeText={(text)=> setVenue(text)}
                        />
                    </View>
                    
                    {schoolOptions.length > 0 &&
                    <View>
                        <Text>Choose school where event will be held</Text>
                        <RNPickerSelect
                        items={schoolOptions} 
                        onValueChange={(item) => setselectedSchool(item)}
                        value={selectedSchool}/>
                    </View>}
                    <TouchableOpacity onPress={
                        title.length > 6 &&
                        Description.length > 3 &&
                        imgUrl.length > 8
                        ? handleCreateEvent : () =>{}} style={styles.submitBtn}>
                        <Text style={styles.btnText}>Create Event</Text>
                       {loading ===true && <ActivityIndicator size="large" color="white"/>}
                    </TouchableOpacity>

                </View>
                {/* CREATE EVENT DOCUUMENTATION*/}
                <View className="bg-white flex gap-4 rounded-md p-3 ">
                    {HowtoCreateEvent.map(item=>(
                    <View key={item.title}>
                        <Text className="font-bold">{item.title}</Text>
                        <Text className="text-neutral-700">{item.doc}</Text>

                    </View>
                 ))}
                

                </View>
            </ScrollView>
        </View>
    )


}
const styles=StyleSheet.create({
    main:{
        flex:1,
        // backgroundColor:themeColors.lightGreen,
        paddingTop:Platform.OS ==="ios" ? 27 : StatusBar.currentHeight,
        paddingHorizontal:12,
        gap:16,

        
    },
    // input:{
    //     borderWidth:1,
    //     borderColor:themeColors.darkGray,
    //     paddingHorizontal:16,
    //     paddingVertical:8,
    //     fontSize:16,
    //     borderRadius:50,
        
    // },
    input:{
        borderWidth:1,
        borderColor:themeColors.gray300,
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:8,
        fontSize:16,
        
    },
    picker:{
        backgroundColor:themeColors.darkGray,
        borderRadius:8,
        paddingHorizontal:16,
        paddingVertical:8
     },
     submitBtn:{
        height:60,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:16,
        backgroundColor:"brown",
        borderRadius:16,
        flexDirection:"row",
       

     },
     btnText:{
        fontSize:16,
        color:"white",
        fontWeight:"bold"

     }
})