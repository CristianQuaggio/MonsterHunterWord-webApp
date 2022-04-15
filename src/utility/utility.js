import react from "react";
import Emblem from "../assets/images/mh_logo.png"
export const noSpace = (nome) => nome?.replace(/ /g, "_");

export const getMonsterIcon = (name) =>`https://raw.githubusercontent.com/CrimsonNynja/monster-hunter-DB/master/icons/MHW-${noSpace(name)}_Icon.png`;

export const monsterDefaultImage = (onErrorEvent) => onErrorEvent.target.src = Emblem;