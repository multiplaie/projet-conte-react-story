import axios from "axios";
import { Component, React } from "react";
import config from "../config.json";
import {StoryCard} from "../components/StoryCard";
import { Link } from "react-router-dom";


export class ListStoryCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: []
        };

        this.handleRemoveCard = this.handleRemoveCard.bind(this)
    }

    componentDidMount() {
        axios.get("http://"+config.api.host+":"+config.api.port+"/api/story")
        .then(res => this.setState({stories: res.data}));
    }

    handleRemoveCard(storyToRemove){
        let newState = this.state
        newState.stories = this.state.stories.filter(story => story._id !== storyToRemove._id)
        this.setState(newState)
    }

    render(){
        return (
        <div className="d-flex flex-wrap justify-content-center">
             {this.state.stories.map((story, k)=>{
                 return <StoryCard story={story} key={k} onRemoveCard={this.handleRemoveCard} />
             })}
             <div className="card story-card text-white bg-primary">
                <div className="card-body">
                <h5 className="card-title">Nouvelle histoire</h5>
                <Link className="btn btn-outline-light" to={`/story/add`}>Créer</Link>
                </div>
            </div>
      </div>
        )
    }

}