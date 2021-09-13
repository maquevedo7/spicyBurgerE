import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Sections/Sections"
import { AppProvider } from "./context/AppContext";

function App() {
  
  return (
    <AppProvider>

    <div className="App">
      <Header/>
      <Section/>
      <Footer/>
    </div>
    
  </AppProvider>
  );
}

export default App;
