import React from 'react';
import Cell from './Cell';


const LinkContent = (props)=>(
        <div className="container">
            <div className="grid">
                {props.contents.map(({url, heading, subtext, tags})=> <Cell url={url} heading={heading} subtext = {subtext} tags={tags}/>)}
            </div>
        </div>
);

export default LinkContent;