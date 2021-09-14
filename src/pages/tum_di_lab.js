import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

const markdown = raw('../data/project_details/tum-di-lab.md');

import Main from '../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const tum_di_lab = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Geometrical Deep Learning on 3D Models: Classification for Additive Manufacturing</h2>
            <p> A semester project with <a href="https://www.di-lab.tum.de/tum-di-lab/"> TUM Data Innovation Lab </a>
                and <a href="https://datalab-munich.de">Volkswagen Data:Lab</a> </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/project_report_outline.jpg`} alt=''/>
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