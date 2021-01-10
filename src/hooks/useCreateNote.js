import { useState } from "react";
import * as moment from 'moment';
const { nanoid } =  require("nanoid");

export function useCreateNote() {
    
    const [dateCreated] = useState(moment());

    const [value, setValue] = useState('type your notes here');

	const [id] = useState(nanoid())

	const [Html, setHtml] = useState()
	
	const setContent = function (content, delta, source, editor) {
		setValue(content)
		const text = editor.getText(content);
		console.log(content)
		console.log(text)
	}

	const modules = {
		toolbar: [
		  [{ 'header': [1, false] }],
		  ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
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
      
    const [settings, setsettings] = useState({modules, formats})

    return [dateCreated, value, setValue, settings, setsettings, id, setContent]
}