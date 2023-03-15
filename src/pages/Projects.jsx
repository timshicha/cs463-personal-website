import React from 'react';
import Navbar from '../components/Navbar';
import Connect4Img from '../assets/connect-4-img.png';
import BlurpImg from '../assets/blurp-img.png';
import TicTacToeImg from '../assets/tic-tac-toe-img.png';
import MazeSolverImg from '../assets/maze-solver-img.png';

function Projects() {
  return (
    <div className="hex-bg-pattern overflow-handler">
      <Navbar />
      <h1 className="page-header center-text">Projects</h1>
      <div className="project-section">
        <h2 className="black-text">Connect 4 AI Agents (Bots)</h2>
        <div className="projects-grid-container project-areas">
          <img
            src={Connect4Img}
            className="project-img"
            alt="A finished game of Connect 4, with the words 'Agent Wins'"
          />
          <div className="project-info">
            <p className="project-desc">
              I created this project for my AI class, and it consists of two
              Connect 4 AI agents (bots). The first agent uses the minimax
              algorithm with alpha-beta pruning, and the second agent uses the
              Monte-Carlo tree search (MCTS) algorithm. The project allows a
              user to customize agents' parameters (minimax: max search depth,
              MCTS: number of simulations) and to play against them.
              Additionally, the agents can be set to play against each other.
              For more info, see the final report found in the GitHub
              repository.
            </p>
            <a
              className="github-button"
              href="https://github.com/timshicha/connect_4_ai"
              target="_blank"
              rel="noreferrer"
            >
              View code on Github
            </a>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="black-text">Blurp (Relationship Map Tool)</h2>
        <div className="projects-grid-container project-areas">
          <img
            src={BlurpImg}
            className="project-img"
            alt="A simple relationship map that was created using Blurp."
          />
          <div className="project-info">
            <p className="project-desc">
              Blurp is a web application that I worked on with my software
              engineering capstone team. Users can create relationship maps and
              express how they feel about their different relationships. A user
              may choose to log into Google to save their maps to a database, or
              they can download and import them later. We built this app with
              the aid of React on the front end, and used NodeJS (with Express)
              in the back end.{' '}
              <i>
                Please note that this app still has bugs and has cleanups that
                need to be done.
              </i>
            </p>
            <a
              className="github-button"
              href="https://github.com/pdx-blurp/blurp-frontend"
              target="_blank"
              rel="noreferrer"
            >
              View front end code on Github
            </a>
            <a
              className="github-button"
              href="https://github.com/pdx-blurp/blurp-backend"
              target="_blank"
              rel="noreferrer"
            >
              View back end code on Github
            </a>
            <a
              className="github-button"
              href="https://blurp-pdx.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Open Blurp (Website)
            </a>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="black-text">Tic-Tac-Toe Bot</h2>
        <div className="projects-grid-container project-areas">
          <img
            src={TicTacToeImg}
            className="project-img"
            alt="A screenshot of a tic-tac-toe board while the game is still in progress."
          />
          <div className="project-info">
            <p className="project-desc">
              This is a simple web application that I made on my own when I was
              first learning web development a couple years ago. The code
              quality is very poor and the app has very limited accessibility.
              Nonetheless, this was a great feat for me at the time, not only in
              terms of web development, but also that I was finally able to come
              up with my own algorithm for creating a perfect tic-tac-toe bot (I
              later learned I implemented a messy minimax algorithm).
            </p>
            <a
              className="github-button"
              href="https://replit.com/@TimShicha/tictactoe#index.html"
              target="_blank"
              rel="noreferrer"
            >
              View Code in Replit
            </a>
            <a
              className="github-button"
              href="https://tictactoe.timshicha.repl.co"
              target="_blank"
              rel="noreferrer"
            >
              Open Game (Website)
            </a>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="black-text">Maze Solver</h2>
        <div className="projects-grid-container project-areas">
          <img
            src={MazeSolverImg}
            className="project-img"
            alt="A screenshot of a maze with the correct path highlighted."
          />
          <div className="project-info">
            <p className="project-desc">
              This was one of my very first web applications that I made in my
              own time after learning how to modify elements using Javascript.
              The code quality is poor, but this is one of my few projects that
              I cherish. I was able to apply the breadth-first algorithm that I
              learned in a different class and see it work graphically. The app
              allows the user to select two points and build walls between them.
              The app then finds the shortest path between the two selected
              points and highlights it.
            </p>
            <a
              className="github-button"
              href="https://replit.com/@TimShicha/Maze-Solver#index.html"
              target="_blank"
              rel="noreferrer"
            >
              View Code on Replit
            </a>
            <a
              className="github-button"
              href="https://maze-solver.timshicha.repl.co"
              target="_blank"
              rel="noreferrer"
            >
              Open Maze Solver (Website)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
