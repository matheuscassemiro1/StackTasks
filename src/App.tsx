import './App.css';
import { AuthProvider } from './contexts/AuthProvider';
import { ProjectProvider } from './contexts/ProjectProvider';
import { ThemeProvider } from './contexts/ThemeProvider';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ProjectProvider>
          <AppRoutes />
        </ProjectProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
