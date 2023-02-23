import React from "react";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai"

const apiURL = "https://keeperapp-ckg1.onrender.com"

function ListNotes() {

    const ListItem = ({ note }) => {

        let deleteNote = async () => {
            setNotes((prevNotes) => {
                return prevNotes.filter((noteItem) => {
                    return noteItem.id !== note.id;
                })
            })
            fetch(apiURL + "/api/notes/" + note.id + "/delete/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

        }

        return (
            <div className="note">
                <h1>{note.title}</h1>
                <p>{note.body}</p>
                <button onClick={deleteNote}>
                    <AiFillDelete />
                </button>
            </div>
        )
    }

    const [notes, setNotes] = useState([]);

    let getNotes = async () => {
        let response = await fetch(apiURL + "/api/notes/");
        let data = response.json();
        data.then((values) => {
            // console.log("values", values);
            setNotes(values);
        });
    }

    useEffect(() => {
        getNotes();
    }, [])



    return (
        <div>
            {notes.map((note, index) => {
                return (
                    <ListItem key={index} note={note} />
                )
            })}
        </div>
    )
}

export default ListNotes;
