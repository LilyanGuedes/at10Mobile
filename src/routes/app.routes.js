import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import{Home} from '../pages/home'
import{Feed} from '../pages/feed'
import{Profile} from '../pages/profile'
import{Settings} from '../pages/settings'

const {Navigator, Screen}= createBottomTabNavigator();

export function AppRoutes() {

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home} options={{tabBarIcon: () =>{
                    return <Feather name="home" size={25} color="#000" />
                }}}/>
                <Screen name="Feed" component={Feed} options={{tabBarIcon: () =>{
                    return <Feather name="rss" size={25} color="#000" />
                }}}/>
                <Screen name="Profile" component={Profile} options={{tabBarIcon: () =>{
                    return <Feather name="user" size={25} color="#000" />
                }}}/>
                <Screen name="Settings" component={Settings} options={{tabBarIcon: () =>{
                    return <Feather name="settings" size={25} color="#000" />
                }}}/>
            </Navigator>
         </NavigationContainer>
    )
}