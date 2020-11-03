import Axios from 'axios'
import React,{useState,useEffect}from 'react'
import { View, Text,FlatList, Modal } from 'react-native';
import JobItem from '../components/JobItem';


const Jobs = (props) => {
    const {selectedLanguage}=props.route.params;
    const [data,setData]=useState([]);
    const [modalFlag,setModalFlag]=useState(false)


    const fetchData=async()=>{
        const response=await Axios.get(`https://jobs.github.com/positions.json?page=1&search=${selectedLanguage.toLowerCase()}`);
        // console.log(response.data)
        setData(response.data)
       
    }



    useEffect(()=>{
            fetchData()
    },[])


    const onJobSelect=()=>{
        setModalFlag(true)
    }

    const renderJobs=({item})=>{
        return(
            <JobItem job={item} onSelect={onJobSelect}/>
        )
                
    }

    return (
        <View>
            <Text>{selectedLanguage}</Text>
            <FlatList
            data={data}
            renderItem={renderJobs}
            keyExtractor={(_,index)=>index.toString()}
        
            />

            <Modal visible={modalFlag}>
                <Text>Selemalr</Text>
            </Modal>
        </View>
    )
}

export {Jobs}
