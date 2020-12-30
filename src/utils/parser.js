import { useState } from 'react'

// const htmlparser2 = require("htmlparser2");
const parse = require('html-react-parser')

// const parser = htmlparser2

export function useParser (htmlstring) {
    const [html] = useState(htmlstring);

    return parse(html)
};