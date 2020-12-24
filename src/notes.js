import React from "react";
import {IonNotesView} from './components/notesview';
import CreateNote from './components/createnotes';
import { IonContent, IonPage } from "@ionic/react";

export default function Note () {

    return (
        <IonPage> 
            <CreateNote />
            <IonNotesView />
        </IonPage>
    )
    
}