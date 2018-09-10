import React from 'react';
import { OnTheWebItem } from '../';

export const OnTheWeb = () => {
    return (
        <section>
            <h2>On the web</h2>
            <ul>
                <li>
                    <OnTheWebItem
                        link="https://github.com/mcalthrop/cv#readme"
                        title="Source code to my online CV"
                    />
                </li>
                <li>
                    <OnTheWebItem
                        link="https://github.com/mcalthrop/auth-mongo-express-node#readme"
                        title="Express server with MongoDB and authentication"
                    />
                </li>
                <li>
                    <OnTheWebItem
                        link="https://github.com/mcalthrop/tdd-fibonacci#readme"
                        title="TDD implementation of JavaScript Fibonacci series function"
                    />
                </li>
            </ul>
        </section>
    );
};