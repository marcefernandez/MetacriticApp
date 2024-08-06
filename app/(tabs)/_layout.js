import { Tabs } from 'expo-router';
import { HomeIcon, InfoIcon, UserIcon } from '../../components/Icons';


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000' },
                tabBarActiveTintColor: 'violet',
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Home", 
                    tabBarIcon:({ color })=> <HomeIcon color={color} /> 
                    }} 
            />
            <Tabs.Screen 
                name="about"  
                options={{ 
                    title: "About", 
                    tabBarIcon:({ color })=> <InfoIcon color={color} /> 
                    }} 
            />
            <Tabs.Screen 
                name="profileUser"  
                options={{ 
                    title: "Profile", 
                    tabBarIcon:({ color })=> <UserIcon color={color} /> 
                    }} 
            />
        </Tabs>
    )
}