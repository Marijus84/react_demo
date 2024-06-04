import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('App', () => {
  it('Render spinner', () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
