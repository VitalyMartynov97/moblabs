import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const Header = (props) => {
	return(
		<View style={s.headerContainer}>
			<View style={s.logoContainer}>
				<Text style={s.logoText}>myNote</Text>
			</View>
			<View style={s.actionGroup}>
				
				{
					!props.isEditPage ? 
					<TouchableOpacity onPress={props.openToNewItem}>
						<View style={s.actionItem}>
							<Text style={s.actionPlus}>+</Text>
						</View>
					</TouchableOpacity>
					:
					<View style={s.actionGroup}>
						<TouchableOpacity onPress={props.cancelEdit}>
							<View style={s.actionItem}>
								<Text style={s.actionCancel}>Отмена</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={props.saveNewItem}>
							<View style={s.actionItem}>
								<Text style={s.actionOk}>ОК</Text>
							</View>
						</TouchableOpacity>
					</View>
				}
				
			</View>
		</View>
	)
}

const s = StyleSheet.create({
	headerContainer: {
		padding: 15,
		width: '100%',
		height: 80,
		backgroundColor: '#58a0b0',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: '#666',
	},
	logoContainer: {
		paddingTop: 20,
	},
	logoText: {
		color: '#fafafa',
		fontSize: 30,
	},
	actionGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	actionItem: {
		paddingLeft: 15,
		paddingTop: 20,
		paddingRight: 10,
	},
	actionCancel: {
		fontSize: 25,
		color: '#fafafa'
	},
	actionOk: {
		fontSize: 25,
		color: '#fafafa'
	},
	actionPlus: {
		fontSize: 34,
		//fontWeight: 'bold',
		color: '#fafafa'
	},
})