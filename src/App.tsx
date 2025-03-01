import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './App.module.scss';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};
