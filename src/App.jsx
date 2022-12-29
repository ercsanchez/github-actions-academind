import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <p>Testing workflow...</p>
        <p>Testing workflow2...</p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
