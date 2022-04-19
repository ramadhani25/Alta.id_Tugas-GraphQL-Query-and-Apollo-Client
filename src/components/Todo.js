export default function Todo({ id, title, checked }) {
  return (
    <li className={checked ? "done todo-item" : "todo-item"} data-key={id}>
      <input id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>
      <span>{title}</span>
      <button className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}
