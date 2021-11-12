import axios from "axios";
import config from "../config.json";

export class Story {

    constructor(){
        this.url = "http://"+config.api.host+":"+config.api.port+"/api/story"
    }

     setData(props){
        this.data = props;
    }

    isNew(){
        return this.data.hasOwnProperty('_id');
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
}