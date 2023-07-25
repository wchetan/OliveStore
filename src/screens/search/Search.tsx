import {View, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import colors from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/fonts';
import {cStyles} from '../../theme/commonstyles';
import {PressableText} from '../../components/Buttons';

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.gray8,
    padding: 16,
    marginVertical: 8,
    color: colors.gray8,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  resultContainer: {marginVertical: 8},
  historyContainer: {marginVertical: 8},
});

const list = ['men', 'women', 'kids', 'footwear'];

const Search = () => {
  const [searchKey, setSearchKey] = useState<string>('');

  //@todo chore: add debounce method
  const newResults = list.filter(lItem => {
    if (searchKey.length > 0) {
      return lItem.toLowerCase().includes(searchKey.toLowerCase());
    }
    return false;
  });

  return (
    <View style={s.container}>
      <Header />
      <Text variant={'headlineLarge'} text={'Search'} />
      <TextInput
        value={searchKey}
        onChangeText={text => {
          setSearchKey(text);
        }}
        style={s.searchInput}
      />
      {newResults?.length > 0 && (
        <View style={s.resultContainer}>
          <Text variant="titleLarge" text={'Results'} />
          {newResults.map(historyItem => (
            <PressableText
              onPress={() => {
                // @todo add navigation List Screen with result prop
              }}
              title={historyItem}
              style={[cStyles.color_gray4, cStyles.mv4, {paddingVertical: 4}]}
            />
          ))}
        </View>
      )}
      {searchKey === '' && (
        <View style={s.historyContainer}>
          <Text
            variant="titleMedium"
            text={'History'}
            style={cStyles.color_gray6}
          />
          {['Men Tshirt', 'Football'].map(historyItem => (
            <Text
              variant="bodySmall"
              text={historyItem}
              style={[cStyles.color_gray4, cStyles.mv4]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Search;
