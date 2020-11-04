import Axios from 'axios';
import Modal from "react-native-modal";
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button,ScrollView } from 'react-native';
import JobItem from '../components/JobItem';
import { jobs } from "../styles"
import HTML from 'react-native-render-html';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Jobs = (props) => {
    const { selectedLanguage } = props.route.params;
    const [data, setData] = useState([]);
    const [modalFlag, setModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");


    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?page=1&search=${selectedLanguage.toLowerCase()}`);
        console.log(response.data)
        setData(response.data)

    }



    useEffect(() => {
        fetchData()
    }, [])


    const onJobSelect = (job) => {
        setModalFlag(true)
        setSelectedJob(job)
    }

    const renderJobs = ({ item }) => {
        return (
            <JobItem job={item} onSelect={() => onJobSelect(item)} />
        )

    }

    const onJobSave= async()=>{
        let savedJobList=await AsyncStorage.getItem("@SAVED_JOBS");
        savedJobList=savedJobList==null? []: JSON.parse(savedJobList);
        const updatedJobList=[...savedJobList,selectedJob]
        await AsyncStorage.setItem("@SAVED_JOBS",JSON.stringify(updatedJobList))

    }

    return (
        <View style={{flex:1}}>
            <Text>{selectedLanguage}</Text>
          
            <FlatList
                data={data}
                renderItem={renderJobs}
                keyExtractor={(_, index) => index.toString()}
            />

            <TouchableOpacity style={{
                backgroundColor:"blue",
                padding:10,
                borderRadius:10,
                // position:"absolute"
               
            }} onPress={()=>props.navigation.navigate("SavedJobs")}>
                <Text>Saved Jobs</Text>
            </TouchableOpacity>
        
        
            <Modal isVisible={modalFlag} onBackdropPress={()=>setModalFlag(false)}>
                <View style={jobs.modalBackground}>
                    <View style={{ borderBottomWidth: 2, borderColor: "#bdbdbd" }}>
                        <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
                        <Text>{selectedJob.location}/{selectedJob.title}</Text>
                        <Text>{selectedJob.company}</Text>
                    </View>
                    <ScrollView style={jobs.jobDesc}>
                        <HTML html={selectedJob.description} />
  
                    </ScrollView>
                    <Button title="Save" onPress={onJobSave} />
                </View>
            </Modal>
        </View>
    )
}

export { Jobs }
