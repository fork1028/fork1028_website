import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://doggiedesigner.com/wp-content/uploads/2018/04/73.1-1.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Xinyue Chen</h1>
              <hr/>
              <p>Software Engineering Student @McGill
              </p>
              <div className="social-links">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=100014845443602&ref=bookmarks" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/fork1028" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/xinyue-chen-45b6b2175/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/fork1028/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Homepage;
