import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const mouthTypeOptions = [
    { value: 'Concerned', label: 'Concerned' },
    { value: 'Default', label: 'Default' },
    { value: 'Disbelief', label: 'Disbelief' },
    { value: 'Eating', label: 'Eating' },
    { value: 'Grimace', label: 'Grimace' },
    { value: 'Sad', label: 'Sad' },
    { value: 'ScreamOpen', label: 'ScreamOpen' },
    { value: 'Serious', label: 'Serious' },
    { value: 'Smile', label: 'Smile' },
    { value: 'Tongue', label: 'Tongue' },
    { value: 'Twinkle', label: 'Twinkle' },
    { value: 'Vomit', label: 'Vomit' },
  ];

  export default class MouthType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            <h3 className = 'disabledwarning'>Mouth Type</h3>
            <div className = 'Select'>
            {mouthTypeOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange9(v.value)} className = 'Avatar'>
                    <Avatar skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                     style={{width: '100px', height: '100px'}} mouthType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }