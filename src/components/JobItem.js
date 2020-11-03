import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const JobItem = (props) => {
    console.log(props.job)
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <Text>{props.job.title}</Text>
        </TouchableOpacity>
    )
}

export default JobItem
