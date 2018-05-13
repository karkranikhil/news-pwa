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
      newsData:[],
      initialNewsData:[]
    }
  }
  componentDidMount(){
    fetch(API+KEY)
      .then(results=>{
        return results.json()
      }).then(data =>{
      this.setState({newsData:data.articles})
      this.setState({initialNewsData:data.articles})
    })
  }
  filterNews=(event)=>{
    var updatedList = this.state.initialNewsData;
    updatedList = updatedList.filter(function(item){
      return item.title.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
    console.log(updatedList);
    this.setState({newsData: updatedList});
  }

  render() {
    const newsData = this.state.newsData
    return (
      <div className="App">
        <NavBar filterNews={this.filterNews}/>
        <div className="container-fluid">
        {newsData.map((news, index) =>
              <NewsCard news={news} key={index}/>
        )}
        </div>
      </div>
    );
  }
}

export default App;
