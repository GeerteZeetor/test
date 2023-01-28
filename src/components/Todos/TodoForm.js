import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm({ todos, addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = ev => {
    ev.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFromContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
