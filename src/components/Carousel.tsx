import React from 'react';
import {ScrollView} from 'react-native';

interface ICarousel {
  data: Array<string>;
  renderItem(item: string, index: number): JSX.Element;
  style: {};
}

const Carousel = (props: ICarousel): JSX.Element => {
  const {data, renderItem, style} = props;
  return (
    <ScrollView
      pagingEnabled
      horizontal
      decelerationRate={'fast'}
      contentInset={{bottom: 0, top: 0}}
      {...props}
      style={
        ([style],
        {
          backgroundColor: 'red',
        })
      }
      snapToAlignment={'center'}>
      {data.map((item, index) => {
        return renderItem(item, index);
      })}
    </ScrollView>
  );
};

export default Carousel;
