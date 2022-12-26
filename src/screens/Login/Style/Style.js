import { StyleSheet,Dimensions } from "react-native";

const rootStyles=StyleSheet.create(
    {
        Container:{
            backgroundColor:"#000080",
            width:"100%",
            height:"100%",
            //marginTop:"7%",
            paddingTop:"5%"
        },
        Align:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        },
        TextInput:{
        borderWidth: 1,
        height: 68,
        width: "80%",
        margin:"2.5%",
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#FFF",
    },
    Text:{
        fontSize:20,
        fontWeight:"500"
    },
    bkImg:{
        flex:1,
        height:Dimensions.get('window').height,
        width:Dimensions.get("window").width
        
    }
    }
)


export default rootStyles