import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CapabilityCards from './components/CapabilityCards';
import Recommended from './components/Recommended';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CapabilityCards />
      <Recommended />
    </>
  );
}

export default App;
