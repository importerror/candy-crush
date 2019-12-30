import Adapter from 'enzyme-adapter-react-16';
import GridBoard from './GridBoard';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('should load GridBoard without crashing', () => {
  const div = document.createElement('div');
  let grid = [];
  let handleClick = function() {};
  ReactDOM.render(<GridBoard grid={grid} handleClick={handleClick} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
