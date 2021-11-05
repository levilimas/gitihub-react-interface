import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/54130943?v=4" alt="Avatar URL Levi Lima" />
          <h1>Levi Lima</h1>
          <h3>Username: </h3>
          <span>levilimas</span>
          <div>
            <h4>Folowers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Folowings</h4>
            <span>1</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App;
