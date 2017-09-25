// =============================================================
//
// Name: SchedulePicker
// -> Description:
//
// Author: mitramejia
// Created at: 9/4/17
//
// =============================================================
import React from 'react';
import {
  Body,
  Button,
  CheckBox,
  Col,
  Content,
  Grid,
  H1,
  H3,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Row,
  Text,
  Title,
  View,
} from 'native-base';
import { Modal } from 'react-native';
import settings from '../../../../config/settings';
import strings from './strings';
import common from '../../../../config/style';
import TimeCheckBox from './TimeCheckBox';

class SchedulePicker extends React.Component {
  _handleSubmit() {}

  _renderCheckBoxColumn(section) {
    return settings.days.map(day =>
      <TimeCheckBox
        removeTimeSelection={this.props.removeTimeSelection}
        addTimeSelection={this.props.addTimeSelection}
        value={section + day}
        key={section + day}
      />
    );
  }

  _renderDaysColumn() {
    return settings.days.map(day =>
      <Row key={day}>
        <View>
          <Text key={day}>
            {day}
          </Text>
        </View>
      </Row>
    );
  }

  renderMorningColumn() {}
  renderAfternoonColumn() {}
  renderNightColumn() {}

  render() {
    return (
      <Modal
        ref="modal"
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          // alert('Modal has been closed.');
        }}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.toggleModal}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Horario</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <H3 style={common.heading}>
            {strings.timeInputField}
          </H3>
          <Grid>
            <Row>
              <Col>
                <View>
                  <Text>
                    {`Día
                       Hora`}
                  </Text>
                </View>
                {this._renderDaysColumn()}
              </Col>
              <Col>
                <Row>
                  <View>
                    <Text>
                      {`Mañana
              8-12PM`}
                    </Text>
                  </View>
                </Row>
                {this._renderCheckBoxColumn('Mañana')}
              </Col>
              <Col>
                <Row>
                  <View>
                    <Text>
                      {`Tarde
              8-12PM`}
                    </Text>
                  </View>
                </Row>
                {this._renderCheckBoxColumn('Tarde')}
              </Col>
              <Col>
                <Row>
                  <View>
                    <Text>
                      {`Noche
                 8-12PM`}
                    </Text>
                  </View>
                </Row>
                {this._renderCheckBoxColumn('Noche')}
              </Col>
            </Row>
          </Grid>
          <Button
            style={common.primaryButton}
            rounded
            block
            onPress={this._handleSubmit.bind(this)}>
            <Text>Listo</Text>
          </Button>
        </Content>
      </Modal>
    );
  }
}

SchedulePicker.propTypes = {
  // handleSubmit: React.PropTypes.function.isRequired,
};

export default SchedulePicker;
