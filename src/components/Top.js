import React from 'react';
import Avatar from 'avataaars';
import '../App.css';
import Select from 'react-select';

const topTypeOptions = [
    { value: 'NoHair', label: 'NoHair' },
    { value: 'Eyepatch', label: 'Eyepatch' },
    { value: 'Hat', label: 'Hat' },
    { value: 'Hijab', label: 'Hijab' },
    { value: 'Turban', label: 'Turban' },
    { value: 'WinterHat1', label: 'WinterHat1' },
    { value: 'WinterHat2', label: 'WinterHat2' },
    { value: 'WinterHat3', label: 'WinterHat3' },
    { value: 'WinterHat4', label: 'WinterHat4' },
    { value: 'LongHairBigHair', label: 'LongHairBigHair(Women)' },
    { value: 'LongHairBob', label: 'LongHairBob(Women)' },
    { value: 'LongHairBun', label: 'LongHairBun(Women)' },
    { value: 'LongHairCurly', label: 'LongHairCurly(Women)' },
    { value: 'LongHairCurvy', label: 'LongHairCurvy(Women)' },
    { value: 'LongHairDreads', label: 'LongHairDreads(Women)' },
    { value: 'LongHairFrida', label: 'LongHairFrida(Women)' },
    { value: 'LongHairFro', label: 'LongHairFro(Women)' },
    { value: 'LongHairFroBand', label: 'LongHairFroBand(Women)' },
    { value: 'LongHairNotTooLong', label: 'LongHairNotTooLong(Women)' },
    { value: 'LongHairShavedSides', label: 'LongHairShavedSides(Women)' },
    { value: 'LongHairMiaWallace', label: 'LongHairMiaWallace(Women)' },
    { value: 'LongHairStraight', label: 'LongHairStraight(Women)' },
    { value: 'LongHairStraight2', label: 'LongHairStraight2(Women)' },
    { value: 'LongHairStraightStrand', label: 'LongHairStraightStrand(Women)' },
    { value: 'ShortHairDreads01', label: 'ShortHairDreads01(Men)' },
    { value: 'ShortHairDreads02', label: 'ShortHairDreads02(Men)' },
    { value: 'ShortHairFrizzle', label: 'ShortHairFrizzle(Men)' },
    { value: 'ShortHairShaggyMullet', label: 'ShortHairShaggyMullet(Men)' },
    { value: 'ShortHairShortCurly', label: 'ShortHairShortCurly(Men)' },
    { value: 'ShortHairShortFlat', label: 'ShortHairShortFlat(Men)' },
    { value: 'ShortHairShortRound', label: 'ShortHairShortRound(Men)' },
    { value: 'ShortHairShortWaved', label: 'ShortHairShortWaved(Men)' },
    { value: 'ShortHairSides', label: 'ShortHairSides(Men)' },
    { value: 'ShortHairTheCaesar', label: 'ShortHairTheCaesar(Men)' },
    { value: 'ShortHairTheCaesarSidePart', label: 'ShortHairTheCaesarSidePart(Men)' },
  ];

  export default class Top extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
            <div>
            <h3 className = 'disabledwarning'>Top Type</h3>
            <div className = 'Select'>
            {topTypeOptions.map((v,i)=>{
                return(
                    <div onClick = {()=> this.props.handleChange1(v.value)} className = 'Avatar'>
                    <Avatar style={{width: '100px', height: '100px'}}
                    skinColor = {this.props.avatarStyle.skinColor}
                        eyeType = {this.props.avatarStyle.eyeType}
                        eyebrowType = {this.props.avatarStyle.eyebrowType}
                        mouthType = {this.props.avatarStyle.mouthType}
                        facialHairColor = {this.props.avatarStyle.facialHairColor}
                        facialHairType = {this.props.avatarStyle.facialHairType}
                        hairColor = {this.props.avatarStyle.hairColor}
                        hatColor = {this.props.avatarStyle.hatColor}
                        graphicType = {this.props.avatarStyle.graphicType}
                        clotheType = {this.props.avatarStyle.clotheType}
                        clotheColor = {this.props.avatarStyle.clotheColor}
                        accessoriesType = {this.props.avatarStyle.accessoriesType}
                    topType = {v.value} />
                    </div>
                )
            })}
            </div>
            </div>
            
          )
      }
  }