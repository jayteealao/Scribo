import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import notes from "./../data/notes.json";
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent} from '@ionic/react'
import { useParser } from "./../utils/parser";
import { useParams } from "react-router-dom";


const useNote = initialValue => {

    const [note, setnote] = useState(initialValue);

    const title = useParser(note.title)

    const body = useParser(note.body)

    const setTitle = (title) => setnote({...note, title: title});

    const setBody = (body) => setnote({...note, body: body});
    return [title, body, setTitle, setBody]
};

export function IonNotesView () {

    const { notesid } = useParams();

    console.log(notesid)

    const [title, body] = useNote(notes[notesid]);

    console.log(` insideview ${title.tostring} ${body}`)

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{body}</IonCardContent>
        </IonCard>
    )
} 

// export default function NotesView() {

//     const [value] = useNote(notes);

//     return (
//         <ReactQuill theme="snow" value={value} readOnly={true} />
//     )
// }

// export function Notesview2 () {
//     return (
//         <>
//         <div className="Note-Title">
//         this is a test note
//         </div>
//         <div>
//             <p>a sample body of an app for taking notes,built as my first ever react app</p>
//         </div>
//         </>
//     );
// }
