import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { fireEvent } from '@testing-library/react';

test('Renders initial ball, strike, and hit counts', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
  getByText(/hits/i);
});

test('Renders initial ball button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Ball'));
  getByText(/Balls: 1/i);
});

test('Renders initial strike button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Strike'));
  const addStrike = getByText(/Strikes: 1/i);
  expect(addStrike).toBeInTheDocument();
});

test('Renders initial hit button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Hit'));
  const addHit = getByText(/Hits: 1/i);
  expect(addHit).toBeInTheDocument();
});

test('Renders initial Foul button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Foul'));
  const addFoul = getByText(/Strikes: 1/i);
  expect(addFoul).toBeInTheDocument();
});

test('Reset ball count', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Ball'));
  fireEvent.click(getByText('Ball'));
  fireEvent.click(getByText('Ball'));
  fireEvent.click(getByText('Ball'));
  getByText(/Balls: 0/i);
});

test('Reset strike count', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Strike'));
  getByText(/Strikes: 0/i);
});

test('Record a hit', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Ball'));
  fireEvent.click(getByText('Ball'));
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Hit'));
  getByText(/Balls: 0/i);
  getByText(/Strikes: 0/i);
  getByText(/Hits: 1/i);
});

test('Record a foul ball with no strike count', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Foul'));
  getByText(/Strikes: 1/i);
});

test('Record a foul ball without max strike count', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Foul'));
  getByText(/Strikes: 2/i);
});

test('Record a foul ball with max strike count', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Strike'));
  fireEvent.click(getByText('Foul'));
  getByText(/Strikes: 2/i);
});