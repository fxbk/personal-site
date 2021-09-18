import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../../layouts/Main';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const deep_q = () => (
  <Main
    description={"Felix Bok's personal"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">OpenAI Gym: Deep Q-Learning</h2>
            <p> Trying to solving the <a href="" >OpenAI Gym </a> environments "MountainClimber" with deep Q-Learning </p>
            <img className="image" src={`${PUBLIC_URL}/images/projects/deep-q-learning.jpg`} alt='robo peace'/>
        </div>
      </header>
      <p>
          After solving the Taxi and Frozen Lake environment with basic Q-Learning I tried to solve more advanced reinforcement
          learning (RL) problems. One of the most classical examples of RL in general is the mountain climber problem, where
          a car, placed between two hills, has to drive up the bigger hill with the catch, that the car is not strong enough
          to directly reach the finish line. Instead, it first has to build up momentum by driving forward and backward. This brings
          multiple challenges with it. First the states of the environment is now much larger as with previous environments,
          and second the agent has to remember what it did before.
      </p>
      <p>
          In order to solve this problem I used deep Q-Learning. The main idea of deep Q-Learning is to use
          a deep neural network (dnn) to model a function that maps the current state and the a part of the history of
          states onto the action space. This has the benefit over classical Q-Learning, that not all different states combinations
          has to be stored in a large matrix, that for more advanced problems can be unfeasible.
      </p>
      <p>
          After implementing the necessary code and fine tuning a rather smaller dnn I got the following result:
      </p>
      <img className="image" src={`${PUBLIC_URL}/images/projects/mountaincar.gif`} alt="mountainclimber" width="50%"/>
      <p>
          As you can see, the agent learned that it has to get momentum in order to get up the right hill, but then decides
          to break and return back to the left hill again &#x1F648;. It seems that the agent does not know its velocity or has
          a too short memory to know that it already gained momentum. I would love to continue working on this problem, but due
          to time constrains I could not finally solve it.
      </p>
      <p>
        The repo is linked <a href={"https://github.com/fxbk/deepQ"}>here</a>.
      </p>
    </article>

  </Main>
);

export default deep_q;