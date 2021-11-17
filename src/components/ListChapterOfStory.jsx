import { Component, React } from "react";
import { ChapterMenuItem } from "./ChapterMenuItem";
export class ListChapterOfStory extends Component{

    constructor(props){
      super(props);
      this.state = props.pageData
    }

    
    componentDidUpdate(){
        console.log('ok')
    }

    render(){
      return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white chapter-list">
          <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><strong>{this.state.story.title}</strong></span>
          <div className="list-group list-group-flush border-bottom scrollarea">
            {this.state.chapters.map((chapter, k)=>{
              return <ChapterMenuItem key={k} chapter={chapter} selected={(chapter._id === this.state.current_chapter._id) ? true:false}/>
            })}
          </div>
        </div>
      )
    }
}