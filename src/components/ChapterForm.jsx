/**
 * TODO: 
 * - Validation form
 * - show errors from api
 * - allow just one first chapter in a story
 * - refactorization handle
 */



import { Component } from "react";
import {Chapter} from "../models/Chapter";
import { ChapterSelectBox } from "./ChapterSelectBox";

export class ChapterForm extends Component{

    constructor(props){
        super(props)
        this.state=props.currentChapter
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeAnnotations = this.handleChangeAnnotations.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeParent = this.handleChangeParent.bind(this)
    }
    
    componentDidUpdate(prevProps, PrevState){
        if(prevProps.currentChapter._id !== this.props.currentChapter._id){
            this.setState(this.props.currentChapter)
        }
    }

    componentDidMount(){
        if(this.props.currentChapter)
            this.setState(this.props.currentChapter)
    }

    handleSubmit(e){
        e.preventDefault();
        let chapter = new Chapter(this.state);
        chapter.save()
        .then((res)=>{
            this.props.onSubmit(res);
            this.setState(res)
        })        
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
    handleChangeStart(e){
        let newState = this.state;
        newState.start =  e.target.checked;
        this.setState(newState);
    }
    handleChangeParent(value){
        this.setState({parent: value})
    }

    render(){


        return (
            
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
                <div className="mb-3 form-ckeck"> 
                    <input type="checkbox" id="chapter-start" className="form-check-input" checked={(this.state.start)?"checked":""} onChange={this.handleChangeStart} />&nbsp;
                    <label htmlFor="chapter-start" className="form-check-label" >Ce chapitre est le premier de l'histoire ? :</label>
                </div>
                <div className={(this.state.start)?'mb-3 d-none':'mb-3'}> 
                    <label htmlFor="chapter-parent" className="form-label">Parent :</label>
                    <ChapterSelectBox chapters={this.props.chapters} currentChapter={this.state} onSelectChapterParent={this.handleChangeParent} />
                </div>
                <input type="submit" value={(this.state._id) ? "Valider": "Créer"} className="btn btn-primary"/>
            </form>

        )
    }
}