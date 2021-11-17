import { Component } from "react";

export class ChapterMenuItem extends Component{

    render(){
        return (
            <div className={(this.props.selected)?"list-group-item list-group-item-action py-3 lh-tight list-group-item-primary":"list-group-item list-group-item-action py-3 lh-tight"}>
              <div className="d-flex w-100 align-items-center justify-content-between">
                <strong>{this.props.chapter.title}</strong>
              </div>
              <div className="col-10 mb-1 small">
                {this.props.chapter.content}
              </div>
            </div>
        )
    }
}