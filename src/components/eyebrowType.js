import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const eyebrowTypeOptions = [
    { value: 'Angry', label: 'Angry' },
    { value: 'AngryNatural', label: 'AngryNatural' },
    { value: 'Default', label: 'Default' },
    { value: 'DefaultNatural', label: 'DefaultNatural' },
    { value: 'FlatNatural', label: 'FlatNatural' },
    { value: 'RaisedExcited', label: 'RaisedExcited' },
    { value: 'RaisedExcitedNatural', label: 'RaisedExcitedNatural' },
    { value: 'SadConcerned', label: 'SadConcerned' },
    { value: 'SadConcernedNatural', label: 'SadConcernedNatural' },
    { value: 'UnibrowNatural', label: 'UnibrowNatural' },
    { value: 'UpDown', label: 'UpDown' },
    { value: 'UpDownNatural', label: 'UpDownNatural' },      

  ];

export default class EyebrowType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
              <h3 className = 'disabledwarning'>Eyebrow</h3>
              <div className = 'Select'>
            {eyebrowTypeOptions.map((v,i)=>{
                return(
                  <div onClick = {()=> this.props.handleChange8(v.value)} className = 'Avatar'>
                    <Avatar
                    skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                     style={{width: '100px', height: '100px'}} eyebrowType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }