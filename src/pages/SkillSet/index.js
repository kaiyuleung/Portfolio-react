import React from 'react'
import { MiniCards } from '../../components'
import 'devicon'

function SkillSec(props) {
  return (
    <div id={props.id} className="container-fluid my-3">
      <h1 className="m-0">{props.title}</h1>
      <div className="row row-cols-auto text-center px-3">
        {props.children}
      </div>
    </div>
  );
}

export default function SkillSet() {



  return (
    <section id="skillsetSection" className="container-fluid">

      <SkillSec id="progLangs" title="Programming Languages">
        <MiniCards iClass="devicon-c-plain" title="C" />
        <MiniCards iClass="devicon-cplusplus-plain" title="C++" />
        <MiniCards iClass="devicon-csharp-plain" title="C#" />
        <MiniCards iClass="devicon-python-plain" title="Python" />
        <MiniCards iClass="devicon-javascript-plain" title="JavaScript" />
        <MiniCards iClass="devicon-html5-plain-wordmark" title="HTML" />
        <MiniCards iClass="devicon-css3-plain-wordmark" title="CSS" />
        <MiniCards iClass="devicon-matlab-plain" title="MATLAB" />
        <MiniCards iClass="devicon-labview-plain" title="LabVIEW" />
        <MiniCards src={require("../../img/skillset/systemverilog.png")} title="System Verilog" />
        <MiniCards src={require("../../img/skillset/vhdl.png")} title="VHDL" />
      </SkillSec>

      <SkillSec id="platLibFW" title="Platform, Frameworks and Libraries">
        <MiniCards iClass="devicon-opencv-plain" title="OpenCV" />
        <MiniCards iClass="devicon-numpy-original" title="NumPy" />
        <MiniCards src={require("../../img/skillset/scipy.png")} title="SciPy" />
        <MiniCards src={require("../../img/skillset/sympy.png")} title="SymPy" />
        <MiniCards src={require("../../img/skillset/matplotlib.png")} title="Matplotlib" />
        <MiniCards iClass="devicon-pandas-plain" title="Pandas" />
        <MiniCards iClass="devicon-django-plain" title="Django" />
        <MiniCards iClass="devicon-flask-original" title="Flask" />
        <MiniCards iClass="devicon-bootstrap-plain" title="Bootstrap" />
        <MiniCards iClass="devicon-react-plain" title="React" />
        <MiniCards iClass="devicon-redux-original" title="Redux" />
        <MiniCards iClass="devicon-socketio-original" title="SocketIO" />
        <MiniCards src={require("../../img/skillset/phaser.png")} title="Phaser" />
        <MiniCards iClass="devicon-postgresql-plain" title="PostgreSQL" />
        <MiniCards iClass="devicon-sqlalchemy-plain" title="SQLAlchemy" />
        <MiniCards iClass="devicon-mongodb-plain" title="MongoDB" />
        <MiniCards iClass="devicon-jest-plain" title="Jest" />
        <MiniCards iClass="devicon-pytest-plain" title="Pytest" />
        <MiniCards src={require("../../img/skillset/supertest.png")} title="Supertest" />
        <MiniCards iClass="devicon-nodejs-plain" title="Node.js" />
        <MiniCards iClass="devicon-express-original-wordmark" title="express.js" />
        <MiniCards iClass="devicon-npm-original-wordmark" title="NPM" />
      </SkillSec>

      <SkillSec id="IDEVC" title="IDE and Version Control">
        <MiniCards iClass="devicon-vscode-plain" title="VS Code" />
        <MiniCards iClass="devicon-xcode-plain" title="XCode" />
        <MiniCards src={require("../../img/skillset/eclipse.png")} title="Eclipse" />
        <MiniCards src={require("../../img/skillset/spyder.png")} title="Spyder" />
        <MiniCards iClass="devicon-anaconda-plain" title="Anaconda" />
        <MiniCards iClass="devicon-jupyter-plain" title="Jupyter" />
        <MiniCards iClass="devicon-codepen-plain" title="CodePen" />
        <MiniCards iClass="devicon-git-plain" title="Git" />
      </SkillSec>

      <SkillSec id="cloudOS" title="Operating Systems and Cloud Computing">
        <MiniCards iClass="devicon-windows8-original" title="Windows" />
        <MiniCards iClass="devicon-apple-plain" title="MacOS" />
        <MiniCards iClass="devicon-android-plain" title="Android" />
        <MiniCards iClass="devicon-linux-plain" title="Linux" />
        <MiniCards iClass="devicon-ubuntu-plain" title="Ubuntu" />
        <MiniCards iClass="devicon-debian-plain" title="Debian" />
        <MiniCards iClass="devicon-raspberrypi-line" title="RaspberryPi" />
        <MiniCards iClass="devicon-arduino-plain" title="Arduino" />
        <MiniCards iClass="devicon-docker-plain" title="Docker" />
        <MiniCards src={require("../../img/skillset/netlify.png")} title="Netlify" />
        <MiniCards src={require("../../img/skillset/render.png")} title="Render" />
        <MiniCards iClass="devicon-heroku-plain" title="Heroku" />
        <MiniCards iClass="devicon-azure-plain" title="Azure" />
      </SkillSec>

      <SkillSec id="CLI" title="CLI/Terminal Emulators">
        <MiniCards iClass="devicon-bash-plain" title="Bash" />
        <MiniCards iClass="devicon-git-plain" title="Git" />
        <MiniCards iClass="devicon-putty-plain" title="Putty" />
      </SkillSec>

      <SkillSec id="simulators" title="Simulators">
        <MiniCards src={require("../../img/skillset/ltspice.png")} title="LTSpice" />
        <MiniCards src={require("../../img/skillset/modelsim.png")} title="ModelSim" />
        <MiniCards iClass="devicon-github-original-wordmark" title="NOXIM" href="https://github.com/davidepatti/noxim" />
        <MiniCards src={require("../../img/skillset/vpr.png")} title="VPR" href="https://github.com/verilog-to-routing" />
        <MiniCards src={require("../../img/skillset/cst.png")} title="CST Studio Suite" />
        <MiniCards src={require("../../img/skillset/comsol.png")} title="COMSOL Multiphysics" />
      </SkillSec>

      <SkillSec id="CAD" title="CAD">
        <MiniCards src={require("../../img/skillset/fusion360.png")} title="Fusion 360" />
        <MiniCards src={require("../../img/skillset/solidworks.png")} title="SolidWorks" />
        <MiniCards src={require("../../img/skillset/sketchup.png")} title="SketchUp" />
        <MiniCards src={require("../../img/skillset/excalidraw.png")} title="Excalidraw" />
        <MiniCards src={require("../../img/skillset/eagle.png")} title="EAGLE" />
        <MiniCards src={require("../../img/skillset/tannerEDA.png")} title="Tanner EDA" />
        <MiniCards src={require("../../img/skillset/multisim.png")} title="Multisim" />
        <MiniCards src={require("../../img/skillset/fritzing.png")} title="Fritzing" />
      </SkillSec>
    </section>
  )
}
