import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';

const Home = () => {
    const [leagues , setLeagues] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    } ,[])
    console.log(leagues)
    return (
        <div>
            
             <Header headerClass="homeHeader">
                <p className="header-title text-center">The Football Emporium</p>
            </Header>
             
            <div className="row leagues-div text-center">
                {
                    leagues.map(league =><League league={league} key={league.idLeague}></League>)
                } 
            </div>
            
        </div>
    );
};

export default Home;