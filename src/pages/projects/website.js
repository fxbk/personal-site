import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const website = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Own personal website</h2>
            <p> Learn more about React, JavaScript, HTML and web development </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/website.jpg`} alt='code'/>
        </div>
      </header>
      <p> In order to learn more about React, JavaScript, HTML and web development, and of course to have a nice personal
          website I have created this website. As a base I used to website from
          <a href={"https://github.com/mldangelo/personal-site"}> Micheal Dangelo</a> and added my details and updated it.
      </p>
      <p>
          You can find the corresponding github repo, <a href={"https://github.com/fxbk/personal-site"}>here</a>.
      </p>
    </article>
  </Main>
);

export default website;