import React from 'react';
import SketchIcon from './Images/SketchIcon.svg';
import PsIcon from './Images/PsIcon.svg';
import AiIcon from './Images/AiIcon.svg';
import CssIcon from './Images/CssIcon.svg';
import XdIcon from './Images/XdIcon.svg';
import ReactIcon from './Images/ReactIcon.svg';
import HtmlIcon from './Images/HtmlIcon.svg';

const ImagesHeroHeader = ()=>(
    <div className = 'Images'>
        <img className = "ImageIcon SketchIcon" src = {SketchIcon}/>
        <img className = "ImageIcon PsIcon" src = {PsIcon}/>
        <img className = "ImageIcon AiIcon" src = {AiIcon}/>
        <img className = "ImageIcon XdIcon" src = {XdIcon}/>
        <img className = "ImageIcon ReactIcon" src = {ReactIcon}/>
        <img className = "ImageIcon HtmlIcon" src = {HtmlIcon}/>
        <img className = "ImageIcon CssIcon" src = {CssIcon}/>

    </div>
);

export default ImagesHeroHeader;