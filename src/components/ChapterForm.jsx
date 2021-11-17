import { Component } from "react";
import {Chapter} from "../models/Chapter";

export class ChapterForm extends Component{

    constructor(props){
        super(props)
        this.state={
            title: "",
            content: "",
            annotations: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeAnnotations = this.handleChangeAnnotations.bind(this);
    }

    componentDidUpdate(){
        console.log('ok')
    }


    componentDidMount(){
        this.setState(this.props.current_chapter)
    }

    handleSubmit(e){
        e.preventDefault();
        let chapter = new Chapter(this.state);
        chapter.save()
        .then(()=>{
            this.props.onChangeCurrentChapterData();
        });
        
    }

    handleChangeTitle(e){
        let newState = this.state;
        newState.title =  e.target.value;
        this.setState(newState);

    }
    handleChangeContent(e){
        let newState = this.state;
        newState.content =  e.target.value;
        this.setState(newState);
    }
    handleChangeAnnotations(e){
        let newState = this.state;
        newState.annotations =  e.target.value;
        this.setState(newState);
    }

    render(){


        return (
            <main className="bg-light p-5 rounded">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <div className="mb-3"> 
                        <label htmlFor="chapter-title" className="form-label">Titre :</label>
                        <input type="text" className="form-control" id="chapter-title" onChange={this.handleChangeTitle} value={this.state.title}></input>
                    </div>
                    <div className="mb-3"> 
                        <label htmlFor="chapter-content" className="form-label">Contenu :</label>
                        <textarea className="form-control" id="chapter-content" onChange={this.handleChangeContent} value={this.state.content} />
                    </div>
                    <div className="mb-3"> 
                        <label htmlFor="chapter-annotations" className="form-label">Note pour l'équipe :</label>
                        <textarea className="form-control" id="chapter-content" onChange={this.handleChangeAnnotations} value={this.state.annotations}/>
                    </div>
                    <input type="submit" value="Valider" className="btn btn-primary"/>
                    </form>
                </div>
            </main>
        )
    }
}