import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import React from 'react';

configure({ adapter: new Adapter() });

it('should load App without crashing', () => {
  shallow(<App />);
});
