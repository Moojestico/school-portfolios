const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://school-portfolios-zeta.vercel.app',
  title: 'RV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ricky Villaverde',
  role: 'Data Engineer',

  description:
    'Information Technology graduate with experience in data engineering, data analysis, and software development. Proficient in Python, SQL, and google cloud platforms. Passionate about leveraging data to drive insights and solve complex problems.',
  resume: 'RVResume2026.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/ricky-villaverde/',
    github: 'https://github.com/Moojestico',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SFTP to GCS Data Pipeline',
    description:
      'Designed and implemented an automated pipeline to transfer client data from SFTP to Google Cloud Storage using Airflow (Cloud Composer), improving storage scalability and reducing VM disk usage issues.',
    stack: ['GCP', 'Airflow', 'Python', 'GCS'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Client Consumer Data Automation',
    description:
      'Built a Cloud Run-based pipeline to decrypt, process, and load large encrypted transaction files into BigQuery, replacing a manual workflow and improving reliability and performance.',
    stack: ['GCP', 'Cloud Run', 'BigQuery', 'Python'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Data Standardization & ETL Pipeline Cleanup',
    description:
      'Standardized datasets and resolved inconsistencies across ETL pipelines to improve data quality and reporting accuracy.',
    stack: ['BigQuery', 'Google Sheets', 'Looker Studio', 'SQL'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'BigQuery',
  'Google Cloud Platform (GCP)',
  'Cloud Composer (Airflow)',
  'Cloud Run',
  'Google Cloud Storage (GCS)',
  'SQL',
  'Python',
  'ETL Pipelines',
  'Data Modeling',
  'Data Studio',
  'Google Sheets',
  'API Integration',
  'AppScripts',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rickyvillaverde3@gmail.com',
}

export { header, about, projects, skills, contact }
