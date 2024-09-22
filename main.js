import $ from "jquery";
import "./style.css";

$("#app").html(`
  <header class="header-container">
      <nav class="navbar-container">
        <section class="navbar-logo">
          <div class="logo">||</div>
          <h1>Ennu</h1>
        </section>
        <ul class="navbar-item">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-container">
      <section class="home" id="home">
        <sectionh class="home-container">
          <img src="./images/hero.jpg" alt="girl with laptop" />
          <section class="home-content">
            <h1>
              Hi there!👋 <br />I'm
              <span class="style-name">Nurfadillah Umar</span>
            </h1>
            <p>
              An enthusiastic learner <br />
              exploring <span class="style-name"> &lt;/code&gt;</span>
            </p>
            <div class="line"></div>
            <section class="tech-stack">
              <h6>current favorite tech stack:</h6>
              <div class="icon-container">
                <img
                  class="icon"
                  src="./images/icons/python.svg"
                  alt="python icon"
                />
                <img
                  class="icon"
                  src="./images/icons/javascript.svg"
                  alt="javascript icon"
                />
                <img
                  class="icon"
                  src="./images/icons/tailwind.svg"
                  alt="tailwind icon"
                />
                <img
                  class="icon"
                  src="./images/icons/react.svg"
                  alt="react icon"
                />
              </div>
            </section>
          </section>
        </sectionh>
      </section>
      <section class="about" id="about">
        <section class="about-container">
          <h2>
            I’m currently a student at Hasanuddin University, majoring in
            Informatics Engineering.
          </h2>
          <p>
            Lately, I’ve been diving deep into the world of web development,
            with a special focus on mastering databases. At the same time, I’m
            dedicated to honing my problem-solving skills by rigorously studying
            algorithms and data structures.
          </p>
        </section>
      </section>
      <section class="project" id="project">
        <h1>Some projects I've built</h1>
        <section class="project-container">
          <div class="project-content">
            <p>
              This To-Do List website was built using JavaScript, React,
              Tailwind and Redux to help users efficiently manage and track all
              their tasks.
            </p>
            <a href="https://github.com/fadillahumarr/TodoList.git"
              ><input type="button" value="See more"
            /></a>
          </div>
          <img src="./images/todolist.png" alt="Todo List" />
        </section>
        <section class="second project-container">
          <div class="project-content">
            <p>
              Movie Buffs Corner is built with JavaScript, React, and Tailwind
              CSS to provide a modern and interactive platform for exploring
              popular movies via the TMDB API.
            </p>
            <a href="https://github.com/fadillahumarr/Movie-Buffs-Corner.git"
              ><input type="button" value="See more"
            /></a>
          </div>
          <img src="./images/movie.png" alt="Movie website" />
        </section>
        <section class="third project-container">
          <div class="project-content">
            <p>
              This restaurant website is designed with HTML, CSS, and JavaScript
              to deliver a modern and engaging online presence.
            </p>
            <a href="https://github.com/fadillahumarr/Restaurant.git"
              ><input type="button" value="See more"
            /></a>
          </div>
          <img src="./images/restaurant.png" alt="Restaurant" />
        </section>
      </section>
      <section class="contact" id="contact">
        <h1>Let's Connect & Collaborate</h1>
        <p>
          Have cool project or an existing project, and think I can help you
          with it? Feel free to contact me!
        </p>
        <section class="list-contact">
          <a href="https://github.com/fadillahumarr"
            ><img src="./images/icons/github.svg" alt="Github icon"
          /></a>
          <a href=""
            ><img src="./images/icons/linkedin.svg" alt="LinkedIn icon"
          /></a>
          <a href="">
            <img src="./images/icons/instagram.svg" alt="Instagram icon"
          /></a>
        </section>
      </section>
    </main>
    <footer class="footer">
      <p>2024 ©Nurfadillah Umar</p>
    </footer>
`);