import { marked } from "marked";
import { useState } from "react";


export const useMarked = (initialMarkdown)=> {
    const [markdown, setMarkdown] = useState(initialMarkdown);

    html = marked(markdown);

    return {markdown, setMarkdown, html}
}