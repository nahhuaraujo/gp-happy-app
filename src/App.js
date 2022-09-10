import { Navbar } from './components';
import { Home } from './pages';
import { Layout } from './styled-components';

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
