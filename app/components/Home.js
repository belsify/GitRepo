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
    constructor(props){
        super(props);
        this.state = {
            searching: false,
            repo_name : ''
        };
    }

    searchedPress(){
        this.setState({searching: true});
        this.props.fetchRepo(this.state.repo_name).then(()=>{
            this.setState({searching: false});
        });
    }

    repos(){
        return Object.keys(this.props.searchedRepos).map(key => this.props.searchedRepos[key]);
    }

    render(){

        return (
            <View style={styles.scene}>
                <View style={styles.searchSection}>
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Search Repo Here'
                        onChangeText={ (repo_name)=>this.setState({repo_name}) }
                        value={this.state.repo_name}
                    />
                    <TouchableHighlight onPress={() => this.searchedPress()} style={styles.searchButton}>
                        <Text>Fetch Repos</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollSection}>
                    {!this.state.searching && this.repos().map((repo)=>{
                        return (
                            <View key={repo.id}>
                                <Text style={styles.repoName}>{repo.full_name}</Text>
                                <Text style={styles.repoDesc}>{repo.description}</Text>
                                <Image source={{ uri:repo.owner.avatar_url }} style={styles.repoImage}/>
                            </View>
                        );
                    })}
                    { this.state.searching ? <Text>Searching...</Text> : null }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scene:{
        flex: 1,
        marginTop: 20,
    },
    searchInput: {
        flex: 0.7,
    },
    searchButton: {
        flex: 0.3
    },
    searchSection:{
        height: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row'
    },
    scrollSection: {
        flex: 0.8,
        padding: 10
    },
    repoImage: {
        height: 150,
        marginBottom: 30,
        borderWidth: 1,
        padding: 10,

    },
    repoName: {
        height: 30
    },
    repoDesc: {
        height: 20
    }

});

function mapStateToProps(state){
    return {
        searchedRepos: state.searchedRepos
    }
}

export default connect(mapStateToProps)(Home);