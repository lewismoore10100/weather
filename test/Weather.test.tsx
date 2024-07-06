import { render, screen } from '@testing-library/react';
import * as React from "react";
import '@testing-library/jest-dom'
import Weather from '../src/Weather';


/**
 * @jest-environment jsdom
 */

test('react test', () => {
  render(<Weather test={"blah"} />);
  const linkElement = screen.getByRole('test');
  expect(linkElement).toBeInTheDocument();
});
