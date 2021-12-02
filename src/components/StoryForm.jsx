import React, { Component } from 'react'
import  MDEditor  from "@uiw/react-md-editor";
import {Story as StoryModel} from "../models/Story";
import { Link } from "react-router-dom";

export default class StoryForm extends Component {

    constructor(props){
        super(props)
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeNarrativeElement = this.handleChangeNarrativeElement.bind(this)
        this.handleChangeCharacters = this.handleChangeCharacters.bind(this)
        this.handleChangePlace = this.handleChangePlace.bind(this)
        this.handleChangePitch = this.handleChangePitch.bind(this)
        this.handleChangeDevelopment = this.handleChangeDevelopment.bind(this)
    }

    componentDidMount(){
        if(this.props.StoryId){
            let story = new StoryModel();
            story.getOneById(this.props.StoryId)
            .then((res)=>{
                this.setState( res)    
            })
        }
            
    }

    handleSubmit(e){
        e.preventDefault();
        let story = new StoryModel(this.state);
        story.save()
        .then((res)=>{
            this.setState(res);
        }) 
    }

    handleChangeTitle(e){
        this.setState({title: e.target.value});
    }
    handleChangeNarrativeElement(e){
        this.setState({narrative_element: e});
    }
    handleChangeCharacters(e){
        this.setState({characters: e});
    }
    handleChangePlace(e){
        this.setState({place: e});
    }
    handleChangePitch(e){
        this.setState({pitch: e});
    }
    handleChangeDevelopment(e){
        this.setState({development: e});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3"> 
                    <input placeholder="TITRE" type="text" className="form-control nude-field big-font" id="story-title" value={this.state.title} onChange={this.handleChangeTitle}></input>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3"> 
                            <label className="form-label">Element narrative :</label>
                            <MDEditor height="500" className="" id="story-narrative-element" value={this.state.narrative_element} onChange={this.handleChangeNarrativeElement} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3"> 
                            <label className="form-label">Lieux et ambiance :</label>
                            <MDEditor height="500" className="" id="story-place" value={this.state.place} onChange={this.handleChangePlace} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3"> 
                            <label className="form-label">Personnages :</label>
                            <MDEditor height="500" className="" id="story-characters" value={this.state.characters} onChange={this.handleChangeCharacters} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3"> 
                            <label className="form-label">Résumé :</label>
                            <MDEditor height="500" className="" id="story-pitch" value={this.state.pitch} onChange={this.handleChangePitch} />
                        </div>
                    </div>
                </div>
                <div className="mb-3"> 
                    <label className="form-label">Déroulement Narratif :</label>
                    <MDEditor height="500" className="" id="story-development" value={this.state.development} onChange={this.handleChangeDevelopment} />
                </div>
                <input type="submit" value={(this.state._id)?"Valider":"Créer"} className="btn btn-primary"/>&nbsp;
                {(this.state._id) ? <Link to={"/story/"+this.state._id}> Voir aux chapitres </Link> : ""}
                
            </form>
        )
    }
}
