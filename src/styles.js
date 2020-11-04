import { StyleSheet, Dimensions } from "react-native";


export const topicItem = StyleSheet.create({
    container: {
        padding: 12,
        margin: 7,
        borderRadius: 6
    },
    text: {
        fontWeight: "bold",
        color: "white",

    }
}
)
export const introduction = StyleSheet.create({
    banner: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height / 3
    },

}
)

export const jobs=StyleSheet.create({
    modalBackground:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10
    },
    jobTitle:{
        fontSize:20,
        fontWeight:"bold",
    
    },
    jobDesc:{
       padding: 5,
       height:Dimensions.get("window").height/4
    }

})

export const jobItem = StyleSheet.create({
    container: {
      padding: 12,
      margin: 7,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#bdbdbd'
    },
    jobname: {
      fontWeight: 'bold',
    },
  });