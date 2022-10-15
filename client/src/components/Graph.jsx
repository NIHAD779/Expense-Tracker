import React from 'react'
import {Chart,ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import Labels from './Labels'

Chart.register(ArcElement)

const config = {
    data: {
        datasets: [{
            data: [10, 20, 30]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]},
          options:{
            cutout:115
    }
}
 
const Graph = () => {
  return (
    <div className=''>
        <div>
            <Doughnut data={config.data}/>
            <h3>Total<span>${0}</span></h3>
            
        </div>
        <div><Labels></Labels></div>
    </div>
  )
}

export default Graph