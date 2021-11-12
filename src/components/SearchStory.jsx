import React, {useState} from "react";

function SearchStory(props){
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        /*
        props.onSubmit({
            
        });
        */
        setInput('');

    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" value={input} name="text" className="search-input" onChange={handleChange} />
            <button className="search-button">Find</button>
        </form>
    )
}

export default SearchStory;
