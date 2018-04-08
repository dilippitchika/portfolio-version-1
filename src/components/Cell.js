import React from 'react';

const Cell = (props)=>{
    return(

        <div className="cell">
            <img src={props.url} className="responsive-image"/>
            <h2 className = 'headerContent'>{props.heading}</h2>
            <p className = 'subtext'>{props.subtext}</p>
            <p className = 'tags'> {props.tags}</p>
        </div>
    );
};

export default Cell;