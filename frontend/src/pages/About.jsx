import Header from "../components/Header"

export default function About() {
    return (
        <>
            <div id="about-container">
                <div id="about-left">
                    <p>This is a demo for my full-stack project to develop and deploy a web application.</p>
                    <p>My name is Natthajak Kamkru (Jay) <br /> You can read full documentation of how I design this site <a href="https://github.com/jaykape/crm" >here</a></p>
                    <p style={{ fontSize: 20 }}>Contacts: 0622494991 natthajakntk@gmail.com</p>
                </div>
                <div id="about-right">
                    <p id="tech-stack-head">Tech Stack</p>
                    <div id="tech-stack-div">
                        <img src="/react.svg" style={{ width: 50 }} />
                        <img src="/vercel.svg" style={{ width: 70 }} />
                        <img src="/go.svg" style={{ width: 70 }} /></div>

                    <div id="tech-stack-div2">

                        <img src="/nginx.svg" style={{ width: 70 }} />
                        <img src="/redis.svg" style={{ width: 80 }} />
                        <img src="/aws.svg" style={{ width: 60 }} />
                    </div>

                    <div id="tech-stack-div3">

                        <img src="/postgres.svg" style={{ width: 60 }} />
                        <img src="/prometheus.svg" style={{ width: 50 }} />
                        <img src="/grafana.svg" style={{ width: 50 }} />
                    </div>
                </div>
            </div>

        </>
    )
}