import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const hairColorOptions = [
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

  export default class HairColor extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
              {this.props.disabled == true? <><h3 className = "disableWarning">Choose different top type</h3><h3>Hair Color</h3></>: <h3 className = "disableWarning">Hair Color</h3>
            }
            <div className = 'Select'>
            {hairColorOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange3(v.value)} className = 'Avatar'>
                    <Avatar style={{width: '100px', height: '100px'}}
                    skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        topType = {this.props.avatarStyle.topType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        clotheType = {this.props.avatarStyle.clotheType}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                     hairColor = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
          )
      }
  }