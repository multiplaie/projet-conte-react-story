import { Component, React } from "react";

export class ListStoryCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        return <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white chapter-list">
        <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><strong>Histoire 1</strong></span>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong>Chapitre 1</strong>
            </div>
            <div className="col-10 mb-1 small">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </div>
          </a>
          <a className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong>Chapitre 2</strong>
            </div>
            <div className="col-10 mb-1 small">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </div>
          </a>
          <a className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong>Chapitre 3</strong>
            </div>
            <div className="col-10 mb-1 small">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </div>
          </a>
          <a className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong>Chapitre 4</strong>
            </div>
            <div className="col-10 mb-1 small">
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </div>
          </a>

        </div>
      </div>
        
    }

}