
import { View } from "react-native"
// calculate screen width
// const screenWidth = Dimensions.get("window").width;

export function Seperator({h,w}){
  return(
    <View style={{height:h,width:w,backgroundColor:"transparent"}}></View>
  )
}