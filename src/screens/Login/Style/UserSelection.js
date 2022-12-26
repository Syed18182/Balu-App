import { StyleSheet, Dimensions } from "react-native";

export const styles=StyleSheet.create({
    Container:{
        flex:1,
        // backgroundColor:"red",
        // justifyContent:"center",
        // alignItems:"center",
        width:Dimensions.get('screen').width
        
    },
    TopText:{
        padding:15,
        fontSize:25,
        fontWeight:"bold",
        color:"#00488d"
    },
    SelectionHeading:{
        margin:10,
        fontSize:20,
        fontWeight:"bold",
        color:"#434d59"
    },
    Selection:{
        
        backgroundColor:"#87CEFF",
        paddingHorizontal:10,
        paddingVertical:15,
        marginHorizontal:10,
        marginVertical:5,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:15,
        
        
    },
    SelectionView:{
               // backgroundColor:"red",
                justifyContent:"center",
                //alignItems:"center"
    },
    SelectionTextHeading:{
        fontSize:20,
        textAlign:"right",
        fontWeight:"bold",
        color:"#00488d"

    },
    SelectionText:{
        fontSize:14,
        color:"#434d59",
        textAlign:"right"
    },
    Icons:{
        height:64,
        width:64
    }
})
