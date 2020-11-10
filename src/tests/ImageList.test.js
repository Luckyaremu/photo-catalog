/* eslint-disable */
import React from 'react';
import { render, screen } from './test-utils';
import ImageList from '../../containers/ImageList';
import ApiCall from '../components/ApiCall';

test('Renders the connected list with initialState', () => {
  ApiCall().then(data => {
    render(<ImageList />, data);
    expect(screen.getByText(/The One Where All The Images Calls Appairs/i)).toBeInTheDocument();
  }).catch(() => {

  });
});
