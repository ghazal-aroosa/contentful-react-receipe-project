
import './App.css';
import React from 'react';
import { client } from './client';
import Posts from './components/Posts'

class App extends React.Component {
  state={
    articles:[]
  }
  componentDidMount(){
    client.getEntries({content_type:'receipes'})
    .then((response)=>{
      console.log(response)
      this.setState({
        articles:response.items
      })

    })
    .catch(console.error)
  }
 render(){
     return(
       <div className="app">
         <div className="container">
           <header>
             <div className="wrapper">
               <span>React and Contentful</span>
             </div>
           </header>
           <main>
           <div className="wrapper"></div>
           <Posts posts={this.state.articles}/>
           </main>

         </div>

       </div>
     )
 }
}

export default App;
