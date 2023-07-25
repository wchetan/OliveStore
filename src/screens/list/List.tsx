import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import Text from '../../components/Text';
import ListItem from './ListItem';
import {ListItemProps} from './list.type';
import {FilterType} from '../../utils/utils.types';
// import {processFilters, processSortBy} from '../../utils/helpers';
import OliveModal from '../../components/Modal';
import Header from '../../components/Header';
import {CloseIcon, FilterIcon, SortIcon} from '../../components/AppIcon';
import {PressableIcon} from '../../components/Buttons';
import colors from '../../theme/colors';
import Selectable from '../../components/Selectable';
import {cStyles} from '../../theme/commonstyles';
import {SORT_BY_MAP} from '../../constants';
import {products_list_fake_data} from '../../../fake_data';
const {width, height} = Dimensions.get('screen');

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    gap: 16,
  },
  modalContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sortItemTitle: {
    marginVertical: 4,
    color: colors.gray4,
  },
  modifierContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray2,
  },
  vFilter: {
    minWidth: width * 0.2,
    borderRightWidth: 1,
    borderColor: colors.gray2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vSort: {
    minWidth: width * 0.2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const xData = products_list_fake_data;

const List = (): JSX.Element => {
  const [filtersArray, setFiltersArray] = useState<Array<FilterType> | []>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortModalVisible, setSortModalVisible] = useState<boolean>(false);
  // const [list, setList] = useState<Array<ListItemProps> | []>([]);

  let list: Array<ListItemProps> | [] = xData;

  // @todo write a better filter logic

  // list = useMemo(() => {
  //   if (filtersArray.length === 0 && sortBy === null) {
  //     return xData;
  //   }
  //   //if only sort is selected
  //   if (sortBy !== null) {
  //     const sortedArr: Array<ListItemProps> = processSortBy(xData, sortBy);
  //     return sortedArr;
  //   }
  //   //if filter & sort is selected
  //   if (filtersArray.length > 0 && sortBy !== null) {
  //     const filterResult = processFilters(list, filtersArray);
  //     return processSortBy(filterResult, sortBy);
  //   }
  // }, [sortBy, filtersArray, list]);

  return (
    <View style={s.container}>
      <Header />
      <View style={s.listContainer}>
        <Text variant={'headlineLarge'} text={'Footwear'} />
        <View style={s.modifierContainer}>
          <View style={s.vFilter}>
            <PressableIcon
              leftIcon={<FilterIcon />}
              title="Filter"
              onPress={() => {
                setFiltersArray([
                  {
                    key: 'price',
                    condition: '<',
                    value: 500,
                  },
                ]);
              }}
              style={[cStyles.mh8]}
            />
          </View>
          <View style={s.vSort}>
            <PressableIcon
              leftIcon={<SortIcon />}
              title="Sort"
              onPress={() => {
                setSortModalVisible(true);
              }}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem key={item.id} {...item} />}
        numColumns={2}
        columnWrapperStyle={s.columnWrapperStyle}
      />
      {/* Modal View */}
      <OliveModal visible={sortModalVisible} setVisible={() => {}}>
        <View>
          <View style={s.modalContent}>
            <Text variant={'titleMedium'} text={'Sort By'} />
            <PressableIcon leftIcon={<CloseIcon />} onPress={() => {}} />
          </View>
          {SORT_BY_MAP.map(sbm => {
            return (
              <Selectable
                title={sbm}
                onSelect={() => {
                  setSortBy(sbm);
                  setSortModalVisible(!sortModalVisible);
                }}
                marked={sortBy === sbm}
              />
            );
          })}
        </View>
      </OliveModal>
    </View>
  );
};

export default List;
