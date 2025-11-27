import {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Modal, Image} from 'react-native';


export default function GoalInput(props){
    // handle the change of text in the goal input field
    const [enteredGoalText, setEnteredGoalText] = useState(''); // the entered text inside the text input

    
    function goalInputHandler(enteredText){ // this function activates whenever text inside the text field of the goal changes
        setEnteredGoalText(enteredText); // set enteredGoalText equal to enteredText
    };

    function onCloseButtonPress(){ // function is called when the close button is pressed
        props.setVisible(false)
    }

    return (
        <Modal
            animationType='slide'
            visible={props.visible}
        >
            <View style = {styles.inputContainer}>

                <Image 
                source = {require("../assets/images/goal.png")}
                style={styles.goalImage}/>
                <TextInput 
                placeholder="Your Course Goal!"
                style={styles.textInputFieldStyle}
                onChangeText={goalInputHandler} // what function to call when the text changes
                value={enteredGoalText}
                placeholderTextColor="#575757ff"
                
                />
                <View style={styles.buttonsContainer}>
                    <View style={{margin: 30}}> 
                    <Button title="Close" onPress={onCloseButtonPress}
                    color="#f31282"/>
                    </View>
                    <View style={{margin: 30}}>
                    <Button 
                    title="Add Goal" 
                    color="#a26fe3ff"
                    onPress={()=>{if(enteredGoalText!==''){props.onAddGoal(enteredGoalText); setEnteredGoalText(''); onCloseButtonPress()}}} // what function to call when a new goal is added
                    // here I add the goal by calling the function that adds a new goal object to the array of goals, and takes the text saved in enteredGoalText as
                    // the title of the goal. Also, it resets the text input field to be ready to recieve a new text. Also, when a new goal is added, the modal is
                    // switched to invisible automatically
                />
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create(
    {
        inputContainer:{
            flexDirection: "column",
            justifyContent : 'center',
            alignItems: 'center',
            flex: 1,
            padding: 30,
            backgroundColor:'#311b6b',
        },
        textInputFieldStyle:{
            borderColor: '#e4d0ff',
            backgroundColor:"#e4d0ff",
            color:"#120438",
            borderWidth: 1,
            borderRadius: 6, 
            marginRight: 10, 
            width: '100%',
            padding:20,
        },
        buttonsContainer:{
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center',
        },
        goalImage:{
            width: 100,
            height:100,
            margin:40,
        }
        
    }
)