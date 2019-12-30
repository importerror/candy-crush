import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import ScoreCard from './ScoreCard';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('should load ScoreCard without crashing', () => {
  const div = document.createElement('div');
  let grid = [];
  ReactDOM.render(<ScoreCard grid={grid} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
