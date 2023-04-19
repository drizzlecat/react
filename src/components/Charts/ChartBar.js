import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillScale = "0%";

    if (props.maxValue > 0) {
        barFillScale = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart_bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillScale }} />
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
