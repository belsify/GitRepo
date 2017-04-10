import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
} = ReactNative

import {connect} from 'react-redux';

class Home extends Component {

    searchedPress(){
        this.props.fetchRepo('nodejs');
    }

    render(){
        return (
            <View style={{marginTop:20}}>
                <View>
                    <TouchableHighlight onPress={() => this.searchedPress()}>
                        <Text>Fetch Repo</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        searchedRepos: state.searchedRepos
    }
}

export default connect(mapStateToProps)(Home);