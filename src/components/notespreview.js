import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import notes from "./../data/notes.json";
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonItemDivider } from '@ionic/react'
import { useParser } from "./../utils/parser";


export function IonNotesGrid () {
    const [notesdata] = useState(notes);

    return(
        <IonRow>
            {notesdata.map((note, index) => {
                console.log(note)
               return(<IonCol key={index} sizeSm="6" sizeMd="4" sizeLg="3">
                    <IonNotesPreview note={note} index={index} />
                </IonCol>
                );
            })}
        </IonRow>
    );
}


export function IonNotesPreview ({note, index}) {

    const title = useParser(note.title);

    const body = useParser(note.body);

    return (
            <IonCard href={`/notes/${index}`} >
                <IonCardHeader>
                    <IonCardTitle>{title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{body}</IonCardContent>
            </IonCard>
    )
} 