import { View,Text,Image, } from "react-native";
import { aboutStyles } from "@/styles/about.styles";

export default function About(){
  return(
    <View style={aboutStyles.wrapper}>
      {/* head */}
      <View style={aboutStyles.header}>
        <Text style={aboutStyles.title}>Unipeers</Text>
      </View>
      {/* middle content */}
      <View style={aboutStyles.body}>
        
        {/* first sub group */}

        <View style={aboutStyles.aboutBlock}>
          <Text style={aboutStyles.aboutText}>Unipeers is a social media app made for tertiary institution students to connect with friends and classmates</Text>
          <Text style={aboutStyles.aboutText}>On Unipeers you will find tons of events in your socials.You can as well create your own events</Text>
          <Text style={aboutStyles.aboutText}>It gets further! you can find events in other schools right from your own campus</Text>
        </View>
        
        {/* second subgroup */}

        <View style={aboutStyles.featuresBlock}>
          <View style={aboutStyles.featureBlock}>
            <Text style={aboutStyles.featureTitle}>Events</Text>
            <Text style={aboutStyles.featureText}>Create your own Events</Text>
          </View>
          <View style={aboutStyles.featureBlock} >
            <Text style={aboutStyles.featureTitle}>Posts</Text>
            <Text style={aboutStyles.featureText}>Interact with posts</Text>
          </View>

        </View>

        {/* third sub group */}
        <View>
          <View> 
            <Text>1m+ users</Text>
          </View>
          <View>
            <Text>10m+ events</Text>
          </View>
          <View>
            <Text>100m+ posts</Text>
          </View>
        </View>
      </View>

      {/* bottom contents */}
      <View> 
        <View>
          <Text>privacy policy</Text>
          <Text>Terms of use</Text>
          <Text>Contact us</Text>
        </View>
        <Text>{new Date().getFullYear()} All Rights Reserved. Unipeers</Text>
      </View>


    </View>
  )

}