import react from "react";
import MonsterCard from "../MonsterCard/MonsterCard";
import {getMonsterIcon} from "../../utility/utility"

function MonsterCardsGrid(props) {
    const {monsterSheet, col} = props;

    const monsterCardsCol = monsterSheet.map ((monster) =>{
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
        <div 
        className={`row row-col-${col.xs} row-col-sm-${col.sm} row-col-md-${col.md} row-col-lg-${col.lg} row-col-xl-${col.xl}`}
        >
            {monsterCardsCol}
        </div>
    )
}

export default MonsterCardsGrid;