import './App.css';
import { ProjectProvider } from './contexts/ProjectProvider';
import { ThemeProvider } from './contexts/UseTheme';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <AppRoutes />
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
