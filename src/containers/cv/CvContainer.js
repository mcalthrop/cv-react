import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';

const data = {
    overview: {
        paragraphs: [
            'Matt Calthrop is a highly experienced full-stack software engineer and trainer with 25 years\' experience in software analysis, development and systems integration.',
            'With an aptitude for teaching and mentoring, Matt\'s professional and conscientious approach ensures timely product delivery.',
        ]
    },
    otherInterests: {
        paragraphs: [
            'I have invested in various charitable causes, including building a primary school in Nicaragua, financially supporting a family in Uganda who fosters AIDS orphans, and being involved locally in the distribution of food and basics.',
            'Additionally, I love spending time with my family, in the outdoors, mountain biking and running.',
        ]
    }
}
export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview paragraphs={data.overview.paragraphs} />
                <OnTheWeb />
                <WorkHistory />
                <Education />
                <OtherInterests paragraphs={data.otherInterests.paragraphs} />
            </header>
        );
    }
}