import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {Story as StoryModel} from "../models/Story";
import  MDEditor  from "@uiw/react-md-editor";

function Story() {
    let params = useParams();
    const [currentStory, setCurrentStory] = useState({})
    const [pageData, setPageData] = useState({loaded: false});

    useEffect(()=>{
        async function initPageData(){
            let story = new StoryModel();
            setCurrentStory( await story.getOneById(params.story_id))        
            setPageData({loaded: true});
        }
        
        if(!pageData.loaded){
            if(params.story_id) initPageData();
            else setPageData({loaded: true});
        }
    });

    function handleSubmit(e){
        e.preventDefault();
        let story = new StoryModel(currentStory);
        story.save()
        .then((res)=>{
            setCurrentStory(res)
        }) 
    }

    function handleChangeTitle(e){
        const update = {title: e.target.value}
        setCurrentStory({...currentStory, ...update})
    }
    function handleChangeNarrativeElement(e){
        const update = {narrative_element: e}
        setCurrentStory({...currentStory, ...update})
    }
    function handleChangeCharacters(e){
        const update = {characters: e}
        setCurrentStory({...currentStory, ...update})
    }
    function handleChangePlace(e){
        const update = {place: e}
        setCurrentStory({...currentStory, ...update})
    }
    function handleChangePitch(e){
        const update = {pitch: e}
        setCurrentStory({...currentStory, ...update})
    }
    function handleChangeDevelopment(e){
        const update = {development: e}
        setCurrentStory({...currentStory, ...update})
    }


    if(pageData.loaded)
        return (
            <main id="story-page" className="container">
                <div className="bg-light p-5 rounded">
                    <Link to='/'>Revenir à la liste des histoires</Link>
                <h1>Histoire</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3"> 
                        <label htmlFor="story-title" className="form-label">Titre :</label>
                        <input type="text" className="form-control" id="story-title" value={currentStory.title} onChange={handleChangeTitle}></input>
                    </div>
                    <div className="mb-3"> 
                        <label className="form-label">Element narrative :</label>
                        <MDEditor className="form-control" id="story-narrative-element" value={currentStory.narrative_element} onChange={handleChangeNarrativeElement} />
                    </div>
                    <div className="mb-3"> 
                        <label className="form-label">Personnages :</label>
                        <MDEditor className="form-control" id="story-characters" value={currentStory.characters} onChange={handleChangeCharacters} />
                    </div>
                    <div className="mb-3"> 
                        <label className="form-label">Lieux et ambiance :</label>
                        <MDEditor className="form-control" id="story-place" value={currentStory.place} onChange={handleChangePlace} />
                    </div>
                    <div className="mb-3"> 
                        <label className="form-label">Résumé :</label>
                        <MDEditor className="form-control" id="story-pitch" value={currentStory.pitch} onChange={handleChangePitch} />
                    </div>
                    <div className="mb-3"> 
                        <label className="form-label">Déroulement Narratif :</label>
                        <MDEditor className="form-control" id="story-development" value={currentStory.development} onChange={handleChangeDevelopment} />
                    </div>
                    <input type="submit" value={(currentStory._id)?"Valider":"Créer"} className="btn btn-primary"/>&nbsp;
                    {(currentStory._id) ? <Link to={"/story/"+currentStory._id}> Voir aux chapitres </Link> : ""}
                    
                </form>
                </div>
            </main>
        )
    else return (
        <main id="story-page" className="container"></main>
    )

}

export default Story
