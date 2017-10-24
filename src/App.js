import React from 'react';
import { Card } from 'semantic-ui-react'
import Project from './components/Project'
import Contact from './components/Contact'
import List from './List'
import './App.css';

class App extends React.Component {
  render() {

    const projects = List.map((p, index) => <Project {...p} key={index} />)
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src='./self.jpg' className="App-logo me" alt="logo" />
          </div>
          <div style={{padding: '50px', width: '60%'}}>
            <h1>Ethan R. Roberts</h1>
            <p>Ethan is a Full-Stack web-developer proficient in Ruby on Rails and JavaScript with over three years of experience and growth at a Fortune 500 company.  Beginning with his childhood, including several years on a competitive Lego Robotics Team, he developed a natural affinity for problem solving and for building both creatively and as directed.  After discovering a love of traditional logic as an undergrad through the works of Aristotle, Ethan began a journey into the realm of coding.  With a voracious appetite for news and entertainment media, consumer culture and IP policy, he enjoys exploring the ways in which entire, diverse universes can be constructed upon the building blocks of logic and code.</p>
          </div>
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="projects">
          <Card.Group>
            {projects}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default App;
