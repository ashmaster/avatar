import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const eyeTypeOptions = [
    { value: 'Close', label: 'Close' },
    { value: 'Cry', label: 'Cry' },
    { value: 'Default', label: 'Default' },
    { value: 'Dizzy', label: 'Dizzy' },
    { value: 'EyeRoll', label: 'EyeRoll' },
    { value: 'Happy', label: 'Happy' },
    { value: 'Hearts', label: 'Hearts' },
    { value: 'Side', label: 'Side' },
    { value: 'Squint', label: 'Squint' },
    { value: 'Surprised', label: 'Surprised' },
    { value: 'WinkWacky', label: 'WinkWacky' },   

  ];

  export default class EyeType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            <h3 className = 'disabledwarning'>Eye Type</h3>
            <div className = 'Select'>
                            {eyeTypeOptions.map((v,i)=>{
                                return(
                                    <div onClick = {()=> this.props.handleChange7(v.value)} className = 'Avatar'>
                                        <Avatar skinColor = {this.props.avatarStyle.skinColor}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType} style={{width: '100px', height: '100px'}} eyeType = {v.value} />
                                    </div>
                                )
                            })}
            </div>
            </div>
          )
      }
  }