import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  KeyBoardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  Badge,
  Input,
  Card,
  Header,
  Icon,
  ListItem,
  SearchBar,
  Tile
} from 'react-native-elements'

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import firebase from 'firebase'
import db from '../config'
import MyHeader from '../components/MyHeader'
class BookDonateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedBooksList: []
    };
    this.requestRef = null
  }
  // getRequestedBookList = () => {
  //   this.requestRef = db.collection('requested_books').onSnapshot((snapshot) => {
  //     var requestedBooksList = snapshot.docs.map((doc) => {
  //       doc.data()
  //     })
  //     this.setState({
  //       requestedBooksList: requestedBooksList
  //     })
  //   })
  // }
  // componentDidMount() {
  //   this.getRequestedBookList()
  // }
  // componentWillUnmount() {
  //   this.requestRef()
  // }
  // keyExtractor = (item, index) => {
  //   index.toString()
  // }
  // renderItem = ({ item, i }) => {
  //   return (

  //     <ListItem key={i} bottomDivider>
  //       {/* // title={item.book_name}
  //       // subtitle={item.request_reason}
  //       // rightElement={<TouchableOpacity><Text>View</Text></TouchableOpacity>}
  //       bottomDivider */}
  //       <ListItem.Content>
  //         <ListItem.Title>{item.book_name}</ListItem.Title>
  //         <ListItem.Subtitle>{item.request_reason}</ListItem.Subtitle>
  //       </ListItem.Content>
  //     </ListItem>
  //   )
  // }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <MyHeader
            title='Donate Books'
            navigation={this.props.navigation}
          />
          {/* <View>
            {
              this.state.requestedBooksList.length === 0 ? (
                <View><Text>list of all requested books</Text></View>
              ) : (
                <FlatList data={this.state.requestedBooksList} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
              )
            }
          </View> */}
        </View>
      </SafeAreaProvider>
    );
  }
}

export default BookDonateScreen;
