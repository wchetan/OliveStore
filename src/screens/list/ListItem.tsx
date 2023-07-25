import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {ListItemProps} from './list.type';
import NetworkImage from '../../components/NetworkImage';
import colors from '../../theme/colors';
import Text from '../../components/Text';
const {width, height} = Dimensions.get('screen');

const ListItem = ({
  id,
  image,
  averageColor,
  title,
  description,
  discount,
  price,
  ratings,
}: ListItemProps): JSX.Element => {
  return (
    <TouchableOpacity key={id} activeOpacity={0.8}>
      <NetworkImage
        source={{uri: image}}
        style={{height: height * 0.3, width: width * 0.5 - 18}}
        placeholderColor={averageColor}
      />
      <View style={{marginVertical: 8}}>
        <Text
          variant="bodyLarge"
          style={{
            marginBottom: 4,
          }}
          text={title}
        />
        <Text
          variant="bodySmall"
          style={{
            marginBottom: 4,
          }}
          text={description}
        />

        {/* <Text
          style={{
            fontSize: 12,
            color: colors.gray4,
            letterSpacing: 0.125,
            marginBottom: 4,
            maxWidth: width * 0.5 - 18,
          }}
          numberOfLines={2}>
          {description}
        </Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text
            variant="bodySmall"
            style={{
              marginBottom: 4,
            }}
            text={`${discount ? price * (discount / 100) : price}`}
          />
          <Text
            variant="bodySmall"
            style={{
              marginBottom: 4,
            }}
            text={`${price}`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
