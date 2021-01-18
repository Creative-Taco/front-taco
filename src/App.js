
import Layout from './layout/Layout';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Example from './views/Example/Example';
import Good from './views/Good/Good';
import Mission from './views/Mission/Mission';
import Team from './views/Team/Team';
import './index.css';

function App() {
  return (
      <Layout>
        <Landing />
        <About />
        <Example />
        <Good />
        <Team />
        <Mission />
      </Layout>
  );
}

export default App;
