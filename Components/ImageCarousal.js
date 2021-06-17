import * as React from 'react';
import {StyleSheet} from 'react-native';

import Slideshow from 'react-native-image-slider-show';

export default class ImageCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
    };

    console.log(this.props);
  }

  componentWillMount() {
    const {position} = this.state;
    const {data} = this.props;

    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: position === data.length - 1 ? 0 : position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const {position} = this.state;
    const {data} = this.props;
    return (
      <Slideshow
        dataSource={data}
        position={position}
        onPositionChanged={position => this.setState({position})}
      />
    );
  }
}

const styles = StyleSheet.create({});
