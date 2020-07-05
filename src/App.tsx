import React from 'react';
import Avatar from 'avataaars'
import './App.css';
import * as fileSaver from 'file-saver'
import * as ReactDOM from 'react-dom'
import AccessoriesType from './components/accessoriesType'
import HatColor from './components/hatColor'
import ClotheType from './components/clotheType'
import ClotheColor from './components/clotheColor'
import EyebrowType from './components/eyebrowType'
import EyeType from './components/eyeType'
import FacialHairColor from './components/facialHairColor'
import FacialHairType from './components/facialHairType'
import GraphicType from './components/graphicType'
import HairColor from './components/hairColor'
import MouthType from './components/mouthType'
import SkinColor from './components/skinColor'
import Top from './components/Top'
import './css/carousel.css'
import Image from './components/image'
import { Carousel } from 'react-responsive-carousel';



class App extends React.Component<any,any> {
  constructor(props: any){
    super(props)
    this.state = {
      topType:'Head',
      accessoriesType:'Eye Wear',
      hairColor:'Hair Color',
      haircolord:false,
      hatColor:'Hat Color',
      hatcolord:false,
      facialHairType:'Facial Hair',
      facialHairColor:'Facial Hair Color',
      clotheType:'Cloth',
      clotheColor:'Cloth Color',
      graphicType:'Graphic Type',
      eyeType:'Eye',
      eyebrowType:'EyeBrow',
      mouthType:'Mood',
      skinColor:'Skin Color'
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange4_5 = this.handleChange4_5.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange6_5 = this.handleChange6_5.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
  }
  
  async handleChange1(selectedOption:string){
    console.log(selectedOption)
    await this.setState({ topType:selectedOption });
    console.log(this.state.topType)
    if(this.state.topType === "NoHair"||this.state.topType ==="Eyepatch"||this.state.topType ==="Hat"||this.state.topType ==="Hijab"||this.state.topType ==="Turban"||this.state.topType ==="WinterHat1"||this.state.topType ==="WinterHat2"||this.state.topType ==="WinterHat3"||this.state.topType ==="WinterHat3"){
      if(this.state.topType === "Hijab"||this.state.topType==="Turban"||this.state.topType==="WinterHat1"||this.state.topType==="WinterHat2"||this.state.topType==="WinterHat3"||this.state.topType==="WinterHat4")
        await this.setState({haircolord:true,hatcolord:false})
      else 
        await this.setState({haircolord:true,hatcolord:true})
    }
    else{
      await this.setState({haircolord:false,hatcolord:true})
    }
    console.log(this.state.haircolord)
  };
  handleChange2 = (selectedOption:string) => {
    this.setState({ accessoriesType:selectedOption });
  };
  handleChange3 = (selectedOption:string) => {
    this.setState({ hairColor:selectedOption });
  };
  handleChange4 = (selectedOption:string) => {
    this.setState({ facialHairType:selectedOption });
    console.log(this.state.facialHairType)
  };
  handleChange4_5 = (selectedOption:string) => {
    this.setState({ facialHairColor:selectedOption });
  };
  handleChange5 = (selectedOption:string) => {
    this.setState({ clotheType:selectedOption });
  };
  handleChange6 = (selectedOption:string) => {
    this.setState({ clotheColor:selectedOption });
  };
  handleChange6_5 = (selectedOption:any) => {
    this.setState({ graphicType:selectedOption });
  };
  handleChange7 = (selectedOption:string) => {
    this.setState({ eyeType:selectedOption });
  };
  handleChange8 = (selectedOption:string) => {
    this.setState({ eyebrowType:selectedOption });
  };
  handleChange9 = (selectedOption:string) => {
    this.setState({ mouthType:selectedOption });
  };
  handleChange10 = (selectedOption:string) => {
    this.setState({ skinColor:selectedOption });
  };
  handleChange11 = (selectedOption:string) => {
    this.setState({ hatColor:selectedOption });
  };/* handleSave(){
    this.onDownloadSVG()
  }*/
  private avatarRef: Avatar | null = null
  private canvasRef: HTMLCanvasElement | null = null
  render(){
      return (
        <div className="App">
          <header className="App-header">
              
              <Avatar
                  ref={(body) => { this.avatarRef = body; }}
                  style={{width: '200px', height: '200px'}}
                  avatarStyle='Circle'
                  topType={this.state.topType}
                  accessoriesType={this.state.accessoriesType}
                  hairColor={this.state.hairColor}
                  facialHairType={this.state.facialHairType}
                  facialHairColor = {this.state.facialHairColor}
                  clotheType={this.state.clotheType}
                  clotheColor={this.state.clotheColor}
                  graphicType={this.state.graphicType}
                  eyeType={this.state.eyeType}
                  eyebrowType={this.state.eyebrowType}
                  mouthType={this.state.mouthType}
                  skinColor={this.state.skinColor}
                />
          </header>
          <div className = "carousel">
          <Carousel axis="horizontal" showThumbs={false} dynamicHeight = {false} showIndicators=  {false} showStatus = {false} className = 'carousel'>
                    <SkinColor skinColor = {this.state.skinColor} avatarStyle = {this.state} handleChange10 = {this.handleChange10}/>
                    <EyeType avatarStyle = {this.state} handleChange7 = {this.handleChange7}/>
                    <EyebrowType avatarStyle = {this.state} handleChange8 = {this.handleChange8}/>
                    <MouthType avatarStyle = {this.state} handleChange9 = {this.handleChange9}/>
                    <Top avatarStyle = {this.state} handleChange1 = {this.handleChange1}/>
                    <HairColor disabled = {this.state.haircolord} avatarStyle = {this.state}handleChange3 = {this.handleChange3}/>
                    <HatColor disabled = {this.state.hatcolord} avatarStyle = {this.state} hatColor = {this.state.hatColor} handleChange11 = {this.handleChange11}/>
                    <FacialHairType avatarStyle = {this.state} handleChange4 = {this.handleChange4}/>
                    <FacialHairColor avatarStyle = {this.state} handleChange4_5 = {this.handleChange4_5}/>
                    <ClotheType avatarStyle = {this.state} handleChange5 = {this.handleChange5}/>
                    <GraphicType avatarStyle = {this.state} handleChange6_5 = {this.handleChange6_5} clotheType = {this.state.clotheType}/>
                    <ClotheColor avatarStyle = {this.state} clotheType = {this.state.clotheType} handleChange6 = {this.handleChange6}/>
                    <AccessoriesType avatarStyle = {this.state} handleChange2 = {this.handleChange2} />
          </Carousel>
          </div>
        </div>
      );
  }
}

export default App;
