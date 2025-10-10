export default function Home() {
    return (
        <>
            <div id="home-container">
                <h1 id="home-head">CRM Platform<br />customizable to suit your needs</h1>
                <p id="home-intro">This is a prototype of Customer Relationship Management Platform I developed to help businesses manage their interactions with customers and prospects with feature that every custom properties has tracking timestamp.</p>
                <div id="home-demo">
                    <div className="demo-row">
                        <img src="anc.jpg" />
                        <p>Keep all your customer information in one place. Access contact details, history, and interactions at a glance — no more scattered spreadsheets.</p>
                    </div>
                    <div className="demo-row">ss</div>
                    <div className="demo-row">ss</div>
                    <a href="/demo" className="demo-button">
                        Try Demo
                    </a>
                </div>
            </div>
        </>
    )
}