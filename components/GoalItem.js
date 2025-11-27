import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return(
        <View style={styles.goalContainer}>
            <Pressable onPress={props.onDeleteGoal.bind(this, props.id)} 
            android_ripple={styles.pressedItem}
            style={({pressed}) => {pressed && styles.pressedItem} // this retures "styles.pressedItem" if "pressed && styles.pressedItem" returns true, otherwise undefined is returned
        }
            > 
                <Text style={styles.goalText}>
                {props.text}
                </Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalContainer :{
        width: '100%',
        borderRadius: 4,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#8f859cff',
    },
    goalText:{
        color: '#ffffff',
        padding: 10,
        fontFamily:'Sans-Serif'
    },
    pressedItem:{
        color: "#dddddd"
    }
})