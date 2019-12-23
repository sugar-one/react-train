import "@babel/polyfill";
import React from 'react';

import Header from './Header';
import Picture from './Picture';
import Middle from './Middle';
import Footer from './Footer';

  
class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state={
           LtUrl:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
          //  isflag:true
        };
      }  
      clickList=(API)=>{
          this.setState({
                  LtUrl:API
              })
      }
      handleChange(isPopular){
              this.setState({isflag:isPopular})
          }
      render(){
        const style={display:'flex',width:'1200px',margin:'0 auto'}
          return(
          <div>
            <div><Header handleChange={this.handleChange.bind(this)}/></div>
            <div><Middle clickList={this.clickList.bind(this)}/></div>
            <div><Picture API={this.state.LtUrl}/></div>
            <div><Footer/></div>
          </div>
            
          )
      }
  }
export default Popular;
