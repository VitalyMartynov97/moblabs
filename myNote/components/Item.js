import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const Item = () => {
	return(
		<TouchableOpacity style={s.item}>
			<View>
				<Text>Sale plans</Text>
				<Text style={s.itemDate}>12.12.2020 5:43</Text>
			</View>
			<View>
				<Text>></Text>
			</View>
		</TouchableOpacity>
	)
}

const s = StyleSheet.create({
	item: {
		padding: 15,
		backgroundColor: '#fafafa',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: '#ccc',
	},
	itemDate: {
		color: '#999',
	},
})