import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Home from "./component/Home";
import SignUp from "./component/SignUp";

const App = () => {
  const [user,setUser] = useState('');
  const myCheckFunction = (data)=>{
    setUser(data);
    console.log(user);
  }
  return (
    <View style={styles.container}>
    {user ? <Home />:<SignUp alert = {myCheckFunction}/>}
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex:1,},
});
