// =============================================================
//
// Name: TutorCard
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================\\
import React from 'react';
import {
  Container,
  Content,
  Card,
  Header,
  Form,
  Item,
  Input,
  Toast,
  Button,
  Icon,
  Body,
  Text,
  ListItem,
  Thumbnail,
  Right,
} from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import strings from '../Form/strings';
// import style from '../Form/style';

class TutorCard extends React.Component {
  render() {
    const { user, job, rate, rating } = this.props.tutor;
    return (
      <Content>
        <ListItem avatar>
          <Body>
            <Text>
              {user.firstName} {user.lastName}
            </Text>
            <Text>
              rate: {rate}
            </Text>
            <Text>
              rating: {rating}
            </Text>
            <Text>
              job: {job}
            </Text>
          </Body>
        </ListItem>
      </Content>
    );
  }
}

TutorCard.PropTypes = {
  tutors: PropTypes.object.isRequired,
};

export default TutorCard;
