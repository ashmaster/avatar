import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const accessoriesTypeOptions = [
    { value: 'Blank', label: 'Blank' },
    { value: 'Kurt', label: 'Kurt' },
    { value: 'Prescription01', label: 'Glasses 1' },
    { value: 'Prescription02', label: 'Glasses 2' },
    { value: 'Round', label: 'Round' },
    { value: 'Sunglasses', label: 'Sunglasses' },
    { value: 'Wayfarers', label: 'Wayfarers' },
  ];

  export default class TopType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            <h3 className = 'disabledwarning'>Eyewear</h3>
            <div className = 'Select'>
            {accessoriesTypeOptions.map((v,i)=>{
                return(<div onClick = {()=> this.props.handleChange2(v.value)} className = 'Avatar'>
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
                        clotheType = {this.props.avatarStyle.clotheType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                            accessoriesType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }