import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const League = (props) => {
    
    const {idLeague} = props.league;
   
    
    const [leagueDetails, setLeagueDetails] = useState([]);
    useEffect(() => {
        const url2 = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url2)
        .then(response => response.json())
        .then(data => setLeagueDetails(data.leagues[0]))
    },[idLeague])
    
    
    const {strBadge,strLeague,strSport} = leagueDetails;
    
    return (
        <div className='col-md-12 col-lg-4 col-sm-12'>
            <div className="card" >
                <div className="card-image-div">
                    <img src={strBadge} className="card-img-top card-image" alt="..."></img>
                </div>
                
                    <div className="card-body">
                        <div className="card-title">
                            <h5 className="card-title-text">{strLeague}</h5>
                        </div>
                        
                        <p className="card-text">Sports type: {strSport} </p>
                        <Link to={`/league/${idLeague}`}>
                            <a href="/home" className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></a>
                        </Link>
                     </div>
            </div>
        </div>
    );
};

export default League;