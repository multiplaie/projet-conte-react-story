/**
 * TODO: 
 * - Validation form
 * - show errors from api
 * - allow just one first chapter in a story
 * - refactorization handle
 * - add media field
 * - add script field
 */



import { Component } from "react";
import {Chapter} from "../models/Chapter";
import { ChapterSelectBox } from "./ChapterSelectBox";
import  MDEditor  from "@uiw/react-md-editor";

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
        this.setState({content: e})
    }
    handleChangeAnnotations(e){
        this.setState({annotations: e})
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
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3"> 
                            <input placeholder="TITRE" type="text" className="form-control nude-field big-font" id="chapter-title" onChange={this.handleChangeTitle} value={this.state.title}></input>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3 form-ckeck"> 
                            <input type="checkbox" id="chapter-start" className="form-check-input" checked={(this.state.start)?"checked":""} onChange={this.handleChangeStart} />&nbsp;
                            <label htmlFor="chapter-start" className="form-check-label" >Ce chapitre est le premier de l'histoire</label>
                        </div>
                        
                    </div>
                </div>
                
                <div className="">
                    <div className="row">
                        <div className="mb-3 col-md-9"> 
                            <label htmlFor="chapter-content" className="form-label">Synopsys :</label>
                            <MDEditor className="editor" id="chapter-content" onChange={this.handleChangeContent} value={this.state.content} height="500" />
                        </div>
                        <div className="mb-3 col-md-3">
                            <div className={(this.state.start)?'mb-3 d-none':'mb-3'}> 
                                <label htmlFor="chapter-parent" className="form-label">Parent :</label>
                                <ChapterSelectBox chapters={this.props.chapters} currentChapter={this.state} onSelectChapterParent={this.handleChangeParent} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-9"> 
                            <label htmlFor="chapter-annotations" className="form-label">Note pour l'équipe :</label>
                            <MDEditor className="editor" id="chapter-content" onChange={this.handleChangeAnnotations} value={this.state.annotations} height="500"/>
                        </div>
                    </div>
                </div>
                
                
                
                <input type="submit" value={(this.state._id) ? "Valider": "Créer"} className="btn btn-primary"/>
            </form>

        )
    }
}