import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

const markdown = raw('../../data/project_details/q-learning.md');

import Main from '../../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const tum_di_lab = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">OpenAI Gym: Q-Learning</h2>
            <p> Solving the <a href="" >OpenAI Gym </a> environments "Taxi" and "Frozen Lake" with Q-Learning </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/q-learning.jpg`} alt='robo child'/>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default tum_di_lab;