import React from 'react';
import Layout from './layout/Layout';
import Hello from './views/Hello/Hello';
import Example from './views/Example/Example';
import Good from './views/Good/Good';
import Mission from './views/Mission/Mission';
import Team from './views/Team/Team';

function App() {
  return (
    <Layout>
      <Hello />
      <Example />
      <Good />
      <Team />
      <Mission />
    </Layout>
  );
}

export default App;
