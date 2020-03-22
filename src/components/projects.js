import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell } from 'react-mdl';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab===0){
      return(
        <div><h1>this is project1</h1></div>
      )
    }
    else if(this.state.activeTab===1){
      return(
        <div><h1>this is project2</h1></div>
      )
    }
    else if(this.state.activeTab===2){
      return(
        <div><h1>this is project3</h1></div>
      )
    }
    else if(this.state.activeTab===3){
      return(
        <div><h1>this is project4</h1></div>
      )
    }
  }


  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Quoridor</Tab>
          <Tab>Nanos Search</Tab>
          <Tab>My Pet Simulation Game</Tab>
          <Tab>LeJOS Robot Project</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Project;
