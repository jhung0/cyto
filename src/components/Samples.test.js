import React from 'react';
import ReactDOM from 'react-dom';
import Samples from './Samples';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Samples pathnames={['foo.png']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
