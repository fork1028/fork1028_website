import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>

          <div style={{margin:'7em',paddingTop: '0em'}}>
              <img
                src="https://doggiedesigner.com/wp-content/uploads/2018/04/73.1-1.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <div style={{margin:'5em'}}>
            <h2 style={{paddingTop: '0em'}}>Xinyue Chen</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p> U1 Software Engineering student @McGill</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Contact Email</h5>
            <p>xinyue.chen2@mail.mcgill.ca</p>
            <h5>Web</h5>
            <p>https://sourcerer.io/fork1028</p>
            <p>https://github.io/fork1028</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            </div>
          </Cell>

          <Cell className="resume-right-col" col={8}>

            <div style = {{paddingTop:'5em'}}>
            <h2>Education</h2>
            </div>

            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Shanghai Jianping High School"
              schoolDescription="Completed AP Program including Economics, Statistics, Calculus, Computer Science, Environmental Science."
               />

               <Education
                 startYear={2018}
                 endYear={2022}
                 schoolName="McGill University"
                 schoolDescription="Relevant contents: Intro to Software Development, Intro to Computer Science, McGill
GameDev Club, Model-based programming, Programming languages and paradigms,
Digital Logic, Intro to Software Engineering, Algorithms and Data structures"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019.05}
              endYear={2019.08}
              jobName="BISO Intern at AstraZeneca"
              jobLocation="Shanghai, China"
              jobDescription="Responsible for national sales data collection, Responsible for processing data in excel using formulas, Responsible for monthly performance report in national scale./n"
              />

              <Experience
                startYear={2019.05}
                endYear={2019.08}
                jobName="Miniprogram Developer"
                jobLocation="Online"
                jobDescription="Developed a mini program of an interactive product information searching tool for Nanos Medical Company, applied the knowledge of wxml, wxss, js, and cloud servers."
                githubLink="https://github.com/fork1028/NanosSearch"
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                  skill="C"
                  progress={80}
                  />
                  <Skills
                    skill="OCaml"
                    progress={50}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
