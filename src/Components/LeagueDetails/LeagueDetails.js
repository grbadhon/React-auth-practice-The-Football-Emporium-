import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import Header from '../Header/Header';
import MaleImg from '../../Photo/Rectangle 28.png';
import feMaleImg from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars,faFutbol,faFlag,faCalendarCheck, } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom';

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLeagueDetails(data.leagues[0]))
    },[leagueId])
    const { strBadge,strLeague,strSport,dateFirstEvent,strCountry,strGender,strDescriptionEN,strDescriptionFR,strYoutube,strTwitter,strFacebook } = leagueDetails;
    console.log(leagueDetails)
    const [clubGender, setClubGender] = useState('Male');
     const newClubGender = strGender;
     
    
    return (
        <div>
            
            <Header headerClass="leagueDetailsHeader" >
                <img className="details-header-img" src={strBadge} alt='image'></img>
            </Header>
            <div className="row clubinfo-div">
                <div className="col-md-12 col-lg-6 col-sm-12 left-div">
                    <h2> {strLeague} </h2>
                    <p><FontAwesomeIcon className="icons" icon={faCalendarCheck} />Founded: {dateFirstEvent}</p>
                    <p><FontAwesomeIcon className="icons" icon={faFlag} />Country: {strCountry} </p>
                    <p><FontAwesomeIcon className="icons" icon={faFutbol} />Sport Type: {strSport} </p>
                    <p><FontAwesomeIcon className="icons" icon={faVenusMars} />Gender: {strGender} </p>
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-end">
                    {
                        clubGender === newClubGender ?
                        <img className="gender-image" src={MaleImg} alt='image'></img> :
                        <img className="gender-image" src={feMaleImg} alt='image'></img>
                    }
                    
                     
                </div>
            </div>
            <div className="description-div">
                <p> {strDescriptionEN} </p>
                <br></br>
                <p> {strDescriptionFR} </p>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 home-button-div">
                    <Link to="/">
                        <button className="btn btn-info home-button">Return Home</button>
                    </Link>
                </div>
            </div>
            
            <div className="socialIcon-div row d-flex justify-content-center">
                <div className="col-md-1 d-flex justify-content-center">
                    <a  target="_blank" rel="noreferrer" href={`https://${strTwitter}`}>
                        <FontAwesomeIcon className="social-icons" icon={faTwitter} />
                    </a>
                </div>
                
                <div className="col-md-1 d-flex justify-content-center">
                    <a  target="_blank" rel="noreferrer" href={`https://${strFacebook}`}>
                        <FontAwesomeIcon className="social-icons" icon={faFacebook} />   
                    </a>               
                </div>
                
                <div className="col-md-1 d-flex justify-content-center">
                    <a  target="_blank" rel="noreferrer" href={`https://${strYoutube}`}>
                        <FontAwesomeIcon className="social-icons yt-icon" icon={faYoutube} />  
                    </a>     
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;