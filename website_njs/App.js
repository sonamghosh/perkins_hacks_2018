import React, { Component } from 'react';
import Webcam from 'react-webcam';
import Statitem from './Components/Statitem';
import Machines from './Components/Machines';
import Recognize from './Components/Recognize';
import Register from './Components/Register';
import logo from './logo.svg';
import './App.css';

import gym from './Images/gravitygymfloor.jpg';
import treadmill from './Images/treadmill.JPG';
import ellipticalpic from './Images/elliptical.jpg';
import bicyclepic from './Images/bicyclepic.png';
import dumbbells from './Images/dumbbells.png';
import bench from './Images/bench.jpg';
import dip from './Images/dip.jpg';
import tread from './Images/tread.jpg';
import red from './Images/reddot.png';
import green from './Images/greendot.png';
import perkins from './Images/perkinslogo.png';
class App extends Component {
  render() {

    var capture = () => {
      const imageSrc = this.webcam.getScreenshot();
    };
    var increment = () => {
      test= test + 1;
    }
    var test = 1;
    return (

      <div className="App">
        <header className="App-header">

          <div className="gympic" alt="Gym with smarter machines">

          </div>
          <h1 className="title">PathoGym</h1>
          <p className="titletext">
            Technology has infected this gym to make it more accessible. Put on your earphones and let us guide you to available and smarter machines.
          </p>
        </header>
        <body>
          <h1 className="featuredTech"> Featured Technology </h1>
          <div className="item">
            <h3>
              Smart Treadmill (Proof of Concept)
            </h3>
            <img className="treadpic" src={treadmill} alt="Smart treadmill"/>
            <p>
              You will be guided to the nearest available treadmill by directions from your headphone. The treadmill is completely voice activated but can also
              be controlled by buttons to control the speed.
              If it is your first time on the treadmill, please start at the default speed of 1 and work your way up.
              You can tell the treadmill to change the speed from 1 to 10.
              The handles of the treadmill are touch sensitive so it will slow to a stop if the hands are released.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart Elliptical (Under Development)
            </h3>
            <img className="ellipticalpic" src={ellipticalpic} alt="Regular elliptical"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart Bicycles (Under Development)
            </h3>
            <img className="bicyclepic" src={bicyclepic} alt="Regular bicycle"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="clear"> </div>
          <div className="item">
            <h3>
              Smart Dumbbells (Under Development)
            </h3>
            <img className="dumbbells" src={dumbbells} alt="Regular dumbbells"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart Bench Press (Under Development)
            </h3>
            <img className="bench" src={bench} alt="Regular bench press"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="item">
            <h3>
              Smart parallel bar (Under Development)
            </h3>
            <img className="dip" src={dip} alt="Regular dip machine"/>
            <p>
              This gym equipment is still under development.
            </p>
          </div>
          <div className="clear"> </div>
          <div className="userinfo">
          <div className="user">
          <br/>
            <h1 className="username">
              Welcome Back, ImaginaryPerson
            </h1>
            <Webcam className="webcam"
              audio={false}
              height={200}
              screenshotFormat="image/jpeg"
              width={200}
            />
            <button onClick={this.capture}>Capture Photo (Login)</button>
            <div className="clear"> </div>
            <br/>
            <Statitem
              title="Stats Last Week"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
            <Statitem
              title="Stats Yesterday"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
            <Statitem
              title="Stats Today"
              machines="x, y, z"
              distance="#"
              calories="#"
            />
            <div className="clear"> </div>
            <br/>
            <hr/>
          </div>
          </div>
          <br/>
          <h2 className="OpenMachines">
            Machine Availability
          </h2>
          <div className="clear"> </div>
          <div className="treadmillavail">
            <h3>Smart Treadmills</h3>
            <p>Treadmill 1: Available  <img className="green" src={green} alt="Green dot for available"/></p>
            <p>Treadmill 2: Unavailable<img className="red" src={red} alt="Red dot for unavailable"/></p>
            <p>Treadmill 3: Available  <img className="green" src={green} alt="Green dot for available"/></p>
          </div>
          <Machines
            title="Smart Elliptical"
            machine="Elliptical"
            available1="Underway"
            available2="Underway"
            available3="Underway"
          />
          <Machines
            title="Smart Bicycles"
            machine="Bicycle"
            available1="Underway"
            available2="Underway"
            available3="Underway"
          />
          <div className="clear"> </div>
          <br/>
          <br/>
          <Machines
            title="Smart Dumbbells"
            machine="Dumbbells"
            available1="Underway"
            available2="Underway"
            available3="Underway"
          />
          <Machines
            title="Smart Bench Press"
            machine="Bench Press"
            available1="Underway"
            available2="Underway"
            available3="Underway"
          />
          <Machines
            title="Smart Dip Machine"
            machine="Dip Machine"
            available1="Underway"
            available2="Underway"
            available3="Underway"
          />
          <div className="clear"> </div>
          <br/>
        </body>


        <footer className="footer">
          <img className="perkins" src={perkins} alt="Perkins Logo"/>
          <br/>
          <p className="useless">
            This is the footer and it contains useless information.

            Copyright {(new Date().getFullYear())}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
