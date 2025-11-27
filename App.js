import React from 'react';
import {View, StyleSheet,FlatList, Pressable, Text, Button} from 'react-native';
import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

// starting with capital first character "G" has the convention is saying that
// this is a custom component that returns JSX
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [courseGoals, setCourseGoals]  = useState([]); // the list of all goals
    const [modalIsActive, setModalIsActive] = useState(false); // boolean to whether activate the modal or not

    function addGoalHandler(enteredGoalText){ // adding a goal object to the array of goals
        setCourseGoals((currentCourseGoals) => 
            [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
            // React passes "courseGoals" to "currentCourseGoals"
            // (the parameter of the arrow function) automatically
            // When a function reference is passed to "setCourseGoals", which is a setter
            // function to the "courseGoals" state, React will pass the current state
            // to that function and call it. Then, the function should return
            // the new state so that the state setter function updates the state.
    };

    function deleteGoalHandler(id){
        console.log("DELETE");
        console.log(id);
        setCourseGoals(currentCourseGoals => {
            // each `goal` is an object like { text: '...', id: '...' }
            // so compare `goal.id` (not `goal.item.id`)
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    function startAddGoalHandler(){
        setModalIsActive(true);
    }

    return (
        <>
        <StatusBar style='light'/>
        <View style={styles.pageContainer}>
                <GoalInput onAddGoal = {addGoalHandler} visible = {modalIsActive} setVisible={setModalIsActive}/>
            <View style={styles.goalsContainer}>
                <Pressable  onPress={startAddGoalHandler 
                    // button to open the modal of entering a goal and adding it
                }
                style={styles.addGoalButton}
                >
                    <Text>
                        Add a new Goal df
                    </Text> 
                </Pressable>
                <FlatList // displaying the goals inside the array "courseGoals"
                    data={courseGoals}
                    renderItem={(itemData) => (
                        <GoalItem text={itemData.item.text} onDeleteGoal={deleteGoalHandler} id = {itemData.item.id}/>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        padding: 40,
        paddingTop: 80,
        flexDirection: "column",
        justifyContent:'space-evenly',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor:'',
    },
    addGoalButton:{
        width:'100%',
        backgroundColor:'#ae86dfff',
        height:'8%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,


    },
    goalsContainer:{
        flexDirection: "colomn",
        // justifyContent: 'top',
        alignContent: 'space-evenly',
        marginBottom: 50,
        width: '100%',
        height: '100%',
        flex: 25
        
    }
})