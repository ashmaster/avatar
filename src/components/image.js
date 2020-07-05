import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

export default class Image extends React.Component{
    render(){
        return(
            <img width = "100px" height = "100px" src='https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Cumbia&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Light'/>
        )
    }
}