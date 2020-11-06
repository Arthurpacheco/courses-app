import React from 'react';
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from './Screens/HomeScreen'
import CourseScreen from './Screens/CourseScreen'

const AppStack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator 
                screenOptions={{title:null, headerStyle:{ elevation: 0 } }}
            >
                <AppStack.Screen name="Home" component={HomeScreen}
                    options={{
                        headerLeft: () => (
                            <Icon name="sort" size={25} style={{marginLeft:25}}/>
                        ),
                        headerRight: () => (
                            <Image source={require("../assets/person.png")}
                                style={{height: 40, width: 40, marginRight: 20, borderRadius: 30}}
                            />
                        )                        
                    }}
                />
                <AppStack.Screen name="Course" component={CourseScreen} 
                    options={({navigation}) => ({
                        headerTransparent: true,
                        headerLeft: () => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <Icon name="arrow-back" size={25} style={{marginLeft:20}}/>
                            </TouchableOpacity>                            
                        ),
                        headerRight: () => (
                            <Icon name="more-vert" size={25} style={{marginRight: 20}}/>        
                        )
                    })}
                />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}