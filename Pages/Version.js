import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import GlobalWrapper from '../Components/GlobalWrapper';
import Colors from '../Constants/colors';
export default class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version_id: '1.6.12',
      release_date: '10th June 2021',
    };
  }
  render() {
    const {version_id, release_date} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <Text style={styles.heading}>Version Details</Text>
        <View style={styles.mainWrapper}>
          <Text style={styles.subHeading}>Version ID : </Text>
          <Text style={styles.subHeadingContent}>{version_id}</Text>
        </View>
        <View style={styles.mainWrapper}>
          <Text style={styles.subHeading}>Release Date : </Text>
          <Text style={styles.subHeadingContent}>{release_date}</Text>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 10,
    width: '50%',
    textAlign: 'right',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 30,
    marginTop: 30,
  },
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeadingContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 10,
    width: '50%',
    textAlign: 'left',
  },
});
