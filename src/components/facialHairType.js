import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const facialHairOptions = [
    { value: 'Blank', label: 'Blank' },
    { value: 'BeardMedium', label: 'BeardMedium' },
    { value: 'BeardLight', label: 'BeardLight' },
    { value: 'BeardMajestic', label: 'BeardMajestic' },
    { value: 'MoustacheFancy', label: 'MoustacheFancy' },
    { value: 'MoustacheMagnum', label: 'MoustacheMagnum' },
  ];

  export default class FacialHairType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            <h3 className = 'disabledwarning'>Facial Hair</h3>
            <div className = 'Select'>
            {facialHairOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange4(v.value)} className = 'Avatar'>
                        <Avatar style={{width: '100px', height: '100px'}}
                        skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                         facialHairType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }