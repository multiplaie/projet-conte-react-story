import axios from "axios";
import config from "../config.json";

export class Chapter{
    constructor(props){
        this.url = "http://"+config.api.host+":"+config.api.port+"/api/chapter";
        this.data = {
            title: null,
            content: null,
            annotations: null,
            children: [],
            assets: [],
            story: null,
            archive: null,
            start: false,
            _id: undefined
        }
        if(props){
            this.data = props
        }

        
    }

    async getFirstChapterOfStoryByStoryId(story_id){
        let chapter = {};
        await axios.get(this.url+"/firstChapterOfStoryByStoryId/"+story_id)
        .then((res)=>{
            chapter = res.data
        })
        .catch((err)=>{
            console.log(err)
        })
        return await chapter
    }


    async getOne(id){
        let chapter = {};
        await axios.get(this.url+"/oneById/"+id)
        .then((res) => {
           chapter = res.data
        })
        .catch((err)=>{
            console.log(err)
        })
        return await chapter;
    }

    async save(){
        
        console.log("saving");
        await axios.post(this.url,this.data)
        .then((res) => {
            this.data = res.data
            console.log("saved");
        });

        return await this.data;
    }

    async archive(){
        await axios.delete(this.url+"/"+this.data._id)
        .then((res)=>{
            this.data = res.data
        }).catch((err)=>{
            console.log(err)
        })

        return await this.data;
    }

    async getAllChapterByStoryId(story_id){
        let chapters = [];
        await axios.get(this.url+"/allActiveByStory/"+story_id)
        .then((res) => {
           chapters = res.data
        })
        .catch((err)=>{
            console.log(err)
        })

        return await chapters;
    }
}