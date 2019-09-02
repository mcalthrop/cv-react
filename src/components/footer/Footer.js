import React from 'react';
import { FullWidthRow } from '../';
import './Footer.css';

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FullWidthRow>
      <div className="footer mui--text-dark-hint">Copyright &copy; Matt Calthrop 2018-{currentYear}</div>
    </FullWidthRow>
  );
};
