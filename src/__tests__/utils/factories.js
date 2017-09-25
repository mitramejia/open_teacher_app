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

Factory.define('user').sequence('id').attrs({
  email: 'test@test.com',
  firstName: 'Test',
  lastName: 'User',
  imageUrl: Faker.image.imageUrl(),
});

Factory.define('tutor').sequence('id').attrs({
  rating: 500,
  rate: 5,
});

export default Factory;
