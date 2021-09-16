import axios from "axios";
import React from "react";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import bg from "../images/bg.jpg";
const AdviceStyle = styled.section`
width: 100%;
height: 100vh;
background: url(${bg}) center/cover ;
display: grid;
place-items: center;
.container{
 background: transparent;
 width: 60%;
 height: 40%;
 display: grid;
 place-items: center;
 grid-template-columns: 1fr;
 text-align: center;
 border-radius: 40px;
 h1{
  padding: 0 40px;
  color: #000;
  font-size: 2rem;
  &:hover{
   animation: animacija3 1s ease-in ;
  }
 
 }

 .btn{
  padding: 1rem 2rem;
  color: #000;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 2.2rem;
  &:hover{
   animation: animacija 1s ease-in-out;
  }
  span{
    &:hover{
   animation: animacija2 2s ease-in ;
  }
  }
 }
 @keyframes animacija {
  0%{
   transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25%{
   transform: rotate(3deg) translate3d(0, 0, 0)
  }
  50%{
   transform: rotate(-3deg) translate3d(0, 0, 0)
  }
  70%{
   transform: rotate(1deg) translate3d(0, 0, 0)
  }
  100%{
   transform: rotate(0deg) translate3d(0, 0, 0)
  }
 }
 @keyframes animacija2 {
  0%{
   transform: translate3d(0, 0, 0) translateZ(0);
  }
  25%{
   transform: translate3d(3px, 0, 0) translateZ(0)
  }
  50%{
   transform: translate3d(-3px, 0, 0) translateZ(0)
  }
  70%{
   transform: translate3d(1px, 0, 0) translateZ(0)
  }
  100%{
   transform: translate3d(0, 0, 0) translateZ(0)
  }
 } @keyframes animacija3 {
  0%{
   color:  #000;
  
  }
  25%{
   color: #1E96FC;
   
  }
  50%{
   color: #D64933;
   
  }
  70%{
    color: #DABFFF;
  
  }
  100%{
   color: #000;
  }
 }
 }
@media only screen and (max-width: 800px){
 .container{
   width: 90%;
   height: 60%;
   .btn{
    font-size: 1.3rem;
   }
 }
}
`
class Advice extends React.Component{
state = {
 advice: ""
}
componentDidMount(){
 this.getAdvice()
}
getAdvice = () => {
 axios.get('https://api.adviceslip.com/advice')
 .then((response) => {
   console.log(response);
   const {advice} = response.data.slip
   this.setState({advice})
 })
 .catch((error)=>{
  console.log(error);
 })
}
render(){
 const {advice} = this.state
 return (
  <AdviceStyle>
    <Fade top>
    <div className="container">
     
    <h1>{advice}</h1>
    <button className="btn" onClick={this.getAdvice}><span>Show me Advice</span></button>
    </div>
  </Fade>
  </AdviceStyle>
 )
}

}

export default Advice