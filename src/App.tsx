
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { OutfitDetail } from './pages/OutfitDetail';
import { CategoryView } from './pages/CategoryView';
import { Favorites } from './pages/Favorites';
import { RequestVibe } from './pages/RequestVibe';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outfit/:id" element={<OutfitDetail />} />
            <Route path="/categories/:categoryName" element={<CategoryView />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/request-vibe" element={<RequestVibe />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
