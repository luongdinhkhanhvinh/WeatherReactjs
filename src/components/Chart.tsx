import * as React from 'react';
import { Line } from 'react-chartjs-2';

// INTERFACES
import * as I from '../interfaces';

// STORE
import { Store } from '../reducers/Store';

class Chart extends React.Component<Store.All, {}> {

    shortenTime(_time: string): string {
        let time = parseInt(_time, 10);
        let suffix = '';

        if (time > 12) {
            time = time - 12;
            suffix = 'PM';
        } else {
            suffix = 'AM';
        }

        return time + suffix;
    }

    render() {
        const { allWeathers } = this.props;

        const temps: number[] = allWeathers.map( (item: I.Weather) => Math.round(item.temp - 273));
        // const temps: string[] = data.map( (item: I.Weather) => (item.temp));
        // const temps: string[] = data.map( (item: I.Weather) => (item.temp));

        const _data: I.ChartData = {
            labels: allWeathers.map( (item: I.Weather) => (this.shortenTime(item.time))),
            datasets: [
                {
                    label: 'Temperature',
                    data: temps,
                    backgroundColor: 'rgba(204, 51, 0, 0.4)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }
            ],
        };
        
        return (
            <div className="container" id="chart">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Starting at {allWeathers[0].date} to {allWeathers[allWeathers.length - 1].date}</h3>                    
                    </div>
                    <div className="col-1 cc">
                        <div className="chartLabel" id="yLabel">Temperature in °C</div>
                    </div>
                    <div className="col-11">
                        <Line data={_data} />
                    </div>
                    <div className="col-1" />
                    <div className="col-11 cc">
                        <div className="chartLabel">Time (9 hours interval)</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;