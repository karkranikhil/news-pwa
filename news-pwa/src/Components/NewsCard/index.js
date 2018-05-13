import React from 'react';
import './style.css';
const NewsCard = (props)=>{
  console.log(props)
  return (
    <a href={props.news.url} className="media border p-3">
      <img src={props.news.urlToImage} alt={props.news.author} className="w-150 maxWidth-150 maxheight-100"/>
        <div className="media-body">
          <h4>{props.news.title}</h4>
          <p>{props.news.description}</p>
          <p><small><i>Source {props.news.source.name}</i></small><small className="float-right"><i>Posted on {props.news.publishedAt.slice(0,10)}</i></small></p>
        </div>
    </a>

  )
}

export default NewsCard