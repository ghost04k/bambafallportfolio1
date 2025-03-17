const Contacts = () => {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Contact</div>
          <div className="subtitle">Let's talk</div>
        </div>
        {/* contact form */}
        <div className="contact-form">
          <form id="cform" method="post">
            <div className="group-val">
              <div className="label">
                Full name <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                placeholder="ej.: Cheikh Ahmadou Bamba FALL"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Email address <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                placeholder="bamba.fall.pro@gmail.com"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Message <strong>*</strong>
              </div>
              <textarea
                name="message"
                placeholder="Your message here..."
                defaultValue={""}
              />
            </div>
            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Envoyer un message</span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
          <div className="alert-success">
            <p>Merci, votre message a été envoyé avec succès.</p>
          </div>
        </div>
        {/* contact info */}
        <div className="contact-info">
          <div className="name">Cheikh Ahmadou Bamba FALL</div>
          <div className="subname">Spécialiste en communication</div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Residence:</strong> Lyon, France
              </li>
              <li>
                <strong>Disponible:</strong> Maintenant
              </li>
              <li>
                <strong>Address:</strong> Lyon 69003, France
              </li>
              <li>
                <strong>Phone:</strong> 06 05 51 03 75
              </li>
              <li>
                <strong>E-mail:</strong> bamba.fall.pro@gmail.com
              </li>
            </ul>
          </div>
          <div className="author">Bamba   Fall</div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Contacts;