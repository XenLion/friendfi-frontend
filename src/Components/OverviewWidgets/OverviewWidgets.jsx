import "./OverviewWidgets.scss"

const OverviewWidgets = ({type}) => {

    let data;

    switch (type) {
        case "totalValue":
            data = {
                header:"Total Portfolio Value",
                value: "$800,000.00",
            };
            break;
        case "totalCost":
            data = {
                header: "Total Portfolio Cost",
                value: "$100,000.00",
            };
            break;
        case "totalProfit":
            data = {
                header: "Total Profit/Loss",
                value: "$400,000.00",
            };
            break;
        case "bitcoinPrice":
            data = {
                header: "Current Bitcoin Price",
                value: "$45,000",
            };
            break
        default:
            break;
    }

    return (
        <article className="overviewWidgets">
            <header className="widgetHeader">{data.header}</header>
            <main className="widgetMain">
                <p className="widgetValue">{data.value}</p>
            </main>
        </article>
    )
}

export default OverviewWidgets