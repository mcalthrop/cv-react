import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export const FullWidthRow = ({ children }) => {
    return <Row><Col md="12">{children}</Col></Row>;
};
