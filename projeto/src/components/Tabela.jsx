import { ResponsiveLine } from '@nivo/line'

export const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
    curve="monotoneX"
    
    axisLeft={{
        legendOffset: 12,
    }}
    axisBottom={{
        legendOffset: -12,
    }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        
        yFormat=" >-.2f"
        axisTop={null}
        colors={{ datum: 'color' }}
        axisRight={null}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'color' }}
        pointLabelYOffset={-12}
        useMesh={true}

    />
)