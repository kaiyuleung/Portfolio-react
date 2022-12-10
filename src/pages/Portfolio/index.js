import React from 'react'
import './style.css'
import { LargeCards } from '../../components'
import Accordion from 'react-bootstrap/Accordion';

export default function Portfolio() {
  return (
    <div className='container-fluid '>
      <div className='row my-2'>
        <div className='col'>
          <h2>Projects from Futureproof Coding Camp, 2022</h2>
          <p>The coding camp is structured into 4 laps with different topics. <br/>Each lap consists of 1 week of supervised learning, 1 week of individual assignment and 1 week of group project.</p>
          <LargeCards 
            pic = {[
              { name: "cover", src: require('../../img/portfolio/lap1_cover.png') },
              { name: "main", src: require('../../img/portfolio/lap1_main.png') },
              { name: "post", src: require('../../img/portfolio/lap1_post.png') },
              { name: "giphy", src: require('../../img/portfolio/lap1_giphy.png') },
              { name: "demo", src: require('../../img/portfolio/lap1_demo.gif') },
              { name: "layout", src: require('../../img/portfolio/lap1_layout.png') },

            ]}
            title = "Lap 1 - Ice Cream Journal"
            links = {{
              fedl: "https://programmingoverloadjournal.netlify.app/",
              bedl: "https://futureproof-journal.herokuapp.com/",
              ferl: "https://github.com/kaiyuleung/Lap_1_Project_Programming_Overload",
              berl: "https://github.com/Ahmed78613/journal-backend",
            }}
            team = "Programming-Overload"
            members = {[
              { name: "Ahmed Muhammed", url: "https://github.com/Ahmed78613" },
              { name: "Dave Siddle", url: "https://github.com/siddav83" },
              { name: "Kai Yu Leung", url: "https://github.com/kaiyuleung" },
              { name: "Kornelia Oles", url: "https://github.com/kroles1" },
              { name: "Thamiem Noori", url: "https://github.com/thamiem-n" },
            ]}
            >
            <p>This is a project produced by a team of 5 in 4 days, it was to develop a simple website for user to visit and post journal entries.</p>
            <p>This is to demonstrate the ability to make a good use of the technologies that we have learnt up to the point, <em>HTML</em>, <em>CSS</em> and <em>Vanilla JS</em>, as well as the technology we had to explore, <em>Giphy</em>.</p>
            <p>The user can react with the post with a text comment, also reactions such as a gif and a selection of emojis</p>
            <p>As we had not learn about database, data were sent and saved in the backend within .json files</p> 
            <p>In this project, my role was a frontend developer, making sure all entities are correctly fetched and rendered from the backend.</p>
          </LargeCards>

          <LargeCards 
            pic = {[
              { name: "cover", src: require('../../img/portfolio/lap2_cover.png') },
              { name: "profile", src: require('../../img/portfolio/lap2_profile.png') },
              { name: "add-habit", src: require('../../img/portfolio/lap2_add-habit.png') },
              { name: "habit", src: require('../../img/portfolio/lap2_habit.png') },
              { name: "leaderboard", src: require('../../img/portfolio/lap2_leaderboard.png') },
              { name: "demo", src: require('../../img/portfolio/lap2_demo.gif') },
              { name: "layout", src: require('../../img/portfolio/lap2_layout.png') },
            ]}
            title = "Lap 2 - Monastery Habit Tracker"
            links = {{
              fedl: "https://monasteri.netlify.app/",
              bedl: "https://monasteri.herokuapp.com/",
              ferl: "https://github.com/kaiyuleung/Lap_2_Project_Monastery",
              berl: "https://github.com/kaiyuleung/Lap_2_Project_Monastery",
            }}
            team = "Monastery"
            members = {[
              { name: "Ahmed Muhammed", url: "https://github.com/Ahmed78613" },
              { name: "Dave Siddle", url: "https://github.com/siddav83" },
              { name: "Kai Yu Leung", url: "https://github.com/kaiyuleung" },
              { name: "Oliver Catelan-Robinson", url: "https://github.com/oscr1998" },
              { name: "Peter Edwards", url: "https://github.com/GimmeDaLute" },
            ]}
            >
            <p>This is a project produced by a team of 5 in 4 days, it was to develop a simple website for user to track their habits.</p>
            <p>This is to built on top of the knowledge we have with <em>HTML</em>, <em>CSS</em> and <em>JavaScript</em>, and keep all entries in a database, deployed with <em>MongoDB/Mongoose</em>. Authorisation and Authentication is also applied in this project.</p>
            <p>The user can register and account and login with us. The password is encrypted and stored in our database. The user then can add, remove and update a habits anytime, an external streak checking module is called to see if a target is met by the custom deadline.</p>
            <p>The back-end follows the <em>Model-View-Controller</em> design pattern, alongside with <em>jwt</em> & <em>Bcrypt</em> middle-layer and connected to a <em>MongoDB</em> database.</p>
            <p>In this project, my role was a backend developer, ensuring database and API are in a good condition, ready to fetch usable, clean and precise data to the frontend client</p>
          </LargeCards>

          <LargeCards 
            pic = {[
              { name: "cover", src: require('../../img/portfolio/lap3_cover.png') },
              { name: "create-game", src: require('../../img/portfolio/lap3_create-game.png') },
              { name: "local-game", src: require('../../img/portfolio/lap3_local-game.png') },
              { name: "lobby", src: require('../../img/portfolio/lap3_lobby.png') },
              { name: "online-game", src: require('../../img/portfolio/lap3_online-game.png') },
              { name: "leaderboard", src: require('../../img/portfolio/lap3_leaderboard.png') },
              { name: "local-demo", src: require('../../img/portfolio/lap3_local-demo.gif') },
              { name: "online-demo", src: require('../../img/portfolio/lap3_online-demo.gif') },
              { name: "Frontend-layout", src: require('../../img/portfolio/lap3_Frontend-layout.png') },
              { name: "project-layout", src: require('../../img/portfolio/lap3_project-layout.png') },
              { name: "data-layout", src: require('../../img/portfolio/lap3_data-layout.png') },
            ]}
            title = "Lap 3 - AGTK Quiz"
            links = {{
              fedl: "https://agtk-quiz.netlify.app",
              bedl: "https://lap-3-quiz-backend.herokuapp.com/",
              ferl: "https://github.com/georgewood749/lap-3-quiz-project",
              berl: "https://github.com/georgewood749/lap-3-backend",
            }}
            team = "AGTK"
            members = {[
              { name: "Aimy Varghese", url: "https://github.com/Ahmed78613" },
              { name: "George Wood", url: "https://github.com/siddav83" },
              { name: "Thamiem Noori", url: "https://github.com/thamiem-n" },
              { name: "Kai Yu Leung", url: "https://github.com/kaiyuleung" },
            ]}
            >
            <p>This is a project produced by a team of 4 in 4 days, it was to develop a simple online quiz game in React and Socket.io</p>
            <p>This is to create an app using <em>React</em> and <em>React-Redux-Toolkit</em>, as well as make it interactable with other user using <em>Socket.io</em>. The quiz contents are fetch from the <em>Open Trivia DB</em>, and all results are kept and deployed with <em>MongoDB</em> database.</p>
            <p>The user can create a game with customs settings, and able to play locally with a second player, or online with players that has the same room ID. All results are posted to our database and shown in the leaderboard page.</p>
            <p>The back-end ultilised <em>Socket.io</em> to communicate with multiple frontend connections, as well as a simple API to post user results.</p>
            <p>In this project, I was a full-stack developer, built the database and API, as well as ultilised socket.io in both end to achieve the multiplayer functionality.</p>
          </LargeCards>

          <LargeCards 
            pic = {[
              { name: "cover", src: require('../../img/portfolio/lap4_cover.png') },
              { name: "reset-password", src: require('../../img/portfolio/lap4_reset-password.png') },
              { name: "dashboard", src: require('../../img/portfolio/lap4_dashboard.png') },
              { name: "leaderboard", src: require('../../img/portfolio/lap4_leaderboard.png') },
              { name: "create-game", src: require('../../img/portfolio/lap4_create-game.png') },
              { name: "lobby", src: require('../../img/portfolio/lap4_lobby.png') },
              { name: "game", src: require('../../img/portfolio/lap4_game.png') },
              { name: "results", src: require('../../img/portfolio/lap4_results.png') },
              { name: "user-experience-demo", src: require('../../img/portfolio/lap4_demo_user-exp.gif') },
              { name: "experience-demo-part1", src: require('../../img/portfolio/lap4_demo_gameplay_p1.gif') },
              { name: "experience-demo-part2", src: require('../../img/portfolio/lap4_demo_gameplay_p2.gif') },
              { name: "layout", src: require('../../img/portfolio/lap4_layout.png') },
            ]}
            title = "Lap 4 - Revelio! Multiplayer Game"
            links = {{
              fedl: "https://revelio.netlify.app/",
              bedl: "https://revelio-python-flask-server.onrender.com",
              bedl_2: "https://revelio.onrender.com",
              ferl: "https://github.com/oscr1998/Revelio_Clientside_Deploy",
              berl: "https://github.com/oscr1998/Revelio_PY_Server",
              berl_2: "https://github.com/oscr1998/Revelio_JS_Server",
            }}
            team = "Task Force 141"
            members = {[
              { name: "Kai Yu Leung", url: "https://github.com/kaiyuleung" },
              { name: "Matthieu Chan", url: "https://github.com/mattchan96" },
              { name: "Oliver Catelan-Robinson", url: "https://github.com/oscr1998" },
              { name: "Thamiem Noori", url: "https://github.com/thamiem-n" },
            ]}
            >
            <p>This is a project produced by a team of 4 in a week, it was to develop a multiplayer online prop hunt game with <em>Phaser</em> and <em>Socket.io</em>.</p>
            <p>The game is to have two team, hiders and seekers. The hiders have ability to imitate a random map object throughout the game and try to hide from the seekers. If All hiders were 'killed' by the seekers, the seekers win. Otherwise, if time runs out, Hiders win.</p>
            <p>The game has 2 game mode, the one-verus-all and the seeker-dual. The game also comes with 2 map, a small map where seekers are frozen for the first 10 seconds, and a big map where it is purfect to play hide-and-seek in.</p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>These are the major technologies that were used to create our game app:</Accordion.Header>
                  <Accordion.Body>
                  <p>The frontend client is built with <em>React</em>, written in <em>HTML</em>, <em>JavaScript</em> and <em>CSS</em>, which is deployed on <em>Netlify</em>.</p>
                  <p><em>Redux Toolkit</em> was also ultilised to keep all our variables and methods and make it available across the website.</p>
                  <p></p>
                  <p><em>Phaser</em> is used to make the game, it is written in <em>JavaScript</em> and it has all the amazing animation, physics engine etc.</p>
                  <p><em>Tiled</em> is a level editor which is used to design the game map, and <em>itch.io</em> is where the free assets package was obtained from.</p>
                  <p>A <em>JavaScript</em> <em>Express</em> Server<em>(Back-End)</em> was built where <em>Socket.io</em> is used for connecting different machines and sharing data across the network.</p>
                  <p>A <em>Python</em> server<em>(Back-End_2)</em> was built with <em>Flask</em> where it was to achieve Authorisation and Authentication<em>(Flask-login)</em>, send emails to users<em>(Flask-Mail)</em> and kept all user data in a <em>SQL</em> database<em>(Flask-SQLAlchemy)</em>.</p>
                  <p>Both servers are deployed on <em>Render</em>.</p>
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p>In this project, I was working full-stack, developing the frontend client with react, the game with Phaser, the multiplayer functionality with socket.io, API with Flask, and database with SQLAlchemy.</p>
            <p>This was my last and proudest piece of project with the Futureproof coding camp, despite there are still some bugs that I need to fix.
            Genuinely, It would have been a production level of work if we have more time to work on it.
            </p>

          </LargeCards>
        </div>
      </div>
    </div>
  )
}
