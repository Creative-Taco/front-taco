import Header from './Header/Header';
import Footer from './Footer/Footer';
import Scroll from './Scroll/Scroll';
import Frame from './Frame/Frame';

function Layout(props) {
    return (
      <div style={{fontFamily: 'Poppins', width: '100%', overflow: 'hidden'}}> 
          <Header />
          <Frame />
          <Scroll />
          {props.children}
          <Footer />
      </div>
    );
  }
  
  export default Layout;
  