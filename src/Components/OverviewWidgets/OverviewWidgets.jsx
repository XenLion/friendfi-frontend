import "./OverviewWidgets.scss"

const OverviewWidgets = ({type}) => {

    let data;

    switch (type) {
        case "totalValue":
            data = {
                header:"Total Portfolio Value:",
                value: "$800,000.00",
            };
            break;
        case "totalCost":
            data = {
                header: "Total Portfolio Cost:",
                value: "$100,000.00",
            };
            break;
        case "totalProfit":
            data = {
                header: "Total Profit/Loss:",
                value: "$400,000.00",
            };
            break;
        case "bitcoinPrice":
            data = {
                header: "Current Bitcoin Price:",
                value: "$45,000",
            };
            break
        default:
            break;
    }

    return (
        <section className="overviewWidgets">
            <article className="widgetArticle">
                <header className="widgetHeader">{data.header}</header>
                <main>
                    <p className="widgetValue">{data.value}</p>
                </main>
            </article>
            <article className="widgetArticle">
                <main className="widgetValuePercentage">
                    10.05%
                </main>
            </article>
        </section>
    )
}

export default OverviewWidgets