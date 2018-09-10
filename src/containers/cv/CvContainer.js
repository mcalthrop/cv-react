import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';

const data = {
    overview: {
        paragraphs: [
            'Matt Calthrop is a highly experienced full-stack software engineer and trainer with 25 years\' experience in software analysis, development and systems integration.',
            'With an aptitude for teaching and mentoring, Matt\'s professional and conscientious approach ensures timely product delivery.',
        ],
    },
    onTheWeb: {
        items: [
            {
                title: 'Source code to my online CV',
                link: 'https://github.com/mcalthrop/cv#readme',
            },
            {
                title: 'Express server with MongoDB and authentication',
                link: 'https://github.com/mcalthrop/auth-mongo-express-node#readme',
            },
            {
                title: 'TDD implementation of JavaScript Fibonacci series function',
                link: 'https://github.com/mcalthrop/tdd-fibonacci#readme',
            },
        ],
    },
    workHistory: {
        items: [
            {
                company: {
                    title: 'RED Academy',
                    link: 'https://redacademy.com/london/',
                },
                jobTitle: 'Lead Instructor, Application Development',
                location: 'London, UK',
                duration: {
                    start: 'June 2018',
                    finish: 'present',
                },
                paragraphs: [
                    'Teaching web application development. Coaching and mentoring. Imparting what I\'ve learned over the last 25 years. Preparing students for software development in the real world.',
                ],
            },
            {
                company: {
                    title: 'Experian',
                    link: 'http://www.experian.co.uk/',
                },
                jobTitle: 'Senior Front-end Consultant',
                location: 'London, UK',
                duration: {
                    start: 'July 2017',
                    finish: 'June 2018',
                },
                paragraphs: [
                    'Building a greenfield Angular application. Requirements gathering and consolidation.',
                    'Automated unit, component and e2e testing.',
                    'On-site and remote teaching and mentoring of Angular, web components, and coding best practices.',
                ],
                skills: [
                    'Angular',
                    'Web components',
                    'TypeScript',
                    'HTML5',
                    'CSS3',
                    'Bootstrap',
                    'Webpack',
                    'Test automation',
                    'Karma',
                    'Protractor',
                    'Mocha',
                    'Chai',
                ],
            },
            {
                company: {
                    title: 'Ada College',
                    link: 'https://ada.ac.uk/',
                },
                jobTitle: 'Lecturer, Apprenticeship Programme',
                location: 'London, UK',
                duration: {
                    start: 'May 2017',
                    finish: 'June 2017',
                },
                paragraphs: [
                    'Writing and delivering course material for the 8-week launchpad of Ada\'s Apprenticeship programme for two Open University-approved modules: Software Development Lifecycle (focusing on Agile methodologies) and Testing (focusing on automation and CI).',
                ],
                skills: [
                    'Training',
                    'Mentoring',
                    'Course-writing',
                    'Coaching',
                    'Java',
                    'jUnit',
                    'Maven',
                    'Selenium',
                    'Travis',
                ],
            },
        ],
    },
    education: {
        paragraphs: [
            '1992: Australian National University, Canberra, Australia &ndash Bachelor of Computer Science',
            '1986: Christ Church Grammar School, Perth, Australia – TEE score of 402/510',
        ],
    },
    otherInterests: {
        paragraphs: [
            'I have invested in various charitable causes, including building a primary school in Nicaragua, financially supporting a family in Uganda who fosters AIDS orphans, and being involved locally in the distribution of food and basics.',
            'Additionally, I love spending time with my family, in the outdoors, mountain biking and running.',
        ],
    },
}
export class CvContainer extends Component {
    render() {
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                <Overview paragraphs={data.overview.paragraphs} />
                <OnTheWeb items={data.onTheWeb.items} />
                <WorkHistory items={data.workHistory.items} />
                <Education paragraphs={data.education.paragraphs} />
                <OtherInterests paragraphs={data.otherInterests.paragraphs} />
            </header>
        );
    }
}