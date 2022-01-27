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
        student of mine, we competed on the Kaggle Challenge "Lux AI 2021". The goal of the challenge was to
        train agents with reinforcement learning methods to enable them to survive in a given environment and doing
        it better than an opponent. The environment is basically a board game where two players compete about
        limited resources, building cities and fight against the upcoming dark night.
      </p>
      <p>
        Our idea was to use a Graph Neural Network (GNN) and the <a href="https://arxiv.org/abs/1707.06347">Proximal Policy Optimization (PPO) algorithm</a>.
        The idea was based on the paper
        <a href="https://arxiv.org/pdf/2107.08387.pdf"> TRAIN ON SMALL, PLAY THE LARGE: SCALING UP BOARD GAMES WITH ALPHAZERO AND GNN</a>,
        where each node in the GNN represents one position on a board game. As the authors showed, the benefit of using GNN is the
        possibility of training the node neural network first on a small board game, learning first basic strategies, and then to
        scale up the board and let the agent learn more complex strategies.
      </p>
      <p>
        We implemented our approach, using PyTorch and RLlib. The repository can be found
        <a href="https://github.com/cerebro-ai/lux-ai-2021"> here</a>.
      </p>
      <p>
        Unfortunately, we fell into a really common RL fallacy.
        A most common problem with RL is that the code mostly fails silently, meaning that the code is running but the
        agent does not learn something. Additional, depending on the complexity of the environment, RL takes quite some
        computational time to start learning something.

        Therefore, it is recommended to test the code on simpler RL problems, f.e. one provided
        by OpenAI gym and to do a lot of experiments while stepwise increasing the complexity of the algorithm.
        Unfortunately, we have to learn this the hard way... while we did some tests in the beginning of the project, we
        at some point were too focused on our idea, that we missed out on testing our idea. And when we noticed that
        the challenge was almost over.
      </p>
      <p>
        In summary, we really enjoyed working on our first Kaggle challenge and we learned quite a lot.
        This will definitely not be our only programming project that we will do.
      </p>
    </article>

  </Main>
);

export default lux_challenge;