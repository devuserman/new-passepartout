import { Helmet } from 'react-helmet';
import './Contact-min.css'; 
import Header from '../Header/Header';
import Footer from '../Footer//Footer';
import ContactForm from '../ContactForm/ContactForm';
import CarteMaps from '../CarteMaps/CarteMaps';
import CommentSlideshow from '../CommentSlideshow//CommentSlideshow';

function Contact () {
    return (
   <>
      <Helmet>
        <title>Contactez VTC Privé – Réservez un Taxi à La Rochelle</title>
      </Helmet>
        <Header />
      
        <section className="box-contact">
        <div className="container-carte">
      <CarteMaps />
        </div>
        <div className="form-container">
       
            <ContactForm />
          </div>
     
          </section>
          <div className="container-avis">
    <CommentSlideshow />
    </div>
        <Footer />
      </>
    );
}

export default Contact;
