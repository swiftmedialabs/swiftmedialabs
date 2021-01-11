// components/app-bar.jsx
// views/header.jsx
// views/about-us.jsx
// views/our-services.jsx
// views/core-technologies.jsx
// views/workflow.jsx
// views/clients.jsx
// views/happy-list.jsx
// views/free-website-audit.jsx
// views/frequently-asked-questions.jsx
// views/contact.jsx
// views/site-info.jsx
import "./App.css";
import AppBar from "./components/app-bar";
import Header from "./views/header";
import AboutUs from "./views/about-us";
import OurServices from "./views/our-services";
import CoreTechnologies from "./views/core-technologies";
import Workflow from "./views/workflow";
import Clients from "./views/clients";
import HappyList from "./views/happy-list";
import FreeWebsiteAudit from "./views/free-website-audit";
import FrequentlyAskedQuestions from "./views/frequently-asked-questions";
import Contact from "./views/contact";
import SiteInfo from "./views/site-info";

function App() {
  return (
    <div className="App row p-0 m-0">
      <div className="container-fluid col-md-12 p-0 m-0">
        <AppBar />
        <Header />
        <AboutUs />
        <OurServices />
        <CoreTechnologies />
        <Workflow />
        <Clients />
        <HappyList />
        <FreeWebsiteAudit />
        <FrequentlyAskedQuestions />
        <Contact />
        <SiteInfo />
      </div>
    </div>
  );
}

export default App;
