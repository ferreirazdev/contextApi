/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TasksList from './components/TaskList';
import Footer from './components/Footer';
import GlobalState from './contexts/GlobalState';

export default class App extends React.Component{
 render(){
  return(
   <GlobalState>
    <View style={styles.container}>
      <TasksList />
      <Footer />
    </View>
   </GlobalState>
  );
 }
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection:'column',
 }
});