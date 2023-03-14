import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';
import ImageOfTimofey from '../assets/image-of-timofey.jpg';

function AboutMe() {
  return (
    <div className="about-me hex-bg-pattern overflow-handler">
      <Navbar />
      <div className="navbar-spacer"></div>
      <section className="aboutme-grid-container grid-areas-container">
        <div className="photo-area">
          <img
            className="main-photo"
            src={ImageOfTimofey}
            alt="Timofey staning in a field of dry grass with a sunset hiting his face."
          />
          <div className="media-section-bg">
            <p className="find-me-text">Find me on LinkedIn and GitHub:</p>
            <div className="media-btns-div">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="par-area">
          <h1>My introduction</h1>
          <p className="paragraph-primary">
            Hello, my name is Timofey Shichalin and I'm a fourth-year BS
            Computer Science student at Portland State University. At the
            moment, I'm focusing a lot on software development as I believe that
            it's a good specialization for fresh computer scientists. I can see
            myself getting more involved in AI, ML, and data science once I've
            gained some general experience in industry, but that's not something
            I'm highly invested in at the moment.
          </p>
          <p className="paragraph-primary">
            During my time at PSU, I've gotten my hands on a number of
            technologies and learned various skills. I have a great
            understanding of OOP, functional programming, and many programming
            algorithms. I've also picked up web development, and used React and
            Tailwind to help build a web application in my capstone. I was also
            involved in some back-end work in my capstone project, such as
            managing sessions and updating the database. In my introductory web
            development class, I advanced my skills by learning to write better
            and valid code, as well as making sure that it's accessible to all
            users. I also finished the AI and ML courses; these classes felt the
            most rewarding.
          </p>
          <h1>How I came to Computer Science</h1>
          <p className="paragraph-primary">
            Unlike many other computer scientists, I was not particularly
            interested in computers or computer science. In fact, I didn't know
            what computer science even was while I was in high school. The way I
            came to realize that computer science is the perfect career path for
            me is an interesting story.
          </p>
          <p className="paragraph-primary">
            I took a statistics class in high school, and some time into the
            course, we came to a unit that required the inverse-T function on
            our graphing calculators. I realized I had a problem: TI-83
            calculators, which is what I was using, don't have the function! I
            had homework to do, so I went online to figure out what my options
            were. I came across a video that guided me to create a program
            (what's that??) on my calculator, so I followed the tutorial and
            pressed the buttons I was instructed to press. To my surprise, the
            program worked and I was able to finish my homework, but my mind was
            still stuck on the program that I copied. I went back and began to
            see logic statements, trying to make sense of it. I began to
            understand it, and the more I understood, the more excited I got. I
            researched commands and started creating my own simple programs
            (like a Pythagorean Theorem calculator). Over the next couple years,
            I made many programs and even programmed a clicker game with a shop.
            Then I graduated, still unaware of what computer science was.
          </p>
          <p className="paragraph-primary">
            My next step was college, but I didn't know what to major in. I was
            great at math and logic, so I figured electrical engineering would
            suit me well (and it paid well). As part of my degree path, I took
            an introductory programming class my first year at PSU. I was
            extremely surprised when the professor, Dr. David Ely, began
            teaching what I've been doing on my calculator, but on a computer. I
            had no idea people did this as a career (well, part of it). After a
            few weeks, I switched my major to computer science and have never
            looked back.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
