import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Display } from "../components/Display";
import { Loading } from "../components/Loading";
import { v4 as uuidv4 } from "uuid";

import "../slippiVisualiser/stylesheet.css";
import "./App.css";

const App = ({ replay, size, shouldShowSlider, shouldActivatePause }) => {
    const [gameId, setGameId] = useState(uuidv4());

    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
        if (replay) {
            (async () => {
                await import("../slippiVisualiser/index");
                window.earlySetup(gameId);
                window.start({ data: replay, shouldActivatePause }, gameId);
            })();
        }

        return () => window.stopGame(gameId);
    }, [replay]);

    useEffect(() => {
        window.managePause && shouldActivatePause && window.managePause(gameId);
    }, [isFocus]);

    return (
        <div
            key={gameId}
            tabIndex="0"
            onMouseEnter={() => setIsFocus(!isFocus)}
            onMouseLeave={() => setIsFocus(!isFocus)}
        >
            <Display size={size} id={gameId} />
            {shouldShowSlider && <Container id={gameId} />}
            <Loading id={gameId} />
        </div>
    );
};

export default App;
