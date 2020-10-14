const Services = () => (
  <div className="content services">
    <Title>My Services</Title>
    <div className="row service-items border-line-v">
      <ServiceItem name="Web Development" icon="code" description=" Modern and mobile-ready website that will help you reach all of your marketing." />
      <ServiceItem name="Music Writing" icon="music" description="Music copying, writing, creating, transcription, arranging and composition services." />
      <ServiceItem name="Advetising" icon="buysellads" description="Advertising services include television, radio, print, mail, and web apps." />
      <ServiceItem name="Game Development" icon="gamepad" description="Developing memorable and unique mobile android, ios and video games." />
    </div>
    <div className="clear"></div>
  </div>
);

export default Services;
