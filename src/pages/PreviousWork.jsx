import { useState } from 'react';
import Navbar from '../components/Navbar';
import CaretUp from '../assets/caret-up.png';
import CaretDown from '../assets/caret-down.png';

function PreviousWork() {
  const [expanded, setExapnded] = useState(null);

  const toggleExpand = (target) => {
    if (expanded === target) {
      setExapnded(null);
    } else {
      setExapnded(target);
    }
  };

  return (
    <div className="previous-work hex-bg-pattern overflow-handler">
      <Navbar />
      <h1 className="page-header center-text">Previous Work</h1>
      <div className="prev-work-div">
        <h2 className="black-text">Skills:</h2>
        <ul className="skills-list">
          <li>C++</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>Object Oriented Programming</li>
          <li>Functional Programming</li>
          <li>FE Web Development (React)</li>
          <li>Problem solving</li>
          <li>Strong understanding of algorithms</li>
          <li>Working in a team</li>
        </ul>
        <h2 className="black-text">Upper division courses taken:</h2>
        <ul className="work-purple-box">
          <li className="work-item">
            <input
              type="image"
              src={expanded === 'CS 441' ? CaretUp : CaretDown}
              alt="Expand CS 441 AI Section"
              className="caret-img"
              onClick={() => toggleExpand('CS 441')}
            />
            <h3 className="course-title">CS 441 - Artificial Intelligence</h3>
            <div
              className={
                'work-expanded-sec ' +
                (expanded === 'CS 441' ? 'expanded-sz' : '')
              }
            >
              <p className="topics-text">Main topics learned:</p>
              <ul className="topics-list">
                <li>Reinforcement learning learning</li>
                <li>Search algorithms</li>
                <li>Genetic algorithms</li>
                <li>Adversarial search</li>
              </ul>
            </div>
          </li>
          <li className="work-item">
            <input
              type="image"
              src={expanded === 'CS 445' ? CaretUp : CaretDown}
              alt="Expand CS 445 ML Section"
              className="caret-img"
              onClick={() => toggleExpand('CS 445')}
            />
            <h3 className="course-title">CS 445 - Machine Learning</h3>
            <div
              className={
                'work-expanded-sec ' +
                (expanded === 'CS 445' ? 'expanded-sz' : '')
              }
            >
              <p className="topics-text">Main topics learned:</p>
              <ul className="topics-list">
                <li>Supervised learning</li>
                <li>Unsupervised learning</li>
                <li>Dimensionality reduction</li>
              </ul>
            </div>
          </li>
          <li className="work-item">
            <input
              type="image"
              src={expanded === 'CS 486' ? CaretUp : CaretDown}
              alt="Expand CS 486 Introduction to Database Management"
              className="caret-img"
              onClick={() => toggleExpand('CS 486')}
            />
            <h3 className="course-title">
              CS 486 - Introduction to Database Management
            </h3>
            <div
              className={
                'work-expanded-sec ' +
                (expanded === 'CS 486' ? 'expanded-sz' : '')
              }
            >
              <p className="topics-text">Main topics learned:</p>
              <ul className="topics-list">
                <li>Schema design/refinement</li>
                <li>Data organization</li>
                <li>Query optimization</li>
              </ul>
            </div>
          </li>
          <li className="work-item">
            <input
              type="image"
              src={expanded === 'CS 494P' ? CaretUp : CaretDown}
              alt="Expand CS 494P Internetworking Protocols Section"
              className="caret-img"
              onClick={() => toggleExpand('CS 494P')}
            />
            <h3 className="course-title">
              CS 494P - Internetworking Protocols
            </h3>
            <div
              className={
                'work-expanded-sec ' +
                (expanded === 'CS 494P' ? 'expanded-sz' : '')
              }
            >
              <p className="topics-text">Main topics learned:</p>
              <ul className="topics-list">
                <li>Network structure</li>
                <li>HTTP</li>
                <li>Routing</li>
              </ul>
            </div>
          </li>
          <li className="work-item">
            <input
              type="image"
              src={expanded === 'CS 469/470' ? CaretUp : CaretDown}
              alt="Expand CS 469/470 Software Engineering Capstone"
              className="caret-img"
              onClick={() => toggleExpand('CS 469/470')}
            />
            <h3 className="course-title">
              CS 469/470 - Software Engineering Capstone
            </h3>
            <div
              className={
                'work-expanded-sec ' +
                (expanded === 'CS 469/470' ? 'expanded-sz' : '')
              }
            >
              <p className="topics-text">Main topics learned:</p>
              <ul className="topics-list">
                <li>Planning and organizing</li>
                <li>Working in a team</li>
                <li>FE Web development (React)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PreviousWork;
