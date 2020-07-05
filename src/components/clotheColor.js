import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const clotheColorOptions = [
    { value: 'Black', label: 'Black' },
    { value: 'Blue01', label: 'Blue01' },
    { value: 'Blue02', label: 'Blue02' },
    { value: 'Blue03', label: 'Blue03' },
    { value: 'Gray01', label: 'Gray01' },
    { value: 'Gray02', label: 'Gray02' },
    { value: 'Heather', label: 'Heather' },
    { value: 'PastelBlue', label: 'PastelBlue' },
    { value: 'PastelGreen', label: 'PastelGreen' },
    { value: 'PastelOrange', label: 'PastelOrange' },
    { value: 'PastelRed', label: 'PastelRed' },
    { value: 'PastelYellow', label: 'PastelYellow' },
    { value: 'Pink', label: 'Pink' },
    { value: 'Red', label: 'Red' },
    { value: 'White', label: 'White' },
    
  ];

  export default class ClotheColor extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
              {this.props.clotheType === "BlazerShirt"||this.props.clotheType === "BlazerSweater" ?  <><h3 className = "disableWarning">Choose different clothe type</h3><h3>Clothe Color</h3></>: <h3 className = "disableWarning">Clothe Color</h3>
            }
            <div className = 'Select'>
            {clotheColorOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange6(v.value)} className = 'Avatar'>
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
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                        clotheColor = {v.value} /></div>
                )
            })}
            </div>
            </div>
          )
      }
  }