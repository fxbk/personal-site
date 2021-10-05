import React from 'react';
import { Link } from 'react-router-dom';


import Main from '../../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const lux_challenge = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Lux AI Kaggle Challenge</h2>
            <p> Competing in the <a href="https://www.kaggle.com/c/lux-ai-2021" >Lux AI Kaggle Challenge </a> to apply RL methods </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/lux-challenge.png`} alt='lux challenge banner'/>
        </div>
      </header>
      <p>
        Together with <a href={"https://www.linkedin.com/in/erik-steiger/"}> Erik Steiger </a>, a good friend and fellow
        student of mine, we are currently working on the Kaggle Challenge "Lux AI 2021". The goal of the challenge is to
        train agents with reinforcement learning methods to enable them to survive in a given environment and doing
        it better than a opponent. The environment is basically a board game where two players compete about
        limited resources, building cities and fight against the upcoming dark night.
      </p>
      <p>
        The Challenge goes until the 7th of December. Stay tuned for more details and our final position in the
        leaderboard.
      </p>
    </article>

  </Main>
);

export default lux_challenge;