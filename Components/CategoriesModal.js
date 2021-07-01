import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import Colors from '../Constants/colors';

import CategoryHelper from '../helper/category';

export default class CategoriesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory() {
    CategoryHelper.get()
      .then(data => this.setState({categories: data}))
      .catch(err => console.log(err));
  }

  render() {
    const {visiblilty, setVisibility} = this.props;
    const {categories} = this.state;

    return (
      <Modal
        visible={visiblilty}
        animationType={'slide'}
        transparent={true}
        onRequestClose={() => {
          setVisibility(false);
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  setVisibility(false);
                }}>
                <Image
                  style={styles.closeImage}
                  source={require('../Assets/close-red.png')}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>Categories</Text>
              {categories.map(c => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    setVisibility(false);
                    this.props.navigation.replace('Listing', {
                      category_id: c.id,
                      category_name: c.category_name,
                    });
                  }}>
                  <Image
                    source={{
                      uri: c.image,
                    }}
                    style={styles.imageStyle}
                  />
                  <Text>{c.category_name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    height: '80%',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
    marginTop: -10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 5,
  },
  closeImage: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
});
