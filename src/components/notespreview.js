import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import notes from "./../data/notes.json";
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/react'
import { useParser } from "./../utils/parser";
import { IonNotesView } from "./notesview";


export function IonNotesGrid () {
    const [notesdata, setnotesdata] = useState(notes);

    return(
        <IonRow>
            {notesdata.map((note, index) => {
                console.log(note)
               return(<IonCol key={index}>
                    <IonNotesPreview note={note} index={index} />
                </IonCol>
                );
            })}
        </IonRow>
    );
}


export function IonNotesPreview ({note, index}) {

    console.log(note.title);

    console.log(`insideview ${note.title} ${note.body}`)

    return (
            <IonCard href={`/notes/${index}`} >
                <IonCardHeader>
                    <IonCardTitle>{note.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{note.body}</IonCardContent>
            </IonCard>
    )
} 