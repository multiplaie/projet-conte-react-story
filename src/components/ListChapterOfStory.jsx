import { Component, React } from "react";
import { ChapterMenuItem } from "./ChapterMenuItem";
export class ListChapterOfStory extends Component{

    constructor(props){
      super(props);
      this.handleSelectChapterMenuItem = this.handleSelectChapterMenuItem.bind(this)
    }

    
    handleSelectChapterMenuItem(chapter){
      this.props.onChangeSelectedChapter(chapter);
    }

    render(){
      return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white chapter-list">
          <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><strong>{this.props.currentStory.title}</strong></span>
          <div className="list-group list-group-flush border-bottom scrollarea">
          <div className="list-group-item list-group-item-action py-3 lh-tight">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span className="btn btn-primary" onClick={()=>{this.props.onClickAddNewChapter()}}>Ajouter un chapitre</span>
              </div>
            </div>
            {this.props.chapters.map((chapter, k)=>{
              return <ChapterMenuItem key={k} chapter={chapter}  onSelect={this.handleSelectChapterMenuItem} selected={(chapter._id === this.props.currentChapter._id) ? true:false}/>
            })}
          </div>
        </div>
      )
    }
}