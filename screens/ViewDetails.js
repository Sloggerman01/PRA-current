import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenHeight ,ScreenWidth} from 'react-native-elements/dist/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class ViewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mrn: this.props.route.params.patientDetails['mrn'],
      name: this.props.route.params.patientDetails['name'],
      age: this.props.route.params.patientDetails['age'],
      height:
        this.props.route.params.patientDetails['height'],
        weight: this.props.route.params.patientDetails['weight'],
        bpm: this.props.route.params.patientDetails['bpm'],
        bloodgroup: this.props.route.params.patientDetails['bloodgroup'],
    };
    console.log(this.state.mrn)
  }

  

  render() {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
        <ImageBackground
        source={require("../assets/ViewDetailsBackground.png")}
        style = {styles.bg}
        >
      <View
      style = {styles.titleContainer}
      >
      <Text
      
      style = {styles.title}>
        {this.state.name}
      </Text>
      <Text
      
      style = {styles.title}>
        {this.state.name}
      </Text>
      </View>

      <View style = {styles.container}>
        <TouchableOpacity>
        <Ionicons name={'add-circle'} size={80} color={'#41C264'} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="water" size={80} color='red'/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="time" size={80} color='blue'/>
        </TouchableOpacity>

      
      </View>

      {/* <Text style={{alignSelf:'center',fontSize:'bold',fontSize:25,}}>Patients</Text>
          <ScrollView style={{ flex: 1 }}>
          <View style={{height:ScreenHeight,width:ScreenWidth,alignContent:'center',alignItems:'center'}}>
            <Text style={{alignSelf:'center',fontSize:'bold',fontSize:25,}}>Patients</Text>
            <View style={{height:ScreenHeight/1.8,width:ScreenWidth-20, padding:10,backgroundColor:'skyblue',borderRadius:30}}>
<Text style={{alignSelf:'center',fontSize:20}}>{this.state.name} </Text>
<Text style={{alignSelf:'flex-start',fontSize:20}}>{this.state.height} kg(weight)</Text>
<Text style={{alignSelf:'flex-end',fontSize:20}}>{this.state.weight} cms(height)</Text>
            </View>

            <View style={{flexDirection:'row',height:ScreenHeight/3.5, width:ScreenWidth, margin:10,padding:10}}>
              <View style={{backgroundColor:'blue',width:ScreenWidth/2,borderRadius:30}}>
                <Text></Text>
              </View>
            </View>
          </View>

          </ScrollView> */}
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  headerImg: {
    width: '90%',
    height: 60,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#62A001',
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 150
  },
  bg: {
    width: 400,
    height: 400,
    alignSelf: "center",
    resizeMode: "contain",
  },
  titleContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: width-100,
    height: 200,
    alignSelf: "center",
    margin: 30,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: 'black',
    paddingRight: 0,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center",
    justifyContent: "center",
  }
});
