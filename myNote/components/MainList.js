import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { AsyncStorage } from 'react-native';
import {Item} from './Item'

export const MainList = (props) => {
	
	
    	
    	
	return(
		<View style={s.mainListContainer}>
			<Item />
			<Item />
			<Item />
			<Item />
			<View style={s.authorContainer}>
        		<Text style={s.author}>by Vitaly Mertynov</Text>
      		</View>
		</View>
	)
}

const s = StyleSheet.create({
	mainListContainer: {

	},
	authorContainer: {
		paddingTop: 5,
		paddingBottom: 10,
    	alignItems: 'center',
  	},
  	author: {
    	color: 'grey'
  	}
})