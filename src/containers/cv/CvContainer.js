import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';

export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview></Overview>
                <OnTheWeb></OnTheWeb>
                <WorkHistory></WorkHistory>
                <Education></Education>
                <OtherInterests></OtherInterests>
            </header>
        );
    }
}