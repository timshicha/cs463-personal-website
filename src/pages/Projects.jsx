import Navbar from '../components/Navbar';
import Connect4Img from '../assets/connect-4-img.png';

function Projects() {
  return (
    <div className="projects hex-bg-pattern overflow-handler">
      <Navbar />
      <div className="projects-header-div">
        <h1 className="center-text">Projects</h1>
      </div>

      <div className="project-section">
        <h2 className="black-text">Connect 4 AI Agents</h2>
        <div className="grid-container project-areas">
          <img
            src={Connect4Img}
            className="project-img"
            alt="A finished game of Connect 4, with the words 'Agent Wins'"
          />
          <div className="project-info">
            <p className="project-desc">
              This project consists of two Connect 4 AI agents. The first agent
              uses the minimax algorithm with alpha-beta pruning, and the second
              agent uses the Monte-Carlo tree search (MCTS) algorithm. The
              project allows a user to customize agents' parameters (minimax:
              max search depth, MCTS: number of simulations) and to play against
              them. Additionally, the agents can be set to play against each
              other. For more info, see the final report found in the GitHub
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
    </div>
  );
}

export default Projects;
