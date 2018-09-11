import React, { Component } from 'react';
import { Education, OnTheWeb, OtherInterests, Overview, WorkHistory } from '../../components';
import { DataTransformation } from '../../utils/DataTransformation';
import * as contentful from 'contentful';

const space = '8nmbnmef5jq7';
const accessToken = '2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf';

export class CvContainer extends Component {
    state = {
        data: undefined,
    };

    contentfulClient = contentful.createClient({ space, accessToken });

    processEntries(entries) {
        const data = DataTransformation.transformCv(entries);

        this.setState({ data });
    }

    componentDidMount() {
        const config = {
            content_type: 'cv',
            include: 2,
        };

        this.contentfulClient.getEntries(config).then(this.processEntries.bind(this));
    }

    render() {
        const { data } = this.state;
        console.log('render(): this.state:', this.state);
        return (
            <header>
                <h1>CV: Matt Calthrop</h1>
                {data &&
                    <div>
                        <Overview paragraphs={data.overview.paragraphs} />
                        <OnTheWeb items={data.onTheWeb.items} />
                        <WorkHistory items={data.workHistory.items} />
                        <Education paragraphs={data.education.paragraphs} />
                        <OtherInterests paragraphs={data.otherInterests.paragraphs} />
                    </div>
                    ||
                    <div>
                        <p>Loading...</p>
                    </div>
                }
            </header>
        );
    }
}