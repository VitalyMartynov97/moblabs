import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Textarea from 'react-native-textarea'

export const Editpage = (props) => {
	
	
	return(
		<View style={s.editPageContainer}>
			<View style={s.formBlock}>
				<TextInput
					placeholder="Название заметки..."
					style={s.titleInput}
					value={props.title}
					onChangeText={props.handleTitle}
				/>
			</View>
			<View style={s.formBlock}>
  				<TextInput
    				multiline={true}
    				numberOfLines={4}
    				style={s.textarea}
    				placeholder="Заметка..."
    				value={props.text}
    				onChangeText={props.handleText}
    				//value={this.state.text}
    			/>
			</View>
		</View>
	)
}

const s = StyleSheet.create({
	titleInput: {

	},
	editPageContainer: {
		
	},
	formBlock: {
		padding: 5,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#fafafa'
	},
	formBlockTextArea: {

	},
	textareaContainer: {
    	height: 600,
    	padding: 5,
    	backgroundColor: '#F5FCFF',
  	},
  	textarea: {
    	textAlignVertical: 'top',  // hack android
    	height: '88%',
    	fontSize: 15,
    	color: '#333',
  	},
});