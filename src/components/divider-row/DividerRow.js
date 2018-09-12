import React from 'react';
import { FullWidthRow } from '../';
import './DividerRow.css';
import Divider from 'muicss/lib/react/divider';

export const DividerRow = () => {
    return <FullWidthRow><Divider className="dividerRow" /></FullWidthRow>;
};
