import react from "react";
import style from "./MonsterCard.module.css"
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import {monsterDefaultImage} from "../../utility/utility"
import {NavLink} from "react-router-dom"



function MonsterCard(props) {
    const {name, image, number, species} = props;

    return (
        <NavLink to={`/monsterlist/${number}`}>
            <div className="mb-5 pb-2">
        <Card className={style.card}>
            <CardImg className={style.image} top width="100%" onError={(event) => monsterDefaultImage(event)} src={image} alt={name}/>
            <CardBody className="text-center">
                <CardTitle tag="h5" className={'h3 ${style.title}'}>{name}</CardTitle>
                <CardText>
                    
                </CardText>
                <div className={style.type}>
                    <p className={style.species}>{species}</p>
                </div>
            </CardBody>
        </Card>
        </div>
        </NavLink>
    )
}

export default MonsterCard;