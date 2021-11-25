/**
 * TODO:
 * - show popup to confirm archivate story
 * 
 */

import { Component, React } from "react";
import { ListStoryCard } from "../components/ListStoryCard"

export class Home extends Component {

  render(){
    return (
      <main className="container">
        <div className="bg-light p-5 rounded">
          <h1 className="text-center" >Histoires</h1>
            <ListStoryCard />
        </div>
        
      </main>
    )    
  }
}