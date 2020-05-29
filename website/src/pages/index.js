import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import "./index.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const SplashContainer = (props) => (
    <div className="homeContainer">
      <div className="chatContainer" data-gitter-toggle-chat-state="toggle" />
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  );

  const ProjectTitle = (props) => (
    <h2 className="projectTitle">
      OpenCRVS is a digital public good to achieve universal civil registration
      and evidence-based decision making in low resource settings
      <small>{props.tagline}</small>
    </h2>
  );

  const PromoSection = (props) => (
    <div className="section promoSection">
      <div className="promoRow">
        <div className="pluginRowBlock">{props.children}</div>
      </div>
    </div>
  );

  const Button = (props) => (
    <div className="pluginWrapper buttonWrapper">
      <a className="button" href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );

  const OpenCRVSVision = () => {
    return (
      <div className="productShowcaseSection visionPaddingBottom">
        <div className="openCrvsApp">
          <img
            src={useBaseUrl("img/openCrvsApp@2x.png")}
            alt="OpenCRVS Application"
          />
        </div>
        <h2 className="visionHeader">
          Our vision is to ensure that every individual on the planet is
          recognised, protected and provided for from birth.
        </h2>
      </div>
    );
  };

  const Features = () => (
    <div className="productShowcaseSection container paddingBottom">
      <div className="wrapper wrapperTitle">
        <h2>A new model for civil registration</h2>
        <div className="gridBlock">
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>
                <div>
                  <span>
                    <p>Increases birth and death registration rates</p>
                  </span>
                </div>
              </h4>
              <div>
                <span>
                  <p>
                    Through an active registration model that takes services to
                    where they occur in the community and health facilities.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>
                <div>
                  <span>
                    <p>Makes civil registration easy</p>
                  </span>
                </div>
              </h4>
              <div>
                <span>
                  <p>
                    Through a simplified application process that puts the
                    experience of our users first.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>
                <div>
                  <span>
                    <p>Drives efficiencies for government service delivery</p>
                  </span>
                </div>
              </h4>
              <div>
                <span>
                  <p>
                    By working well with other e-government systems and by
                    providing real-time operational data that supports increased
                    accountability and performance management
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Process = () => (
    <div className="productShowcaseSection container paddingBottom processSection">
      <div className="wrapper wrapperTitle">
        <h2>OpenCRVS process</h2>
        <p className="wrapperParagraph">
          While every country is unique, OpenCRVS supports key elements of a
          standardised process that reflects best practice and drives
          efficiency.
        </p>
        <div className="gridBlock processBlock firstProcessBlock">
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="iconHeader">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#8049B7"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                      fill="#8049B7"
                    />
                  </svg>
                </div>
                <h3>Notify a vital event</h3>
              </div>
              <p>
                This is the collection of a minimal set of vital event data that
                can be used for (i) planning and (ii) follow-up purposes. In
                OpenCRVS we call it an “in-progress” application because action
                is required to complete it. You can receive an “in-progress”
                application from the OpenCRVS application (as an incomplete
                application) as well as a number of external sources including:
              </p>
              <ul className="bullets">
                <li>
                  <a href={useBaseUrl("docs/system_overview/interoperability")}>
                    Digital health systems
                  </a>{" "}
                  e.g. DHIS2 or OpenSRP
                </li>
                <li>
                  Messaging apps e.g. SMS, USSD, Whatsapp etc.
                  (self-notification)
                </li>
                <li>Refugee registration systems</li>
              </ul>
              <a
                className="homeLink"
                href={useBaseUrl("docs/core_functions/notifyAVitalEvent")}
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="processImage">
                <img
                  src={useBaseUrl("img/process1@2x.png")}
                  alt="Notify a vital event"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridBlock processBlock">
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="processImage">
                <img
                  src={useBaseUrl("img/process2@2x.png")}
                  alt="Declare a vital event"
                />
              </div>
            </div>
          </div>
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="iconHeader">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#F1B162"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                      fill="#F1B162"
                    />
                  </svg>
                </div>
                <h3>Declare a vital event</h3>
              </div>
              <p>
                This is the completion of a vital event registration form. In
                OpenCRVS we call this an "application" as it is more familiar to
                service providers - all mandatory information + supporting
                documents required to register the vital event. This can be
                completed:
              </p>
              <ul className="bullets">
                <li>At the community level on a tablet or mobile device</li>
                <li>
                  In an office on a PC, laptop or any other available device
                </li>
              </ul>
              <a
                className="homeLink"
                href={useBaseUrl("docs/core_functions/declareAVitalEvent")}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="gridBlock processBlock">
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="iconHeader">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#C1C7C9"
                    />
                    <path
                      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                      fill="#707C80"
                    />
                  </svg>
                </div>
                <h3>Validate and register a vital event</h3>
              </div>
              <p>
                In the “Ready to review” workqueue, the Registrar (or
                Registration Agent) can find all applications sent from the
                field, review them alongside supporting documents, and then
                either reject or register them. Ideally this is done by one
                actor in one step.
              </p>
              <a
                className="homeLink homeLinkNoBullets"
                href={useBaseUrl(
                  "docs/core_functions/validateRegisterVitalEvent"
                )}
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="processImage">
                <img
                  src="img/process3@2x.png"
                  alt="Validate and register a vital event"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridBlock processBlock">
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="processImage">
                <img
                  src={useBaseUrl("img/process4@2x.png")}
                  alt="Issue a certificate"
                />
              </div>
            </div>
          </div>
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="iconHeader">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="#49B78D"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                      fill="#49B78D"
                    />
                  </svg>
                </div>
                <h3>Issue a certificate</h3>
              </div>
              <p>
                Once the record has been registered, the certificate is “Ready
                to Print” and it appears in the workqueue of the same name,
                ready to be printed with digital signatures and collected. If
                digital signatures aren’t allowed it can be printed in advance
                and signatures added by hand.
              </p>
              <a
                className="homeLink homeLinkNoBullets"
                href={useBaseUrl("docs/core_functions/issueACertificate")}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="gridBlock processBlock">
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="iconHeader">
                <div>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10H16L13 19L7 1L4 10H0"
                      stroke="#4C68C1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Use civil registration data</h3>
              </div>
              <p>
                Civil registration data is incredibly valuable. OpenCRVS helps
                you realise this through:
              </p>
              <ul className="bullets">
                <li>
                  <b>Vital statistics export:</b> export your civil registration
                  data in a standard format that can be used in a vital
                  statistics system
                </li>
              </ul>
              <ul className="bullets">
                <li>
                  <b>Operational data:</b> this lets registration managers
                  understand what is working and what is not and provide
                  targeted support and resources
                </li>
              </ul>
              <ul className="bullets">
                <li>
                  <b>Headline registration rates:</b> in real-time, see key
                  rates required for ongoing performance management at the
                  sub-national, national and global level, including SDG
                  indicators that can be taken from civil registration data.
                </li>
              </ul>
              <a
                className="homeLink"
                href={useBaseUrl(
                  "docs/support_functions/performanceManagement"
                )}
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="blockElement twoByGridBlock">
            <div className="blockContent processContent">
              <div className="processImage">
                <img
                  src={useBaseUrl("img/process5@2x.png")}
                  alt="Use civil registration data"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LowResource = () => (
    <div className="productShowcaseSection container paddingBottom">
      <div className="wrapper wrapperTitle lowResourceWrapper">
        <h2>Developed to work in any setting</h2>
        <div className="gridBlock ">
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <div className="lowResourceImage">
                <img
                  src={useBaseUrl("img/low-resources1@2x.png")}
                  alt="Outbox"
                />
              </div>
              <h4>Offline &amp; low connectivity working</h4>
              <p>Complete applications offline and send when you reconnect. </p>
              <a
                className="homeLink homeLinkNoBullets"
                href={useBaseUrl("docs/system_overview/keyFeatures")}
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <div className="lowResourceImage">
                <img
                  src={useBaseUrl("img/low-resources2@2x.png")}
                  alt="De-duplication"
                />
              </div>
              <h4>Real-time depuplication</h4>
              <p>
                Increase data quality by identifying potential duplicate
                applications with the OpenCRVS deduplication engine.{" "}
              </p>
              <a
                className="homeLink homeLinkNoBullets"
                href={useBaseUrl("docs/system_overview/keyFeatures")}
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <div className="lowResourceImage">
                <img
                  src={useBaseUrl("img/low-resources3@2x.png")}
                  alt="Outbox"
                />
              </div>
              <h4>Multi-language</h4>
              <p>
                Users can easily change the language which they use to make the
                experience as local as possible.{" "}
              </p>
              <a
                className="homeLink homeLinkNoBullets"
                href={useBaseUrl("docs/system_overview/keyFeatures")}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FuncArch = () => (
    <div className="productShowcaseSection container paddingBottom processSection">
      <div className="wrapper wrapperTitle">
        <h2>Functional Architecture</h2>
        <p className="wrapperParagraph">
          The OpenCRVS system supports common CRVS workflows and functions as
          well as a number of functions that will help you realise the true
          value of civil registration.
        </p>

        <div>
          <img
            className="funcArchImage"
            src="img/oCRVS_systemArchitecture_2@2x.png"
            alt="OpenCRVS Functional Architecture"
          />
        </div>
      </div>
    </div>
  );

  const Community = () => (
    <div className="productShowcaseSection container noBorder processSection">
      <div className="wrapper wrapperTitle">
        <h2>Join our community</h2>
        <p className="wrapperParagraph">
          As we design and develop OpenCRVS, we make a commitment to the
          following values.{" "}
        </p>
        <div className="gridBlock communityBlock">
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We are open</h4>
              <p>
                We are a community. We share what we’re doing - code, designs,
                tools and ideas, and work well with others.{" "}
              </p>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We are rights-based</h4>
              <p>
                We take every action possible to ensure that no-one is left
                behind. We are inclusive, don't discriminate and protect as a
                priority.{" "}
              </p>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We are human-centered</h4>
              <p>
                We put people first. We design with our users to ensure that the
                system works for them.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="gridBlock communityBlock">
          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We are future focused</h4>
              <p>
                We build for the future. We use proven technologies that can
                adapt to inevitable change.{" "}
              </p>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We challenge the status quo</h4>
              <p>
                We challenge business as usual. Civil registration systems are
                broken so we need to think differently and innovate.{" "}
              </p>
            </div>
          </div>

          <div className="blockElement threeByGridBlock">
            <div className="blockContent">
              <h4>We are trusted</h4>
              <p>We respect privacy as a fundamental human right. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Logos = () => (
    <div className="productShowcaseSection container noBorder processSection">
      <div className="wrapper wrapperTitle logoGrid">
        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage planLogo"
              src="img/logo1@2x.png"
              alt="Plan logo"
            />
          </div>
        </div>

        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage jembiLogo"
              src="img/logo2@2x.png"
              alt="Jembi logo"
            />
          </div>
        </div>

        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage vitalLogo"
              src="img/logo3@2x.png"
              alt="Vital Strategies logo"
            />
          </div>
        </div>
        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage ozLogo"
              src="img/logo4@2x.png"
              alt="Australian Aid logo"
            />
          </div>
        </div>

        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage dsLogo"
              src="img/logo5@2x.png"
              alt="Digital Square logo"
            />
          </div>
        </div>

        <div className="blockElement logoElement">
          <div className="blockContent logoContent">
            <img
              className="logoImage dialLogo"
              src="img/logo6@2x.png"
              alt="DIAL logo"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={useBaseUrl("docs/system_overview/introduction")}>
              See documentation
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
      <div className="mainContainer">
        <OpenCRVSVision />
        <Features />
        <Process />
        <LowResource />
        <FuncArch />
        <Community />
        <Logos />
      </div>
    </Layout>
  );
}

export default Home;
