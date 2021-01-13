import React from "react";

const ContainerComponent = ({ id }) => (
    <div id={`slider_container-${id}`} style={{ display: "none" }}>
        <input
            id="playback_slider"
            type="range"
            min="-123"
            max="1000"
            step="1"
            value="-123"
            data-orientation="horizontal"
        />
    </div>
);

export { ContainerComponent };
