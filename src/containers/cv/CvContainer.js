import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';

const data = {
    overview: {
        paragraphs: [
            'Matt Calthrop is a highly experienced full-stack software engineer and trainer with 25 years\' experience in software analysis, development and systems integration.',
            'With an aptitude for teaching and mentoring, Matt\'s professional and conscientious approach ensures timely product delivery.',
        ]
    },
    onTheWeb: {
        items: [
            {
                link: 'https://github.com/mcalthrop/cv#readme',
                title: 'Source code to my online CV',
            },
            {
                link: 'https://github.com/mcalthrop/auth-mongo-express-node#readme',
                title: 'Express server with MongoDB and authentication',
            },
            {
                link: 'https://github.com/mcalthrop/tdd-fibonacci#readme',
                title: 'TDD implementation of JavaScript Fibonacci series function',
            },
        ]
    },
    education: {
        paragraphs: [
            '1992: Australian National University, Canberra, Australia &ndash Bachelor of Computer Science',
            '1986: Christ Church Grammar School, Perth, Australia – TEE score of 402/510',
        ]
    },
    otherInterests: {
        paragraphs: [
            'I have invested in various charitable causes, including building a primary school in Nicaragua, financially supporting a family in Uganda who fosters AIDS orphans, and being involved locally in the distribution of food and basics.',
            'Additionally, I love spending time with my family, in the outdoors, mountain biking and running.',
        ]
    },
}
export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview paragraphs={data.overview.paragraphs} />
                <OnTheWeb items={data.onTheWeb.items} />
                <WorkHistory />
                <Education paragraphs={data.education.paragraphs} />
                <OtherInterests paragraphs={data.otherInterests.paragraphs} />
            </header>
        );
    }
}