import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Butto, Alert } from 'react-native'
import {Header} from './components/Header'
import {Editpage} from './components/EditPage'
import {MainList} from './components/MainList'
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
  const [isEditPage, setIsEditPage] = useState(false)
  const changePage = () => setIsEditPage(!isEditPage)
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [text, setText] = useState('')
  const handleText = (text) => setText(text)
  const handleTitle = (title) => setTitle(title)
  const [data, setData] = useState([])

  const openToNewItem = () => {
    setId(Math.random(0,3333).toString())
    setText('')
    setTitle('')
    setIsEditPage(!isEditPage)
  }

  const saveNewItem = () => {
     if(text == '' || title == ''){
       Alert.alert("Ошибочка", "Заполнены не все поля") 
     } 
    else{
      let str = id+' '+title+' '+text
      Alert.alert('Успешно сохранено, наверно', str)
      setIsEditPage(!isEditPage)
    }
    
  }
  
  const cancelEdit = () => {
    setId('')
    setText('')
    setTitle('')
    Alert.alert('Редактирование/втавка отменена')
    setIsEditPage(!isEditPage)
  }
  return (
    <View style={s.container}>
      <Header 
        changePage={changePage} 
        isEditPage={isEditPage}
        openToNewItem={openToNewItem}
        saveNewItem={saveNewItem}
        cancelEdit={cancelEdit}
      />
      {
        isEditPage 
        ?
        <Editpage 
          title={title}
          id={id}
          text={text}
          handleText={handleText}
          handleTitle={handleTitle}

        />
        :
        <MainList data={data} />
      }
      
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ccc'
  },
});
