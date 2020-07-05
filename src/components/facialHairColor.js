import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const facialHairColorOptions = [
    { value: 'Auburn', label: 'Auburn' },
    { value: 'Black', label: 'Black' },
    { value: 'Blonde', label: 'Blonde' },
    { value: 'BlondeGolden', label: 'BlondeGolden' },
    { value: 'Brown', label: 'Brown' },
    { value: 'BrownDark', label: 'BrownDark' },
    { value: 'PastelPink', label: 'PastelPink' },
    { value: 'Platinum', label: 'Platinum' },
    { value: 'Red', label: 'Red' },
    { value: 'SilverGray', label: 'SilverGray' },
  ];

  export default class facialHairColor extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
              {this.props.avatarStyle.facialHairType === "Blank"? <><h3 className = "disableWarning">Choose different facial hair</h3><h3>Facial Hair Color</h3></>: <h3 className = "disableWarning">Facial Hair Color</h3>
            }
            <div className = 'Select'>
            {facialHairColorOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange4_5(v.value)} className = 'Avatar'>
                    <Avatar style={{width: '100px', height: '100px'}} 
                        skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                        facialHairColor = {v.value} /></div>
                )
            })}
            </div>
            </div>
          )
      }
  }