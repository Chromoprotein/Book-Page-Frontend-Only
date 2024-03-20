import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../components/smallComponents/Title';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

test('renders the "Booksmosis" title', () => {
      render(
        <BrowserRouter>
            <Title />
        </BrowserRouter>
    );
      const titleText = screen.getByText('Booksmosis');
      expect(titleText).toBeInTheDocument();
});

it('performs snapshot testing', () => {
  const tree = renderer.create(
    <BrowserRouter>
        <Title />
    </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
