const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools', 'Data Science'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spacy',
    competency: 3,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Deep Learning',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Machine Learning',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'PyTorch / PyTorchlightning',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scrum',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Plotly',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'ggplot',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Reinforcement Learning',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Computer Vision',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Natural Language Processing',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Clustering',
    competency: 4,
    category: ['Data Science', 'Python'],
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
