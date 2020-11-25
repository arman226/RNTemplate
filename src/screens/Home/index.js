import React, {useEffect, useState} from 'react';
import {Text, Button, StyleSheet, Animated} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'modules/testApi/actionCreators';
import {CALENDAR} from 'constants/screens';
import Header from 'components/Header';

const Home = ({navigation, resultList, fetchTestApiStart}) => {
  const {event, ValueXY} = Animated;
  const [scrollY, setScrollY] = useState(new ValueXY());
  useEffect(() => {
    fetchTestApiStart();
  }, []);
  console.log('result', resultList);
  return (
    <>
      <Header title="test" scrollY={scrollY} />
      <Button
        title="test me"
        onPress={() => {
          navigation.push(CALENDAR);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

const select = ({testApi}) => {
  const resultList = testApi.data;
  const {isLoading} = testApi;
  return {resultList, isLoading};
};

const actions = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(select, actions)(Home);
