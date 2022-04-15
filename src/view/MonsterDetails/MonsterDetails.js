import React, {useState, useEffect} from "react";
import style from "./MonsterDetails.module.css"
import { NavLink, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from "reactstrap";
import {getMonsterIcon, monsterDefaultImage} from "../../utility/utility"
    

function MonsterDetails(){
    const {number} = useParams();
    const id = parseInt(number);
    

    const [monsterData, setMonsterData] = useState([]);

    useEffect(() =>{

        let isMounted = true;

        fetch(`https://mhw-db.com/monsters/${id}`)
        .then(res => res.json())
        .then( res => {
            if (isMounted)
            setMonsterData(res);
        })
        .catch((error) => console.log("Error" + error));
        
        return () => {
            isMounted = false;
        }
    
    }, [id]);
    
    let elements = [];
    if(monsterData && monsterData.elements){
        Object.keys(monsterData.elements).map((key) => {
            if (typeof monsterData.elements[key] === 'string')
                return elements.push({src: monsterData.elements[key], name: key})
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className={style.switch}>

                        {id - 1 !== 0 &&
                            <NavLink  to={`/monsterlist/${id - 1}`}>
                                <div className={style.option}>
                                    Prev
                                </div>
                            </NavLink>
                        }
                        {id + 1 <= 60 &&
                    
                            <NavLink to={`/monsterlist/${id + 1}`}>
                                <div className={style.option}>
                                    Next
                                </div>
                            </NavLink>  
                        }
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center justify-content-md-start">
                <h1 >{monsterData.name}</h1>
            </div>
            </div>
            <div className="row">
                <div className="col-12 order-md-2 col-md-6 col-lg-5">
                    <Card className={style.card}>
                        <div className={style.image}>
                            <img onError={(event) => monsterDefaultImage(event)}
                            src={getMonsterIcon(monsterData.name)}
                            alt={monsterData.id}/>
                        </div>
                        {monsterData.species &&
                        <div>
                            <p className="text-center mb-2 mt-4">Species:</p>
                            <div className={style.type}>
                                <p className={style.species}>{monsterData.species}</p>
                            </div>
                        </div>
                        }


                        {monsterData.type &&
                        <div>
                            <p className="text-center mb-2 mt-4">Size:</p>
                            <div className={style.type}>
                                <p className={style.species}>{monsterData.type}</p>
                            </div>
                        </div>
                        }
                        <div>
                            <p className="text-center mb-2 mt-4">Element/Status:</p>
                            <div className="row pt-3 px-4">
                            {monsterData.elements &&
                                <>
                                {elements.map((elementsItem) => {
                                    return <div className="col text-center">
                                        <div className={style.elem}>
                                        <img key={elementsItem.src}
                                    src={require(`../../assets/images/${elementsItem.src}.png`).default }
                                    alt={elementsItem.src}/>
                                    </div>
                                    <p className="text-capitalize">{elementsItem.src}</p>
                                    
                                    </div>
                                    }
                                    
                                )}
                                </>
                            }
                            {monsterData.ailments &&
                                <>
                                {monsterData.ailments.map((ailmentsItem) => {
                                    return <div className="col text-center">
                                        <div className={style.elem}>
                                        <img key={ailmentsItem.name}
                                    src={require(`../../assets/images/${ailmentsItem.name}.png`).default }
                                    alt={ailmentsItem.name}/>
                                    </div>
                                    <p>{ailmentsItem.name}</p>
                                    </div>
                                    
                                    }
                                    
                                    
                                )}
                                </>
                            }
                            </div>
                        </div>    
                    </Card>
                </div>
                <div className="col-12 order-md-1 col-md-6 col-lg-7">

                    <div>
                    {monsterData.description &&
                        <div>
                            <div className={style.line}>
                                <h3>Description:</h3>
                            </div>
                            <p>{monsterData.description}</p>
                            
                        </div>
                        }
                    </div>

                    {monsterData.locations &&
                                <div>
                                    <div className={style.line}>
                                        <h3>Locations:</h3>
                                    </div>
                                {monsterData.locations.map((locationsItem) => {
                                    return <div className={style.locationBox}>
                                        <p>{locationsItem.name}</p>
                                        </div>
                                    }   
                                )}
                                </div>
                    }

                    {monsterData.resistances &&
                        <div>
                            <div className={style.line}>
                                <h3>Resistances:</h3>
                            </div>
                        {monsterData.resistances.map((resistancesItem) => {
                            return <><img key={resistancesItem.element}
                            src={require(`../../assets/images/${resistancesItem.element}.png`).default }
                            alt={resistancesItem.element}/>
                            <p className="text-capitalize">{resistancesItem.element}</p>
                            </>
                            }   
                        )}
                        </div>
                    }
                    
                    {monsterData.weaknesses &&
                        <div className="">
                            <div className={style.line}>
                                <h3>Weaknesses:</h3>
                            </div>
                            <table className={style.boh}>
                                <thead className="container">
                                    <tr className="row mx-1">
                                        <th className="col">Element</th>
                                        <th className="col">Star</th>
                                    </tr>

                                </thead>
                                <tbody>
                                {monsterData.weaknesses.map((weaknessesItem) => {
                                    return <>
                                    <tr className="row mx-1">
                                        <td className="col d-flex align-items-center">
                                            <p className="text-capitalize mb-0">{weaknessesItem.element}</p>
                                        </td>
                                        <td className="col">
                                            <img key={weaknessesItem.stars}
                                            src={require(`../../assets/images/${weaknessesItem.stars}_star.svg`).default }
                                            alt={weaknessesItem.stars}/>
                                        </td>
                                    </tr>
                                    
                                    
                                    </>
                                    }   
                                )}
                                </tbody>
                            </table>
                        </div>
                    }

                </div>
            </div>        

                
            
        </div>
    )
};

/**/

export default MonsterDetails;