import { Component, React } from "react";
import { Link } from "react-router-dom";

export class StoryCard extends Component{

    
    render(){
        return <div className="card story-card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <div >
            <Link className="btn btn-primary" to={`/story/edit/${this.props.id}`}>EDIT</Link>
            <Link className="btn btn-danger" to={`/story/delete/${this.props.id}`}>DELETE</Link>
          </div>
        </div>
      </div>
        
    }

}