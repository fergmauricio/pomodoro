import { TaskContextProvider } from './contexts/TaskContext';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}

export default App;
