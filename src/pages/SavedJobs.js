import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text,FlatList } from 'react-native'
import JobItem from '../components/JobItem'

const SavedJobs = (props) => {
    const [joblist, setJoblist] = useState([])
    AsyncStorage.getItem("@SAVED_JOBS").then(res => {
        const list =JSON.parse(res)
        setJoblist(list)
    })
    return (
        <View>
            <Text>Saved Jobs</Text>
            <FlatList 
            data={joblist}
            renderItem={({item})=> <JobItem job={item}/>}
            />
        </View>
    )
}

export { SavedJobs }
