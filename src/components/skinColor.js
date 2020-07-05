import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const skinColorOptions = [
    { value: 'Tanned', label: 'Tanned' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Pale', label: 'Pale' },
    { value: 'Light', label: 'Light' },
    { value: 'Brown', label: 'Brown' },
    { value: 'DarkBrown', label: 'DarkBrown' },
    { value: 'Black', label: 'Black' },
  ];

  export default class SkinColor extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
            <h3 className = 'disabledwarning'>Skin Color</h3>
            <div className = 'Select'>
                            {skinColorOptions.map((v,i)=>{
                                return(
                                    <div onClick = {()=> this.props.handleChange10(v.value)} className = 'Avatar'>
                                        <Avatar
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
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType} style={{width: '100px', height: '100px'}} skinColor = {v.value} />
                                    </div>
                                )
                            })}
            </div>
            </div>
          )
      }
  }