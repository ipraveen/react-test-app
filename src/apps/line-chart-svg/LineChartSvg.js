import React from 'react';

const data = [
    { label: 'S', x: 0, y: 0 },
    { label: 'M', x: 1, y: 400 },
    { label: 'T', x: 2, y: 300 },
    { label: 'W', x: 3, y: 100 },
    { label: 'TH', x: 4, y: 400 },
    { label: 'F', x: 5, y: 500 },
    { label: 'S', x: 6, y: 400 },
];

function LineChartSvg() {
    const height = '500';
    const width = '200';
    const precision = 2;

    const FONT_SIZE = width / 50;
    const maximumXFromData = Math.max(...data.map((e) => e.x));
    const maximumYFromData = Math.max(...data.map((e) => e.y));
    const digits = parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

    const padding = (FONT_SIZE + digits) * 3;

    const XAxis = () => (
        <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth=".5"
            points={`${padding},${height - padding} ${width - padding},${height - padding}`}
        />
    );

    return (
        <svg viewBox="0 0 500 200">
            <XAxis />
        </svg>
    );
}

export default LineChartSvg;
