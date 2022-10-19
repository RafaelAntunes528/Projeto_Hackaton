import { ResponsivePie } from '@nivo/pie'

export const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        innerRadius={0}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}
        valueFormat={value =>
            `${Number(value).toLocaleString('eu-EU', {
                minimumFractionDigits: 2,
            })} €`
        }
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        arcLinkLabelsOffset={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabelsThickness={3}

    />
)