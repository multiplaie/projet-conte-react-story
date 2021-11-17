/**
 * TODO: 
 * - update list chapteur after save chapterform
 * - place a markdown edito for content and annotations fields
 * - load chapter seleted from menu
 * - place return button to go home
 * - place add chapter button on the to of the chapter menu
 */


import { useParams } from "react-router-dom";
import { ListChapterOfStory } from "../components/ListChapterOfStory";
import { ChapterForm } from "../components/ChapterForm";
import { useState, useEffect } from "react";
import {Chapter as ChapterModel} from "../models/Chapter";
import {Story as StoryModel} from "../models/Story";

export default function Chapter(){
    let params = useParams();
    let [pageData, setPageData] = useState(0);

    useEffect(()=>{

        console.log(pageData.chapters);
        async function initPageData(){
            let chapter = new ChapterModel();
            let story = new StoryModel();

            let data = {
                story: {},
                chapters: [],
                current_chapter: {}
            };

            data.story = await story.getOneById(params.story_id);
            data.chapters = await chapter.getAllChapterByStoryId(params.story_id)
            data.current_chapter = await chapter.getFirstChapterOfStoryByStoryId(params.story_id);
            setPageData(data);
        }
        
        if(!pageData){
            initPageData();
        }


    });

    async function handleUpdateCurrentChapterData(){
        let newPageData = pageData;
        let chapter = new ChapterModel();
        newPageData.chapters = await chapter.getAllChapterByStoryId(pageData.story._id);
        setPageData(newPageData)
    }

    if(pageData){
        return(
            <main id="story-page">
                <div className="row">
                    <div className="col-md-2">
                        <ListChapterOfStory pageData={pageData} />
                    </div>
                    <div className="col-md-10">
                        <ChapterForm  current_chapter={pageData.current_chapter} onChangeCurrentChapterData={handleUpdateCurrentChapterData}/>
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
                        
                    </div>
                </div>
            </main>
        )
    }
    
    
    
}