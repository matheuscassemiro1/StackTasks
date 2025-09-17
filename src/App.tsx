import './App.css';
import { ProjectProvider } from './contexts/ProjectProvider';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ProjectProvider>
      <AppRoutes />
    </ProjectProvider>
  );
}

export default App;
