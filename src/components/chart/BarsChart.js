// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveBump } from '@nivo/bump'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBump = () => (
    <ResponsiveBump
        data={[
            {
              "id": "Breakfast",
              "data": [
                {
                  "x": "Semana 1",
                  "y": 3
                },
                {
                  "x": "Semana 2",
                  "y": 5
                },
                {
                  "x": "Semana 3",
                  "y": 4
                },
                {
                  "x": "Semana 4",
                  "y": 4
                }
              ]
            },
            {
              "id": "Lunch",
              "data": [
                {
                  "x": "Semana 1",
                  "y": 3
                },
                {
                  "x": "Semana 2",
                  "y": 3
                },
                {
                  "x": "Semana 3",
                  "y": 5
                },
                {
                  "x": "Semana 4",
                  "y": 5
                }
              ]
            },
            {
              "id": "Nap",
              "data": [
                {
                  "x": "Semana 1",
                  "y": 2
                },
                {
                  "x": "Semana 2",
                  "y": 2
                },
                {
                  "x": "Semana 3",
                  "y": 1
                },
                {
                  "x": "Semana 4",
                  "y": 1
                }
              ]
            }
          ]}
        xPadding={0.5}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        axisRight={null}
    />
)

export default MyResponsiveBump