import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Info.module.css"


function Info(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>
                        <h1 className="text-center mt-4">Monster Hunter World information</h1>
                    </div>
                    <div>
                        <h2 className="mt-3 text-center">A franchise with years of history</h2>
                    </div>
                    <div>
                        <p className="mt-3">Monster Hunter is a Japanese media franchise centered around a series of fantasy-themed action role-playing video games that started with the game Monster Hunter for PlayStation 2, released in 2004. Titles have been released across a variety of platforms, including personal computers, home consoles, portable consoles, and mobile devices. The series is developed and published by Capcom.</p>

                        <p>The games are primarily action role-playing games. The player takes the role of a Hunter, slaying or trapping large monsters across various landscapes as part of quests given to them by locals, with some quests involving the gathering of a certain item or items, which may put the Hunter at risk of facing various monsters. As part of its core gameplay loop, players use loot gained from slaying monsters, gathering resources, and quest rewards to craft improved weapons, armor, and other items that allow them to face more powerful monsters. All main series titles feature multiplayer (usually up to four players cooperatively), but can also be played single player.</p>


                    </div>
                    <div className="text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/7/71/Monster_Hunter_logo.png" alt="Monster Hunter Logo"/>
                    </div>
                    <div>
                        <h3 className="mt-3 text-center">Monster Hunter World</h3>
                    </div>
                    <div>
                        <p className="mt-3">Monster Hunter: World received critical acclaim upon release, with critics praising how Capcom was able to make the game more accessible to new players and to Western markets, without detracting from the series' core gameplay elements and enjoyable difficulty, and fully taking advantage of the computational capacity of modern consoles to create living ecosystems, with some even calling it the best in the franchise.<br/> Monster Hunter: World is the single highest-selling game in Capcom's history, with over 20 million copies shipped by October 2021. A DLC expansion pack, subtitled Iceborne, was released for home consoles in September 2019 and for Windows in January 2020, and reached over 8.5 million sales by September 2021.<br/> The next mainline installment, Monster Hunter Rise, was co-developed alongside World and announced for a worldwide release on Nintendo Switch in March 2021, with a Microsoft Windows version released the following year.</p>


                    </div>
                    <div className="text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg" alt="Monster Hunter World"/>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <a href="https://en.wikipedia.org/wiki/Monster_Hunter:_World" target="_blank">
                    <div className={style.type}>
                        <p className="text-center mb-0">Learn more here</p>
                    </div>
                    </a>
                    
                </div>
            </div>
        </div>
    )
};

export default Info;