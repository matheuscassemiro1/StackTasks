import './App.css';
import { AuthProvider } from './contexts/AuthProvider';
import { ProjectProvider } from './contexts/ProjectProvider';
import { ThemeProvider } from './contexts/ThemeProvider';
import { AppRoutes } from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ProjectProvider>
          <ToastContainer
            position="bottom-center"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={true}
            theme="light"
          />
          <AppRoutes />
        </ProjectProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
