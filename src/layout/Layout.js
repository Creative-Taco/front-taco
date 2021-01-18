import Header from './Header/Header';
import Footer from './Footer/Footer';
import Scroll from './Scroll/Scroll';

function Layout(props) {
    return (
      <div>
          <Header />
          <Scroll />
          {props.children}
          <Footer />
      </div>
    );
  }
  
  export default Layout;
  