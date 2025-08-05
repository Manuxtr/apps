import { Tabs } from "expo-router";

export default function _Layout(){
  return(
    <Tabs>
        <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Feeds",
          headerShown: false,
        }} />

        <Tabs.Screen 
        name="Profile" 
        options={{ 
            title: "Profile",
            headerShown: false,

        }} />

        <Tabs.Screen 
        name="Saved" 
        options={{ 
            title: "Saved",
            headerShown: false,

        }} />
    </Tabs>
    
  )
}