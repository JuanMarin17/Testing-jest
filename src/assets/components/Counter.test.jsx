import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter component', () => {

  test('muestra el contador inicial en 0', () => {
    render(<Counter />);

    const value = screen.getByTestId('count-value');
    expect(value).toHaveTextContent('0');
  });

  test('incrementa el contador al hacer click', () => {
    render(<Counter />);

    const button = screen.getByText('Incrementar');
    fireEvent.click(button);

    const value = screen.getByTestId('count-value');
    expect(value).toHaveTextContent('1');
  });

});