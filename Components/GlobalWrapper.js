import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  RefreshControl
} from 'react-native';

import Colors from '../Constants/colors';

import Header from '../Components/Header';
import FooterMenu from '../Components/FooterMenu';

export default class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, disableFooter, tag, navigation, refreshing, handleRefresh } = this.props;
    return (
      <>
        <SafeAreaView style={{ backgroundColor: Colors.primary }} />
        <SafeAreaView style={{ height: '100%' }}>
          <StatusBar
            backgroundColor={Colors.primaryDark}
            barStyle="light-content"
          />
          <Header />
          <View style={{ flex: 1, height: '100%' }}>
            <View style={{ flex: 7, paddingBottom: disableFooter ? 10 : 0 }}>
              <ScrollView style={{ height: '100%' }}
                refreshControl={handleRefresh != undefined &&
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                  />
                }>{children}</ScrollView>
            </View>
            {disableFooter ? (
              <SafeAreaView />
            ) : (
              <View style={{ flex: 1 }}>
                <FooterMenu tag={tag} navigation={navigation} />
              </View>
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    // flex: 1,
    // alignItems: 'center',
    // flexDirection: 'column',
    // marginTop: 50,
  },
});
