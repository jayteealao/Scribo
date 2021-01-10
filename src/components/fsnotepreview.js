import  {collectionData} from "rxfire/firestore";
import { useFireStorage } from "./../hooks/useFirebase";
import { tap, mergeMap, map, filter, distinct, scan } from "rxjs/operators";
import { from } from "rxjs";
import { useEffect, useState, useLayoutEffect } from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonProgressBar, IonRow, IonCol } from "@ionic/react";

export const FsIonGrid = function() {
    const notecollection = useFireStorage();
    const [notesraw, setnotesraw] = useState([]);
    const [noteselement, setnoteselement] = useState([]);
    const [ready, setready] = useState(false);
    
    useEffect(() => {
        const notecollectiondata$ = collectionData(notecollection, "id")
            .pipe(
                filter((data) => data !== undefined),
                tap((data) => {
                    console.log(1)
                    console.log(data);}),
                mergeMap((notes) => notes),
                tap((data) => {
                    console.log(2)
                    console.log(data["id"]);}),
                filter((note) => !(notesraw.includes(note.id))),
                tap((data) => {
                    console.log(3)
                    notesraw.push(data["id"])
                    console.log(notesraw)}),
                map((note) => {
                        return(<IonCol key={note.id} sizeSm="6" sizeMd="4" sizeLg="3">
                                <IonNotesPreview note={note} />
                            </IonCol>
                            );
                        }),
                tap((data) => {
                    console.log(4)
                    console.log(data);}),
                scan((notes, note) => [...notes, note], []),
                tap((data) => {
                    console.log(5)
                    console.log(data);
                    setready(true);})
                )

        notecollectiondata$.subscribe((data) => setnoteselement(data));
        }, [notecollection, ready, notesraw]
    )

    // console.log(notes)

    return ( 
        <>
            {
                 (ready)
                ? <IonRow>
                    {noteselement}
                  </IonRow>
                : (<IonProgressBar type="indeterminate"></IonProgressBar>)
            }
        </>
    );
}

function IonNotesPreview ({note}) {

    return (
            <IonCard href={`/notes/${note.id}`} >
                <IonCardHeader>
                    <IonCardTitle>{note.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{note.body}</IonCardContent>
            </IonCard>
    )
} 

function Grid({notes}) {
    console.log("inside grid")
    console.log(notes)

    return(
    <IonRow>
        {notes.map((note) => {
            console.log(note)
        return(<IonCol key={note.id} sizeSm="6" sizeMd="4" sizeLg="3">
                <IonNotesPreview note={note} />
            </IonCol>
            );
        })}
    </IonRow>
    )
}