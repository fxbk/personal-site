import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const countries_visited = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Map of countries I have been</Link></h2>
          <img src={`${PUBLIC_URL}/images/countries_visited.jpg`} alt="" width="700"/>
        </div>
      </header>
    </article>
  </Main>
);

export default countries_visited;