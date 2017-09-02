// =============================================================
//
// Name: Queries-test
// -> Description:
//
// Author: mitramejia
// Created at: 8/28/17
//
// =============================================================

import { userQuery, allSubjectsQuery, createAccount, signinUser } from '../api/graphql/queries';

it('userQuery should be the correct query', () => {
  expect(userQuery).toMatchSnapshot();
});

it('createAccount should be the correct query', () => {
  expect(createAccount).toMatchSnapshot();
});

it('signinUser should be the correct query', () => {
  expect(signinUser).toMatchSnapshot();
});

it('allSubjectsQuery should be the correct query', () => {
  expect(allSubjectsQuery).toMatchSnapshot();
});
