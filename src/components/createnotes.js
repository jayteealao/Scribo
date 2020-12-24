import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState} from 'react'
import { IonContent } from '@ionic/react';

const modules = {
    toolbar: [
      [{ 'header': [1, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote', 'code-black'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

export default function CreateNote() {

    const [value, setValue] = useState('type your notes here');

    return (
        <IonContent>
            <ReactQuill theme="snow" value={value} />
        </IonContent>
    )
}