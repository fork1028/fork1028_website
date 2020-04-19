import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Project extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }


  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: '3em'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://camo.githubusercontent.com/97e08bab1cdb71eb09a84a1a9b9e686f89eb2710/68747470733a2f2f73322e617831782e636f6d2f323031392f31322f30342f5151305431672e706e67) center / cover'}} >Quoridor Game</CardTitle>
            <CardText>
              This Quoridor project is developed using MVC software design pattern with gherkin/cucumber testing.
            </CardText>
            <CardActions border>
            <a href="https://github.com/fork1028/ECSE223_F19_Quoridor" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{minWidth: '450', margin: '3em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s1.ax1x.com/2020/04/19/JumCrt.png) center / cover'}} >LeJOS Robot Project</CardTitle>
            <CardText>
              This project is written under LeJOS (Lego Java Operating System)
            </CardText>
            <CardActions border>
            <a href="https://github.com/fork1028/ECSE211_W20" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: '3em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/755/429/datas/gallery.jpg) center / cover'}} >My Dog</CardTitle>
            <CardText>
              It simulates a lovely dog that requests food, bath, and interaction. The hunger, cleanness, and happiness will decrease as time goes by. When the player walks the dog, the background will change according to the time of the day in the real world.
            </CardText>
            <CardActions border>
            <a href="https://github.com/fork1028/MyDog_McHacks6" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }
    else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: '3em'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://s1.ax1x.com/2020/04/19/JumlZV.png) center / cover'}} >Nanos Search</CardTitle>
            <CardText>
              Developed a mini program of an interactive product information searching tool for Nanos Medical Company, applied the knowledge of wxml, wxss, js, and cloud servers.
            </CardText>
            <CardActions border>
            <a href="https://github.com/fork1028/NanosSearch" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{minWidth: '450', margin: '3em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s1.ax1x.com/2020/04/19/JumqQs.png) center / cover'}} >Fruitie</CardTitle>
            <CardText>
              Repo for a pixel game made using AppLab
            </CardText>
            <CardActions border>
            <a href="https://github.com/fork1028/Fruitie_AppLab" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }


  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Java</Tab>
          <Tab>C#</Tab>
          <Tab>HTML/CSS/JS</Tab>
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
