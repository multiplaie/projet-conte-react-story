import React, { Component } from 'react'

export class ChapterSelectBox extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.onSelectChapterParent(e.target.value);
    }

    render() {
        return (
            <select className="form-select" onChange={this.handleChange} defaultValue={'DEFAULT'} value={this.props.currentChapter.parent}>
                <option  value="DEFAULT">-- Chapitre parent --</option>
                {this.props.chapters.map((chapter, key) => {
                   return (this.props.currentChapter._id !== chapter._id ) ? 
                    <option 
                        selected={ (this.props.currentChapter.parent === chapter.parent) ? "selected" : ""} 
                        value={chapter._id} 
                        key={key}>
                        {chapter.title}
                    </option> 
                    : null
                })}
            </select>
        )
    }
}
