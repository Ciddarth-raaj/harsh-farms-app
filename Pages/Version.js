import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import GlobalWrapper from '../Components/GlobalWrapper';

import Colors from '../Constants/colors';
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
        <Text style={styles.heading}>Version Details</Text>

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
    // fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 30,
    marginTop: 30,
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
