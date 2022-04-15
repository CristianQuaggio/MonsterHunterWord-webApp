import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MonsterCardsGrid from "../../component/MonsterCardsGrid/MonsterCardsGrid";
import MonsterTable from "../../component/MonsterTable/MonsterTable";
import style from "./MonsterList.module.css"
import clsx from "clsx";



function MonsterList(){

    const [displayGrid, setDisplayGrid] = useState("true");
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
    return (
        <div className="container">
            <div id={style.h1MonsterList} className="row">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
                    <h1 >Monster List</h1>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div className={style.switch}>
                        <div className={clsx(style.option, {[style.active]: displayGrid})}
                        onClick={() => setDisplayGrid(true)}>
                            Grid
                        </div>
                        <div className={clsx(style.option, {[style.active]: !displayGrid})}
                        onClick={() => setDisplayGrid(false)}>
                            Table
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    {
                    displayGrid ?
                    <MonsterCardsGrid 
                    monsterSheet={monsterData}
                    col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                    /> :   
                    <MonsterTable monsterSheet={monsterData}/>
                    }
                </div>
            </div>
        </div>
    )
};

export default MonsterList;