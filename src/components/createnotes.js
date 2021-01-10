import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState, useRef} from 'react'
import { IonContent } from '@ionic/react';
import { useCreateNote } from "./../hooks/useCreateNote";

export default function CreateNote() {

	const [dateCreated, value, setValue, settings, setsettings, id, setContent] = useCreateNote();

	// const [value] = useState("type your note here")
    return (
        <IonContent>
            <ReactQuill theme="snow" value={value} onChange={setContent} {...settings}/>
        </IonContent>
    )
}