import axios from "axios";
import config from "../config.json";

export class Story {

     setData(props){
        this.data = props;
    }

    isNew(){
        return this.data.hasOwnProperty('_id');
    }

    async save(){
        
        console.log("saving");
        await axios.post("http://"+config.api.host+":"+config.api.port+"/api/story",this.data)
        .then((res) => {
            this.data = res.data
            console.log("saved");
        });

        return await this.data;
    }
}