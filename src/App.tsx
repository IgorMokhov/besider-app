import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.app_content}>
        <main className={styles.app_main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};
