import { drawBackgroundInit, drawStageInit } from "./draw/draw_stage";
import { curGame, showDebug } from "./main";

export default function Playback(game, id) {
    this.game = game;
    this.playing = false;
    this.paused = false;
    this.finished = false;
    this.gameId = id;

    this.start = function (shouldActivatePause) {
        if (shouldActivatePause) {
            this.togglePause();
        }
        drawBackgroundInit(this.gameId);
        if (this.game.compatible) {
            drawStageInit(this.game.stage, this.gameId);
            this.playing = true;
            gameTick(id);
            renderTick(id);
        } else {
            renderBGOnlyTick(id);
        }
    };

    this.restart = function (startIndex) {
        this.game.currentFrameIdx = startIndex ?? -123;
        this.paused = false;
        this.finished = false;
        this.playing = true;
        $('input[type="range"]').val(this.game.currentFrameIdx).change();
    };

    this.togglePause = function () {
        this.paused ^= true;
    };

    this.frameForward = function () {
        this.paused = true;
        if (this.finished) return;
        this.game.currentFrameIdx++;
        this.game.updateState();
        this.game.renderState();
        $('input[type="range"]').val(this.game.currentFrameIdx).change();
    };

    this.frameBackward = function () {
        this.paused = true;
        this.finished = false;
        this.game.currentFrameIdx = Math.max(
            -123,
            this.game.currentFrameIdx - 1
        );
        this.game.updateState();
        this.game.renderState();
        $('input[type="range"]').val(this.game.currentFrameIdx).change();
    };
}

function gameTick(gameId) {
    setTimeout(() => gameTick(gameId), 16);
    if (
        !curGame.get(gameId)?.playback.playing ||
        curGame.get(gameId)?.playback.finished ||
        curGame.get(gameId)?.playback.paused
    )
        return;
    curGame.get(gameId).currentFrameIdx++;
    curGame.get(gameId).updateState();
    $('input[type="range"]').val(curGame.get(gameId).currentFrameIdx).change();
}

function renderTick(gameId) {
    window.requestAnimationFrame(() => renderTick(gameId));
    if (
        !curGame.get(gameId)?.playback.playing ||
        curGame.get(gameId)?.playback.finished
    )
        return;
    curGame.get(gameId).renderState();
}

function renderBGOnlyTick(gameId) {
    window.requestAnimationFrame(() => renderBGOnlyTick(gameId));
    curGame.get(gameId)?.renderBGOnly();
}
