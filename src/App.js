import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAy5wvmx2fcZ3IsDAUSMpJAgSRzZAlmdVw',
            authDomain: 'authentication-d3b5e.firebaseapp.com',
            databaseURL: 'https://authentication-d3b5e.firebaseio.com',
            projectId: 'authentication-d3b5e',
            storageBucket: 'authentication-d3b5e.appspot.com',
            messagingSenderId: '34187400256'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false }); 
            }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }        
    }
    render() {
        return (
            <View>
                <Header>Authentication</Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
