import React from 'react';
import './style.css';
const NewsCard = (props)=>{
  return (
    <div href={props.news.url} className="row border p-3">
        <div className="col-sm-3">
          <img src={props.news.urlToImage} alt={props.news.author} className="w-150 maxWidth-150 maxheight-100 img-fluid"/>
        </div>
        <div className="col-sm-8">
          <h4>{props.news.title}</h4>
          <p>{props.news.description}</p>
          <p><small><i>Source {props.news.source.name}</i></small><small className="float-right"><i>Posted on {props.news.publishedAt.slice(0,10)}</i></small></p>
        </div>
    </div>

  )
}

export default NewsCard