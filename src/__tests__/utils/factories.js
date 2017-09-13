// =============================================================
//
// Name: users
// -> Description:
//
// Author: mitramejia
// Created at: 9/10/17
//
// =============================================================

import { Factory } from 'rosie';
import Faker from 'faker';
import * as _ from 'lodash';
import { getRandomInt } from '../../api/utils';

export const User = new Factory().sequence('id').attr({
  email: Faker.internet.email(),
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
});

export const Subject = new Factory().sequence('name').attr({
  name: 'Materia',
});

export function generate(size, factory) {
  const amount = getRandomInt(1, size);
  return _.fill(new Array(amount), factory.build());
}
