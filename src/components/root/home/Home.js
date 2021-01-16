import React, { Fragment } from 'react';
import './home.css'
import { useEffect, useState } from 'react';

const apiUrl = "https://kitsu.io/api/edge/anime?page[limit]=14&page[offset]=0";

const AnimeComponent = (props) => {
    return ( 
      <Fragment>
        <div className="home">
    <div className="container">
        <p className="title-text">{props.title}</p>
        <img className="container__image" src={props.image} alt="descrpiton"></img>
       
        <p className="container__text">{props.description}</p>
        <p className="details">Average Rating: {props.rating}</p>
        <p className="details">Start Date: {props.startDate}</p>
        <p className="details">End Date: {props.endDate}</p>
        <p className="details">popularity: {props.popularity}</p>
        <p className="details">Age Rating: {props.ageRating}</p>
        <p className="details">Status: {props.status}</p>
        <p className="details">Episodes: {props.episodes}</p>
        <a href={"https://www.youtube.com/watch?v="+props.trailer} target="_blank">watch trailer</a>
      </div>
      </div>
      </Fragment>
      )
  }


const Animes = () => {
  const [animes, setAnimes] = useState(undefined);
  useEffect(() => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) =>{
            let data = result
             setAnimes(data.data)
          },(error) =>{
            console.log(error);
          }
        )
  }, []);

    const animeComp = (animes !== undefined) ?
    animes.map((anime, index) => <AnimeComponent key={index} title={anime.attributes.slug} description={anime.attributes.description} image={anime.attributes.posterImage.small} rating={anime.attributes.averageRating} startDate={anime.attributes.startDate} endDate={anime.attributes.endDate} popularity={anime.attributes.popularityRank} ageRating={anime.attributes.ageRatingGuide}  status={anime.attributes.status} episodes={anime.attributes.episodeCount} trailer={anime.attributes.youtubeVideoId}></AnimeComponent> 
    ) :  " ";

    return (
        <div className="home">
        
         {animeComp }
    
        </div>
      );
    }
export default Animes;
