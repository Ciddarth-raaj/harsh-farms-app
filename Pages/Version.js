import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import GlobalWrapper from '../Components/GlobalWrapper';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';
export default class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version_id: '1.0.0 - Alpha',
      release_date: '8th July, 2021',
    };
  }
  render() {
    const {version_id, release_date} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <View style={{marginBottom: 10, marginTop: 30}}>
          <Text style={Styles.heading}>Version Details</Text>
        </View>

        <View style={styles.mainWrapper}>
          <Text style={styles.subHeading}>{'Release Date'}</Text>
          <Text style={{marginHorizontal: 5}}>{':'}</Text>
          <Text style={styles.subHeadingContent}>{release_date}</Text>
        </View>

        <View style={styles.mainWrapper}>
          <Text style={styles.subHeading}>{'Version ID'}</Text>
          <Text style={{marginHorizontal: 5}}>{':'}</Text>
          <Text style={styles.subHeadingContent}>{version_id}</Text>
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
    fontSize: 18,
    color: Colors.primary,
  },

  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeadingContent: {
    fontSize: 18,
    color: Colors.secondaryLight,
    textAlign: 'left',
  },
});
