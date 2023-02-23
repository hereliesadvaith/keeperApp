import React from "react";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const apiURL = "http://127.0.0.1:8000"


const NewNote = () => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleContent(event) {
        setContent(event.target.value);
    }

    // let createNote = async () => {
    //     let note = { title, content };
    //     try {
    //         let response = await fetch(apiURL + "/api/notes/create/", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(note)
    //         });
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         let data = await response.json();
    //         console.log("New note created:", data);
    //     } catch (error) {
    //         console.error("Error creating new note:", error);
    //     }
    // }

    let createNote = async () => {
        let note = { title, content };
        let response = await fetch(apiURL + "/api/notes/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note)
        })
    }


    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleTitle}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleContent}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={createNote}>
                    <BsPlusLg />
                </button>
            </form>
        </div>
    )
}

export default NewNote;