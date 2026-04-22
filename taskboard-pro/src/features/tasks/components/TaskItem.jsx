import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <span>
        {task.title} - {task.completed ? "Completada" : "Pendiente"}
      </span>

      <button onClick={() => onToggleTask(task.id)}>
        {TASK_UI_TEXT.TOGGLE_BUTTON}
      </button>

      <button onClick={() => onDeleteTask(task.id)}>
        {TASK_UI_TEXT.DELETE_BUTTON}
      </button>
    </li>
  )
}