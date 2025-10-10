export default function Home() {
    return (
        <>
            <div id="home-container">
                <h1 id="home-head">CRM Platform<br />customizable to suit your needs</h1>
                <p class="home-intro">Customer Relationship Management Platform that help businesses manage their interactions with customers and prospects with feature that every custom properties has tracking timestamp.</p>
                <img src="../../public/dashboard-contacts.jpg" id="home-demo" alt="Contacts"
                />

                <p class="home-intro">
                    Keep all your customer information in one place.<br />
                    Access contact details, history, and interactions at a glance.
                </p>

                <a href="/demo" className="demo-button">
                    Try Demo
                </a>
            </div>

        </>
    )
}