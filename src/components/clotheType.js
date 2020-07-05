import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const clotheTypeOptions = [
    { value: 'BlazerShirt', label: 'BlazerShirt' },
    { value: 'BlazerSweater', label: 'BlazerSweater' },
    { value: 'CollarSweater', label: 'CollarSweater' },
    { value: 'GraphicShirt', label: 'GraphicShirt' },
    { value: 'Hoodie', label: 'Hoodie' },
    { value: 'Overall', label: 'Overall' },
    { value: 'ShirtCrewNeck', label: 'ShirtCrewNeck' },
    { value: 'ShirtScoopNeck', label: 'ShirtScoopNeck' },
  ];

  export default class ClotheType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
              <h3 className = 'disabledwarning'>Clothe Type</h3>
              <div className = 'Select'>
            {clotheTypeOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange5(v.value)} className = 'Avatar'>
                    <Avatar style={{width: '100px', height: '100px'}} 
                        skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                        clotheType = {v.value} /></div>
                )
            })}
            </div>
            </div>
          )
      }
  }