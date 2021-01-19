import Header from './Header/Header';
import Footer from './Footer/Footer';
import Scroll from './Scroll/Scroll';
import Frame from './Frame/Frame';

function Layout(props) {
    return (
      <div style={{fontFamily: 'Poppins'}}> 
          <Header />
          <Frame />
          <Scroll />
          {props.children}
          <Footer />
      </div>
    );
  }
  
  export default Layout;
  