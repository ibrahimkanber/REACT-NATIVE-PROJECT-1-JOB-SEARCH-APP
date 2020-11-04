import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { jobItem } from '../styles';

const JobItem = (props) => {
 
    return (
        <TouchableOpacity onPress={props.onSelect}  style={jobItem.container}  >
            <Text style={jobItem.jobname}>{props.job.title}</Text>
            <Text>{props.job.type} / {props.job.location}</Text>
        </TouchableOpacity>
    )
}

export default JobItem
