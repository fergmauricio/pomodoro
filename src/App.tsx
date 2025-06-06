import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
