import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {

    const courseContent = [
        {time: '5:35 mins', title: 'Welcome to the course'},
        {time: '7:00 mins', title: 'Desing thinking - Intro'},
        {time: '10:20 mins', title: 'Desing thinking Process'},
        {time: '4:20 mins', title: 'Customer Perspective'},
    ]

    const courses = [
        {
            name: 'UX Design',
            totalCourse: '25',
            image: require('../../../assets/image1.png'),
            price: '50,00',
            star: '4.3',
            students: '10',
            courseContent,
        },
        {
            name: 'Marketing',
            totalCourse: '20',
            image: require('../../../assets/image2.png'),
            price: '50,00',
            star: '4.1',
            students: '55',
            courseContent,
        },
        {
            name: 'Photography',
            totalCourse: '10',
            image: require('../../../assets/image3.png'),
            price: '50,00',
            star: '4.3',
            students: '10',
            courseContent,
        },
        {
            name: 'Business Photography',
            totalCourse: '7',
            image: require('../../../assets/image4.png'),
            price: '50,00',
            star: '4.2',
            students: '35',
            courseContent,
        },
    ]

    const CourseCard = ({course}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Course', {data: course})}
            >
                <ImageBackground
                    source={course.image}
                    style={styles.imageCard}
                >
                    <Text style={styles.textNameCourse}>
                        {course.name}
                    </Text>
                    <Text style={{color: '#8F95B2', fontWeight: '600'}}>
                        {course.totalCourse + ' Courses'}
                    </Text>
                </ImageBackground>
          </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            
            <View style={{marginTop: 20}}>
                <Text style={styles.textHi}>Hey Arthur,</Text>
                <Text style={styles.textChooseCourse}>Find a course you want to learn</Text>
            </View>
            
        
            <View style={styles.searchBar}>
                <Icon name="search" size={30}/>
                <TextInput style={{ fontSize: 18, marginLeft: 5}} placeholder="Search for anything"/>
            </View>

            <View style={{
                paddingVertical: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Categories</Text>
                <Text style={{fontSize:18, fontWeight:'bold', color:'#6E8AFA'}}>See All</Text>            
            </View>
            
            <View style={{flex:1}}>
                <FlatList showsVerticalScrollIndicator={false} numColumns={2}
                    data={courses} keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <CourseCard course={item}/>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    textHi: {
        fontSize:28,
        fontWeight: 'bold',
    },
    textChooseCourse:{
        fontSize: 22,
        color: '#61688B'
    },
    searchBar: {
        height: 60,
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#F5F5F7',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageCard: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        width: windowWidth / 2 - 30,
        height: windowHeight / 3,
        paddingTop: 25,
        paddingLeft: 20,
        borderRadius: 15,
        overflow: 'hidden',
    },
    textNameCourse: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginTop: -13
    }
});
