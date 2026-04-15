import './App.css'
import { TaskBoard } from './features/tasks/components/taskBoard'
import { HTML_TAGS } from './shared/constants/html-tags.constants'
import { TASK_UI_TEXT } from './features/tasks/constants/task-ui.constants'

function App() {
  const MainTag = HTML_TAGS.MAIN
  const H1Tag = HTML_TAGS.H1

  return(
    <MainTag>
      <H1Tag>{TASK_UI_TEXT.APP_TITLE}</H1Tag>
      <TaskBoard />
    </MainTag>
  )
}

export default App