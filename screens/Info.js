import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

const Info = () => {
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection('todos');

    useEffect(() => {
        todoRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const { text } = doc.data()
                    users.push({
                        id: doc.id,
                        text,
                    })
                })
                setUsers(users)
            }
        )
    }, [])
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
        <ScrollView>
            <View style={{ flex:1, marginTop: 0}}>
            <FlatList 
                style={{height:'100%'}}
                data={users}
                numColumns={1}
                renderItem={({item}) => (
                    <Pressable
                        style={styles.container}
                    >
                        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.navigate("Info")}>
                            <Text style={styles.itemText}>{item.text}</Text>
                        </TouchableOpacity>
                    </Pressable>
                )}
            />
        </View>
        </ScrollView>  
        </SafeAreaView>
    )
}

export default Info

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#486B02',
        padding:15,
        borderradius:15,
        margin:5,
        marginHorizontal:10,
    },
    innerContainer:{
        flexDirection:'column',
    },
    itemHeading:{
        fontWeight:'bold',
        color: 'white',
        fontSize: 20
    },
    itemText:{
        fontWeight:'300'
    }
})
