import React from 'react';
import './home.css';


export default class Home extends React.Component{
  render(){
    return (
        <div>
            <div class="imgBg">   
            </div>
            <div class="main">
                <div class="title">
                    <h1>
                        <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>Harry</span>
                        <br></br>&nbsp;
                        <span class="gradienttext" style={{background: "linear-gradient(#E01A4F, #EF626C)"}}>Brown</span>
                    </h1>
                    <br></br>
                </div>
            </div>
        </div>
        
    );
  }
}