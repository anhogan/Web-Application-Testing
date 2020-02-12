import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

test('Renders initial ball count', () => {
  const { getByText } = rtl.render(<App />);
  const ball = getByText(/balls/i);
  expect(ball).toBeInTheDocument();
});

test('Renders initial strike count', () => {
  const { getByText } = rtl.render(<App />);
  const strike = getByText(/strikes/i);
  expect(strike).toBeInTheDocument();
});

test('Renders initial hit count', () => {
  const { getByText } = rtl.render(<App />);
  const hit = getByText(/hits/i);
  expect(hit).toBeInTheDocument();
});

test('Renders initial ball button', () => {
  const { getByText } = rtl.render(<App />);
  fireEvent.click(getByText('Ball'));
  const addBall = getByText(/Balls: 1/i);
  expect(addBall).toBeInTheDocument();
});

test('Renders initial strike button', () => {
  const { getByText } = rtl.render(<App />);
  fireEvent.click(getByText('Strike'));
  const addStrike = getByText(/Strikes: 1/i);
  expect(addStrike).toBeInTheDocument();
});

test('Renders initial hit button', () => {
  const { getByText } = rtl.render(<App />);
  fireEvent.click(getByText('Hit'));
  const addHit = getByText(/Hits: 1/i);
  expect(addHit).toBeInTheDocument();
});

test('Renders initial Foul button', () => {
  const { getByText } = rtl.render(<App />);
  fireEvent.click(getByText('Foul'));
  const addFoul = getByText(/Strikes: 1/i);
  expect(addFoul).toBeInTheDocument();
});