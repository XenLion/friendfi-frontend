import "./Overview.scss"
import OverviewWidgets from "../OverviewWidgets/OverviewWidgets"

const Overview = () => {
    return (
            <section className="overviewSection">
                <OverviewWidgets type="totalValue"/>
                <OverviewWidgets type="totalCost"/>
                <OverviewWidgets type="totalProfit"/>
                <OverviewWidgets type="bitcoinPrice"/>
            </section>
    )
}

export default Overview