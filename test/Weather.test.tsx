import { render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom'
import * as React from "react";
import '@testing-library/jest-dom'
import Weather from '../src/WeatherDisplay';
import weatherdata from './data/weatherdata';

test('in the location box there is information about the current location', () => {
  render(<Weather locationWeatherData={weatherdata} />);
  const locationHeading = screen.getByText('Location');

  const items = within(locationHeading.parentElement).getAllByRole('listitem');

  expect(items[0].textContent).toBe('Latitude: 52.52')
  expect(items[1].textContent).toBe('Longitude: 13.419998')
  expect(items[2].textContent).toBe('Elevation: 38')
});

test('in the location box there is a map of the current location', () => {
  render(<Weather locationWeatherData={weatherdata} />);
  const locationHeading = screen.getByText('Location');

  const map = within(locationHeading.parentElement).getByTitle('Location Map') as HTMLIFrameElement;


  expect(map.src).toBe('https://www.openstreetmap.org/export/embed.html?bbox=13.419998%2C52.52%2C13.419998%2C52.52&amp;layer=mapnik');
});
