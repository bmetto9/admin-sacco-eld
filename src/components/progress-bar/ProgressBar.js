import React from 'react'
import Chart from 'react-apexcharts'

function ProgressBar(props) {
    var options = {
        series: [props.progressPercentage],
        chart: {
            height:350,
            type: 'radialBar'
        },
        colors: [
            `${props.status === 'Ongoing' ? '#349eff' : '#d68102' && props.status === "On Hold" ? '#d68102' : '#349eff' && props.status === "On Hold" ? '#019707' : '#019707'}`
        ],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%'
                }
            }
        },
        labels: [`${props.status}`]
    }

    return (
        <div>
            <h5>{props.title}</h5>

            <Chart
                options={options}
                series={options.series}
                type="radialBar"
                width="300"
            />
        </div>
    )
}

export default ProgressBar
