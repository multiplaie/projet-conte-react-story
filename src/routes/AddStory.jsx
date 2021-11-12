import { Component, React } from "react";
import { Story } from "../models/Story";
import { Navigate } from "react-router-dom";

export class AddStory extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      data: {
        title: null
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }


  handleChange(e){
    let newState = this.state;
    newState.data.title =  e.target.value;
    this.setState(newState);
  }

  handleSubmit(e){
    e.preventDefault();
    let newStory = new Story();
    newStory.setData(this.state.data)
    newStory.save()
    .then((res)=>{
      let newState = this.state;
      newState.redirect = true;
      newState.data = res;
      this.setState(newState);
    });
  }

  render(){
    let {redirect} = this.state;
    return (
      <main id="story-page" className="container">
      {redirect && (<Navigate to={"/story/"+this.state.data._id} replace={true} />)}
        <div className="bg-light p-5 rounded">
          <h1>Création d'une histoire</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3"> 
              <label htmlFor="story-title" className="form-label">Titre :</label>
              <input type="text" className="form-control" id="story-title" onChange={this.handleChange} ></input>
            </div>
            <input type="submit" value="Valider" className="btn btn-primary"/>
          </form>
        </div>
      </main>
    )    
  }
}