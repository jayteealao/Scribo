import 'firebase/firestore';
import { createContext, useEffect, useState, useContext, useLayoutEffect } from "react";

export const FireStoreContext = createContext(); //context for the firestore provider declared here

export const FireStoreProvider = function({firebaseapp, children}) {

    const [firestoreNotesref, setfirestoreNotesref] = useState();

    useLayoutEffect(
        () => {
            const notesref = firebaseapp.firestore().collection("Notes");
            setfirestoreNotesref(notesref);}, 
        [firebaseapp]
        )

    return(<FireStoreContext.Provider value={firestoreNotesref}>
            {children}
        </FireStoreContext.Provider>
    )

}

export const useFireStorage = () => useContext(FireStoreContext);