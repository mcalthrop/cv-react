import React, { Component } from 'react';
import { Overview } from '../../components/overview';

export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview></Overview>
            </header>
        );
    }
}