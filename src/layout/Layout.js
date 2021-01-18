import Header from './Header/Header';
import Footer from './Footer/Footer';
import Scroll from './Scroll/Scroll';

function Layout(props) {
    return (
      <div style={{fontFamily: 'Poppins'}}> 
          <Header />
          <Scroll />
          {props.children}
          <Footer />
      </div>
    );
  }
  
  export default Layout;
  