import React, {useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'modules/testApi/actionCreators';
import {CALENDAR} from 'constants/screens';

const Home = ({navigation, resultList, fetchTestApiStart}) => {
  useEffect(() => {
    fetchTestApiStart();
  }, []);
  console.log('result', resultList);
  return (
    <View style={styles.container}>
      <Button
        title="test me"
        onPress={() => {
          navigation.push(CALENDAR);
        }}
      />
    </View>
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
