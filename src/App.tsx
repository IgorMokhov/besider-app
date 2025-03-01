import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import styles from './App.module.scss';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
};
