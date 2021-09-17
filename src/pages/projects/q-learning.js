import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

const markdown = raw('../../data/project_details/q-learning.md');

import Main from '../../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const q_learning = () => (
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
      <p>
        OpenAI Gym provides different environments and corresponding problems that can be solved using reinforcement
        learning (RL) techniques. Since I am absolutely fascinated by RL approach, where an agent tries to optimize
        its reward by random actions and learns which action at which state returns the maximum reward,
        I started to learn and experiment with RL and OpenAI gym.
      </p>
      <p>
        With the help of Q-Learning, the easiest methods of RL, I was able to solve the
        <a href={"https://gym.openai.com/envs/Taxi-v3/"}> Taxi </a>, as well as the
        <a href={"https://gym.openai.com/envs/FrozenLake-v0/"}> Frozen Lake</a> environment.
      </p>
      <p>
        The repo is linked <a href={"https://github.com/fxbk/Q_learning"}>here</a>.
      </p>
      <figure role="group">
      <figcaption>Examples of a trained agent on the taxi and frozen lake environment can be seen below.</figcaption>
        <figure>
          <img className="image" src={`${PUBLIC_URL}/images/projects/taxi.gif`} alt="taxi"/>
          <figcaption>Taxi example, the goal is to pick up a passenger at Y and drop them of at G</figcaption>
        </figure>
        <figure>
          <img className="image" src={`${PUBLIC_URL}/images/projects/frozen-lake.gif`} alt="fozen-lake" height={"230"}/>
          <figcaption>Frozen Lake example, the goal is to get from S to G only using the F fields. The H stands for holes
          where the agent should walk by (most of the time xD).</figcaption>
        </figure>
      </figure>

    </article>

  </Main>
);

export default q_learning;