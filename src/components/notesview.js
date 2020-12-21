import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import notes from "./../data/notes.json";

const useNote = initialValue => {
    const [note, setnote] = useState(initialValue);
    
    const value = `${note.title} ${note.body}`;

    const setTitle = (title) => setnote({...note, title: title});

    const setBody = (body) => setnote({...note, body: body});
    return [value, setTitle, setBody]
};

export default function NotesView() {

    const [value] = useNote(notes);

    return (
        <ReactQuill theme="snow" value={value} readOnly={true} />
    )
}

export function Notesview2 () {
    return (
        <>
        <div className="Note-Title">
        this is a test note
        </div>
        <div>
            <p>a sample body of an app for taking notes,built as my first ever react app</p>
        </div>
        </>
    );
}