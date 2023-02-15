import React from 'react';
import LineChart from './LineChartSvg';



function App() {
    return <LineChart width={400} height={200} data={data} horizontalGuides={5} precision={2} verticalGuides={1} />;
}

export default App;
