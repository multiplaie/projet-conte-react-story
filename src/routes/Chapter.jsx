/**
 * TODO: 
 * - place a markdown edito for content and annotations fields
 * - place return button to go home
 */


import { Link, useParams } from "react-router-dom";
import { ListChapterOfStory } from "../components/ListChapterOfStory";
import { ChapterForm } from "../components/ChapterForm";
import { useState, useEffect } from "react";
import {Chapter as ChapterModel} from "../models/Chapter";
import {Story as StoryModel} from "../models/Story";

export default function Chapter(){
    let params = useParams();
    
    const initChapter = {
        title: "",
        content: "",
        annotations: "",
        children: [],
        assets: [],
        story: params.story_id,
        archive: null,
        start: false,
        _id: undefined
    }
    
    const [pageData, setPageData] = useState({loaded: false});
    const [currentChapter, setCurrentChapter] = useState({})
    const [currentStory, setCurrentStory] = useState({})
    const [chapters, setChapters] = useState([])


    useEffect(()=>{
        async function initPageData(){
            let chapter = new ChapterModel();
            let story = new StoryModel();
            setCurrentStory( await story.getOneById(params.story_id))
            setChapters(await chapter.getAllChapterByStoryId(params.story_id))
            setCurrentChapter(initChapter)            
            setPageData({loaded: true});
        }
        
        if(!pageData.loaded){
            initPageData();
        }
    });

    function handleAddNewChapter(){
        setCurrentChapter(initChapter)
    }

    async function handleSubmit(newCurrentChapter){
        let chapter = new ChapterModel();
        await chapter.getAllChapterByStoryId(currentStory._id)
        .then(res => {
            setChapters(res)
            setCurrentChapter(newCurrentChapter)
        })
    }

    function selectChapter(chapterSelected){
        setCurrentChapter(chapterSelected)
    }

    if(pageData.loaded){
        return(
            <main id="story-page">
                <div className="row">
                    <div className="col-md-2">
                        <ListChapterOfStory currentStory={currentStory} chapters={chapters} currentChapter={currentChapter} onClickAddNewChapter={handleAddNewChapter} onChangeSelectedChapter={selectChapter} />
                    </div>
                    <div className="col-md-10 bg-light p-5 rounded">
                        <div className="container">
                        <Link to="/" className="btn btn-primary">Retour à la liste des histoires</Link>
                            <hr />
                            <ChapterForm  currentChapter={currentChapter} onSubmit={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }else{
        return(<main id="story-page">
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-10">
                    <div className="container">
                    <Link to="/" className="btn btn-primary">Retour à la liste des histoires</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    
    
    
}