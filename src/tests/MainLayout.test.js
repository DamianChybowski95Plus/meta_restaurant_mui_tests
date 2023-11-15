import { render, screen } from '@testing-library/react';
import MainLayout from 'views/MainLayout';
import About from 'views/MainLayout/About';
import Login from 'views/MainLayout/Login';
import Menu from 'views/MainLayout/Menu';
import Reservations from 'views/MainLayout/Reservations';

test('Main Layout view tests', () => {
  render(<MainLayout />)
  // expect(screen.getByText(/Littl/i)).toBeInTheDocument();
});






