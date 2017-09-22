// =============================================================
//
// Name: model
// -> Description:
//
// Author: mitramejia
// Created at: 8/25/17
//
// =============================================================

import { gql } from 'react-apollo';

export const createAccount = gql`
  mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const userQuery = gql`
  query {
    user {
      id
      firstName
      lastName
      email
    }
  }
`;

export const signinUser = gql`
  mutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;

export const allSubjectsQuery = gql`
  query {
    allSubjects {
      id
      name
    }
  }
`;

export const currentUserAndAllSubjects = gql`
  query {
    user {
      id
      firstName
      lastName
      email
    }
    allSubjects {
      id
      name
    }
  }
`;

export const allTutors = gql`
  query {
    allTutors {
      user {
        id
        firstName
        lastName
        email
      }
      rate
      rating
      description
    }
  }
`;

export const StudentHomeScreenData = gql`
  query {
    user {
      id
      firstName
      lastName
      email
    }
    allSubjects {
      id
      name
    }
    allTutors {
      user {
        id
        firstName
        lastName
        email
      }
      rate
      rating
      description
    }
  }
`;
