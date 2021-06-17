import React from 'react';
import Header from '../Components/Header';
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
import ProductCard from '../Components/ProductCard';
import GlobalWrapper from '../Components/GlobalWrapper';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_listing: [
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
          discount: '30%',
        },
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          discount: '30%',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
        },
      ],
    };
  }
  render() {
    const {product_listing} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <View style={styles.wrapper}>
                {product_listing.map(p => (
                  <ProductCard
                    id={p.product_id}
                    name={p.product_name}
                    mrp={p.mrp}
                    sp={p.sp}
                    image={p.item_image}
                    item_quantity={p.item_quantity}
                    discount={p.discount}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
    // alignItems: 'center',
    // flexDirection: 'column',
    // marginTop: 50,
  },
});
