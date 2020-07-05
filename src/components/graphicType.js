import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const graphicTypeOptions = [
    { value: 'Bat', label: 'Bat' },
    { value: 'Cumbia', label: 'Cumbia' },
    { value: 'Deer', label: 'Deer' },
    { value: 'Diamond', label: 'Diamond' },
    { value: 'Hola', label: 'Hola' },
    { value: 'Pizza', label: 'Pizza' },
    { value: 'Resist', label: 'Resist' },
    { value: 'Selena', label: 'Selena' },
    { value: 'Bear', label: 'Bear' },
    { value: 'SkullOutline', label: 'SkullOutline' },
    { value: 'Skull', label: 'Skull' },    
  ];

  export default class GraphicType extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            {!(this.props.avatarStyle.clotheType === "GraphicShirt")?  <><h3 className = "disableWarning">Choose different clothe type</h3><h3>TShirt Graphics</h3></>: <h3 className = "disableWarning">TShirt Graphics</h3>
          }
          <div className = 'Select'>
            {graphicTypeOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange6_5(v.value)} className = 'Avatar'>
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
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                        graphicType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }