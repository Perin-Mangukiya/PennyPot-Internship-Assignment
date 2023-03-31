import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {marked} from 'marked'
import data from "./data";


function SingleBlogPage() {
    const [preview, isPreview] = useState(true);
    const [markdownContent, setMarkdownContent] = useState("");
    function handleClick(e) {
        isPreview(!preview);    
    }
    function handleChange(e) {
        setMarkdownContent(e.target.value);
    }
    const convertMarkdownToHtml = (markdown) => {
        return marked(markdown);
    }

    if (preview) {
        return (
            <Wrapper>
                <h3>Create Post</h3>
                <div className="form-group">
                    <label for="">Write a Post in Markdown</label>
                    <br />
                    <textarea
                        class="form-control"
                        name="postBody"
                        cols="30"
                        rows="8"
                        onChange={handleChange}
                    >{markdownContent}</textarea>
                </div>
                <button class="btn btn-primary form-button" type="submit" onClick={handleClick}>
                    Publish
                </button>

            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div
                id="blog-post"
                dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(markdownContent) }}
            >
            </div>
            <button className="btn btn-outline-secondary form-button" onClick={handleClick}>Modify Post</button>
        </Wrapper> 
    );
}

export default SingleBlogPage;

const Wrapper = styled.div`
    ${'' /* width: 100%; */}
    margin-inline: 150px;
    margin-block: 100px;

    .form-button {
        margin-top: 20px;
    }
    .form-group {
        padding-top: 20px;
    }
`;
