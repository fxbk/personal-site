import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

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
          <h2 data-testid="heading">Geometrical Deep Learning on 3D Models: Classification for Additive Manufacturing</h2>
            <p> A semester project with <a href="https://www.di-lab.tum.de/tum-di-lab/"> TUM Data Innovation Lab </a>
                and <a href="https://datalab-munich.de">Volkswagen Data:Lab</a> </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/project_report_outline.jpg`} alt=''/>
        </div>
      </header>
      <p> The TUM Data Innovation Lab is a semester long project in a small interdisciplinary team of students, with the goal to
          solve a real world and data related problem from company partners. Together with four awesome students, I worked on the
          project named: Geometrical Deep Learning on 3D Models: Classification for Additive Manufacturing, given by VW Data:Lab.
      </p>

      <p> I really enjoyed working on this particular project, since it gave us the opportunity to solve really exciting problems,
          applying different data science methods scientifically and learn from great Data Scientists and Project
          Managers from Data:Lab, from researches from TUM, as well as from each other.
      </p>
      <p> You can find the final report on the website of the TUM Data Innovation Lab
          <a href="https://www.di-lab.tum.de/vergangene-projekte/ss2021-volkswagen-geometrical-deep-learning-on-3d-models-classification-for-additive-manufacturing/"> here</a>,
          and the github repository <a href="https://github.com/fxbk/Classification-for-Additive-Manufacturing"> here</a>.
      </p>
    </article>
  </Main>
);

export default tum_di_lab;