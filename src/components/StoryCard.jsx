import { Component, React } from "react";
import { Link } from "react-router-dom";
import { Story } from "../models/Story";

export class StoryCard extends Component{

    constructor(props){
      super(props);
      this.state = {
        story: props.story
      }
      this.handleDelete = this.handleDelete.bind(this);
    }  

    handleDelete(e){
      e.preventDefault();
      let story = new Story();
      story.setData(this.state.story);
      story.archive()
      .then(res => {
        let newState = this.state;
        newState.story = res;
        this.setState(newState);
        console.log(this.state)
      });

    }

    render(){
      return (
        <div className={(this.state.story.archive)?`card story-card d-none`:`card story-card`} >
          <div className="card-body">
            <h5 className="card-title">{this.state.story.title}</h5>
            <div >
              <Link className="btn btn-primary" to={`/story/edit/${this.state.story._id}`}>EDIT</Link>
              <button className="btn btn-danger" onClick={this.handleDelete}>ARCHIVE</button>
            </div>
          </div>
        </div>
      )
    }
}