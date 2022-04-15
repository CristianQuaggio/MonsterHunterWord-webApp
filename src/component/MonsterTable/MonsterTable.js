import react from "react";
import style from "./MonsterTable.module.css"
import {getMonsterIcon, monsterDefaultImage} from "../../utility/utility"
import {NavLink} from "react-router-dom"



function MonsterTable(props) {
    const {monsterSheet} = props;

    const monsterTr = monsterSheet.map((monster)=> {

        return (
            <NavLink to={`/monsterlist/${monster.id}`}>
                    <tr className="row py-4" key={monster.id}>
                        <td className="col-5 col-md-3 d-flex justify-content-center" id={style.monsterImage}>
                            <div>
                            <img onError={(event) => monsterDefaultImage(event)}
                            src={getMonsterIcon(monster.name)}
                            alt={monster.name}
                            loading="lazy"/>
                            </div>
                        </td>
                        <td className="col-7 col-md-4 ">
                            <h3 className="">{monster.name}</h3>
                            <div className="d-md-none">
                                <div className={style.type}>
                                    <p className={style.species}>{monster.species}</p>
                                </div>
                            </div>
                        </td>
                        <td className="col col-md-5 d-none d-md-table-cell">
                            <div className={style.type}>
                                <p className={style.species}>{monster.species}</p>
                            </div>
                        </td>
                    </tr>
            </NavLink>
        )
    });
    return (
    <table className="table">
        <thead className="container">
            <tr className="row">
                <th className="text-center col-5 col-md-3">Icon</th>
                <th className="col-7 col-md-4">Name<span className="d-md-none">/Species</span></th>
                <th id={style.marginTh} className="col-7 text-md-center col-md-5 d-none d-md-table-cell">Species</th>
            </tr>
        </thead>
        <tbody className="container">
            {monsterTr}
        </tbody>
    </table>
    )
}

export default MonsterTable;