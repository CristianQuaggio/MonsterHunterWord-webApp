
import "bootstrap/dist/css/bootstrap.min.css";
import MonsterCard from "../../component/MonsterCard/MonsterCard";
import {getMonsterIcon} from "../../utility/utility"
import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom"
import style from "./Home.module.css"


function Home(props){
    const {col} = props;
    const [monsterData, setMonsterData] = useState([]);

    useEffect(() =>{

        let isMounted = true;

        fetch(`https://mhw-db.com/monsters`)
        .then(res => res.json())
        .then( res => {
            if (isMounted)
            setMonsterData(res);
        })
        .catch((error) => console.log("Error" + error));
        
        return () => {
            isMounted = false;
        }
    
    });
    
    const monsterDataShort = monsterData.filter((monster, id) => id >=33 && id <=35)
    const monsterCardsCol = monsterDataShort.map ((monster) =>{
        
        
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <MonsterCard
                name={monster.name}
                number={monster.id}
                image={getMonsterIcon(monster.name)}
                species={monster.species}
                />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>
                        <h1 className="text-center mt-4">Monster Hunter World: Hunting List</h1>
                    </div>
                    <div>
                        <h2 className="mt-3 text-md-center">Discover all the details about the creatures you can fight in the Monster Hunter World game</h2>
                    </div>
                    
                </div>
            </div>
            <div className="row">
            
                    {monsterCardsCol}
            </div>
            <div className="row">
                <div className="col-12">
                    <NavLink to={`/monsterlist`}>
                    <div className={style.type}>
                        <p className="text-center mb-0">Let's hunt!</p>
                    </div>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;