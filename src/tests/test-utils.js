import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import reducer from '../reducer/RootReducer';

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ ImageList }) {
    return <Provider store={store}>{ImageList}</Provider>;
  }

  Wrapper.propTypes = {
    ImageList: PropTypes.node.isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
