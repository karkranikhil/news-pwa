import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/index'
import NewsCard from './Components/NewsCard/index'

const API = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
const KEY = '16c65dfb03cb47cfa8e4f035c0a3fcec';

class App extends Component {
  constructor(){
    super();
    this.state={
      newsData:[]
    }
  }
  componentDidMount(){
    fetch(API+KEY)
      .then(results=>{
        return results.json()
      }).then(data =>{
      this.setState({newsData:data.articles})
      console.log(data)
      console.log(this.state.newsData)
    })
  }

  render() {
    const newsData = this.state.newsData
    return (
      <div className="App">
        <NavBar/>
        <div className="row">
        {newsData.map((news, index) =>
            <div className="col-sm-12" key={index}>
              <NewsCard news={news}/>
            </div>
        )}
        </div>
      </div>
    );
  }
}

export default App;
