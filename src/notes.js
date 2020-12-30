import React, { useState } from "react";
import {IonNotesView} from './components/notesview';
import {IonNotesGrid} from './components/notespreview';
import CreateNote from './components/createnotes';
import { IonPage, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonRouterOutlet } from "@ionic/react";
import { add } from "ionicons/icons";
import { IonReactRouter} from "@ionic/react-router";
import { Route, useParams } from "react-router-dom";

export default function Note () {
    const [showcreate, setshowcreate] = useState(false);


    return (
        <IonPage> 
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/notes/:notesid" component={IonNotesView} />
                    <Route path="/" render={() => <IonNotesGrid />} exact />
                </IonRouterOutlet>
            </IonReactRouter>
            <IonModal isOpen={showcreate} onDidDismiss={() => setshowcreate(false)}>
                <CreateNote />
                <IonButton onClick={() => setshowcreate(false)}>Done</IonButton>
            </IonModal>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={() => setshowcreate(true)}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </IonPage>
    );  
}