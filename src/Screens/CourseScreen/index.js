import React from 'react';
import { StyleSheet ,View, Text, ImageBackground, FlatList, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CourseScreen({route}){
    const {data} = route.params;

    const BottomNavigationBar = () => {
        return (
          <View style={styles.containerBottomBuy}>
            <View style={styles.iconContainerLocal}>
              <Icon name="local-mall" style={{color: '#FF6670', fontSize: 25}} />
            </View>
            <View style={styles.containerBuy}>
              <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
                Buy Now
              </Text>
            </View>
          </View>
        );
      };

      const CourseContentList = ({content, index}) => {
        return (
            <View style={styles.containerCourseContent}>
                <Text style={{fontSize: 40, fontWeight: 'bold', color: '#E4E7F4'}}>
                    {'0' + (index + 1)}
                </Text>
                
                <View style={{paddingHorizontal: 20, flex: 1}}>
                    <Text style={styles.textTime}>
                        {content.time}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {content.title}
                    </Text>
                </View>

                <View style={styles.containerIconPlay}>
                    <Icon name="play-arrow" style={{fontSize: 25, color: '#fff'}} />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imageCourse} source={data.image} >
                
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: 30, }}>
                    Design Thinking
                </Text>
                
                <Image resizeMode="contain"
                    style={styles.image}
                    source={require('../../../assets/bestseller.png')}
                />

                <Text style={{fontSize: 25, fontWeight: 'bold', top: 165}}>
                    {'R$ ' + data.price}
                </Text>
            </ImageBackground>
            
            <View style={{ flex: 1, marginTop: -35, backgroundColor: '#fff', borderTopRightRadius: 50, borderTopLeftRadius: 50, height: '100%'}} >
                <Text style={{ marginTop: 40, marginBottom: 20, marginHorizontal: 20, fontSize: 21, fontWeight: 'bold'}}>
                    Course Content
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.courseContent}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <CourseContentList index={index} content={item} />
                    )}
                />
            </View>
            <BottomNavigationBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',        
    },
    imageCourse: {
        height: 400,
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    containerBottomBuy: {
        height: 80,
        bottom: 0,
        zIndex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    iconContainerLocal: {
        height: 60,
        width: 70,
        backgroundColor: '#FFEDEE',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    containerBuy: {
        height: 60,
        backgroundColor: '#6E8AFA',
        flex: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCourseContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    textTime: {
        fontSize: 15,
        color: '#A0A5BD',
        fontWeight: '500',
        marginBottom: 5,
    },
    containerIconPlay: {
        width: 40,
        height: 40,
        backgroundColor: '#49CC96',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 100,
        marginBottom: 0,
    }
})
