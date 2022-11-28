import React from 'react'
import { LargeCards } from '../../components'

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
            <p>This is a project produced by a team of 4 in 4 days, it was to develop a simple online quiz game in React and SocketIO</p>
            <p>This is to create an app using <em>React</em> and <em>React-Redux-Toolkit</em>, as well as make it interactable with other user using <em>SocketIO</em>. The quiz contents are fetch from the <em>Open Trivia DB</em>, and all results are kept and deployed with <em>MongoDB</em> database.</p>
            <p>The user can create a game with customs settings, and able to play locally with a second player, or online with players that has the same room ID. All results are posted to our database and shown in the leaderboard page.</p>
            <p>The back-end ultilised <em>SocketIO</em> to communicate with multiple frontend connections, as well as a simple API to post user results.</p>
          </LargeCards>

          <LargeCards 
            pic = {[
              { name: "Coming Soon", src: require('../../img/portfolio/futureproof_logo.png') },
            ]}
            title = "Lap 4 - Coming Soon"
            links = {{
              fedl: "",
              bedl: "",
              ferl: "",
              berl: "",
            }}
            team = "Coming Soon"
            members = {[
              { name: "Kai Yu Leung", url: "https://github.com/kaiyuleung" },
            ]}
            >
            <p>Coming Soon</p>
          </LargeCards>
        </div>
      </div>
    </div>
  )
}
