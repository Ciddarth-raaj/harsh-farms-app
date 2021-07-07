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
      categories: [
        {
          category_id: 1,
          category_name: 'Fruits',
          created_at: '2021-06-22T06:36:49.000Z',
          image:
            'http://192.168.1.7:8080/uploads/fruits-9127376d-94c1-4a66-bae3-c575eddfae56.jpg',
          is_active: true,
          displaySub: false,
          subCategory: [
            {
              subcategory_id: 1,
              subcategory_name: 'test 1',
              image:
                'http://192.168.1.7:8080/uploads/fruits-9127376d-94c1-4a66-bae3-c575eddfae56.jpg',
            },
            {
              subcategory_id: 1,
              subcategory_name: 'test 1',
              image:
                'http://192.168.1.7:8080/uploads/fruits-9127376d-94c1-4a66-bae3-c575eddfae56.jpg',
            },
          ],
        },
        {
          category_id: 2,
          category_name: 'Test',
          created_at: '2021-06-28T04:33:41.000Z',
          image:
            'http://192.168.1.7:8080/uploads/test-8a85d20d-68db-4e05-a6d5-cada0f7aea87.jpg',
          is_active: true,
          displaySub: false,
        },
      ],
    };
  }

  componentDidMount() {
    // this.getCategory();
  }

  getCategory() {
    CategoryHelper.get()
      .then(data => {
        console.log(data);
        this.setState({categories: data});
      })
      .catch(err => console.log(err));
  }

  setSubCatDisplay(id, value) {
    const {categories} = this.state;

    for (let i in categories) {
      if (categories[i].category_id == id) {
        categories[i].displaySub = value;
        this.setState({categories: categories});
        break;
      }
    }
  }

  menuItem = (id, title, image, subList, displaySub) => {
    return (
      <>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setVisibility(false);
            this.props.navigation.replace('Listing', {
              category_id: id,
              category_name: title,
            });
          }}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageStyle}
          />
          <Text>{title}</Text>
          {subList != undefined && subList.length > 0 && (
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => this.setSubCatDisplay(id, !displaySub)}>
              <Text>{displaySub ? 'X' : '>'}</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        {displaySub && (
          <View style={{marginLeft: 20}}>
            {subList?.map(s =>
              this.menuItem(s.subcategory_id, s.subcategory_name, s.image),
            )}
          </View>
        )}
      </>
    );
  };

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
              {categories.map(
                c =>
                  this.menuItem(
                    c.category_id,
                    c.category_name,
                    c.image,
                    c.subCategory,
                    c.displaySub,
                  ),
                // <TouchableOpacity
                //   style={styles.listItem}
                //   onPress={() => {
                //     setVisibility(false);
                //     this.props.navigation.replace('Listing', {
                //       category_id: c.category_id,
                //       category_name: c.category_name,
                //     });
                //   }}>
                //   <Image
                //     source={{
                //       uri: c.image,
                //     }}
                //     style={styles.imageStyle}
                //   />
                //   <Text>{c.category_name}</Text>
                // </TouchableOpacity>
              )}
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
  arrow: {
    position: 'absolute',
    right: 10,
  },
});
