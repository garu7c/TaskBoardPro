import './App.css'
import { TaskBoard } from './features/tasks/components/taskBoard'
import { HTML_TAGS } from './shared/constants/html-tags.constants'
import { TASK_UI_TEXT } from './features/tasks/constants/task-ui.constants'
import { ThemeProvider } from './features/theme/context/ThemeProvider'

function AppContent() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1

  return(
    <MainTag>
      <TitleTag>{TASK_UI_TEXT.APP_TITLE}</TitleTag>
      <TaskBoard />
    </MainTag>
  )
}
function App() {
  
  return(
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App