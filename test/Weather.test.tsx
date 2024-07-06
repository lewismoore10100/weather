import { render, screen } from '@testing-library/react';
import * as React from "react";
import '@testing-library/jest-dom'
import Weather from '../src/Weather';
import weatherdata from './data/weatherdata';

test('react test', () => {
  render(<Weather locationWeatherData={weatherdata} />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
