import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {sum} from './Components/test'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it returns the sum of two numbers' , () => {
  expect(sum(3,2)).toBe(5);
})

test('it shows the title', () => {
  const { getByText } = render(<App />)
  getByText("Woman's Word Cup Player Google Search Rank");
})
