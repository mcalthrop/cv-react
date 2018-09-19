export class DataTransformation {
  static transformOverview(overviewRawData) {
    const paragraphs = overviewRawData.map((datum) => {
      return datum.fields.para;
    });

    return { paragraphs };
  }

  static transformOnTheWeb(onTheWebRawData) {
    const items = onTheWebRawData.map((datum) => {
      const link = datum.fields.url;
      const title = datum.fields.linkText;

      return { title, link };
    });

    return { items };
  }

  static transformWorkHistory(workHistoryRawData) {
    const items = workHistoryRawData.map((datum) => {
      const fields = datum.fields;
      const company = {
        title: fields.employerName,
        link: fields.employerUrl,
      };
      const jobTitle = fields.roleTitle;
      const location = fields.location;
      const duration = {
        start: fields.dateFrom,
        finish: fields.dateTo,
      };
      const paragraphs = fields.responsibilities.map((datum) => {
        return datum.fields.para;
      });
      const skills = fields.skillSummary;

      return { company, jobTitle, location, duration, paragraphs, skills };
    });

    return { items };
  }

  static transformEducation(educationRawData) {
    const paragraphs = educationRawData.map((datum) => {
      return datum.fields.para;
    });

    return { paragraphs };
  }

  static transformInterests(interestsRawData) {
    const paragraphs = interestsRawData.map((datum) => {
      return datum.fields.para;
    });

    return { paragraphs };
  }

  static transformCv(rawData) {
    const fields = rawData.items[0].fields;
    const overview = DataTransformation.transformOverview(fields.overview);
    const onTheWeb = DataTransformation.transformOnTheWeb(fields.onTheWeb);
    const workHistory = DataTransformation.transformWorkHistory(
      fields.workHistory
    );
    const education = DataTransformation.transformEducation(fields.education);
    const otherInterests = DataTransformation.transformInterests(
      fields.interests
    );

    return { overview, onTheWeb, workHistory, education, otherInterests };
  }
}
