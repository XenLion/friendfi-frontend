import "./OverviewWidgets.scss"

const OverviewWidgets = ({type}) => {

    let data;

    switch (type) {
        case "totalValue":
            data = {
                header:"Total Portfolio Value",
            };
            break;
        case "totalCost":
            data = {
                header: "Total Portfolio Cost",
            };
            break;
        case "totalProfit":
            data = {
                header: "Total Profit/Loss",
            };
            break;
        case "bitcoinPrice":
            data = {
                header: "Current Bitcoin Price",
            };
            break
        default:
            break;
    }

    return (
        <article className="overviewWidgets">
            <header className="widgetHeader">{data.header}</header>

        </article>
    )
}

export default OverviewWidgets