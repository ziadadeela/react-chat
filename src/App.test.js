import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {ADD_MESSAGE} from "./redux/message/types";
import {ADD_USER} from "./redux/user/types";
import {addMessage} from "./redux/message/actions";
import {addUser} from "./redux/user/actions";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



describe('adding a message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something';
    const author = 'Me';
    const action = {
      type: ADD_MESSAGE,
      payload:{
        message: message,
        author: author,
        id: 1
      }
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})


describe('adding a user', () => {
  it('should create an action to add a user with id 1', () => {
    const user = 'Mark'
    const action = {
      type: ADD_USER,
      payload:{
        name: user,
        id: 2
      }
    }
    expect(addUser(user)).toEqual(action)
  })
})
