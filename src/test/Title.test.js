import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Title } from '../components/smallComponents/Title';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders the "Bookish" title', () => {
      render(
        <BrowserRouter>
            <Title />
        </BrowserRouter>
    );
      const titleText = screen.getByText('Bookish');
      expect(titleText).toBeInTheDocument();
});

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<BrowserRouter>
        <Title />
    </BrowserRouter>)
    
    expect(asFragment(<BrowserRouter>
        <Title />
    </BrowserRouter>)).toMatchSnapshot()
});