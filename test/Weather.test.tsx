import { render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom'
import * as React from "react";
import '@testing-library/jest-dom'
import Weather from '../src/WeatherDisplay';
import weatherdata from './data/weatherdata';

test('in the header it renders information about the current location', () => {
  render(<Weather locationWeatherData={weatherdata} />);
  const headerElement = screen.getByRole('banner');

  const items = within(headerElement).getAllByRole('listitem');

  expect(items[0].textContent).toBe('Latitude: 52.52')
  expect(items[1].textContent).toBe('Longitude: 13.419998')
  expect(items[2].textContent).toBe('Elevation: 38')



  expect(headerElement).toBeInTheDocument();
});
