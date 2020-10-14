import Title from "../../title";
const ClientItem = ({ src, url, name }) => (
  <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
    <div className="client-item">
      <div className="image">
        <a target="_blank" href={url} title={name}>
          <img src={src} alt={name} />
        </a>
      </div>
    </div>
  </div>
);

const Clients = () => (
  <div className="content clients">
    {/* title */}
    <Title>Clients</Title>

    {/* content */}
    <div className="row client-items">
      <ClientItem name="Evenium" src="images/clients/evenium-logo.jpg" url="https://corp.evenium.com" />
      <ClientItem name="Texa" src="images/clients/texaservice.png" url="https://www.texa.fr" />
      <ClientItem name="SQLI" src="images/clients/sqli.png" url="https://www.sqli.com" />
      <ClientItem name="Altelios Technology" src="images/clients/altelios-technology.png" url="https://www.alteliostechnologygroup.com" />
      <ClientItem name="Adex" src="images/clients/adex.png" url="images/clients/aubay.png" />
      <div className="clear"></div>
    </div>
  </div>
);
export default Clients;
