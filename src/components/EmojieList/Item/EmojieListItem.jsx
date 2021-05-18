import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './EmojieListItem.css';

export default function EmojieListItem({ emojie, title, id, onDelete }) {
  const onDeleteClick = () => {
    onDelete(id);
  }

  return (
    <div className="EmojieList-Item">
      <span className="EmojieList-ItemTitle">{emojie} {title}</span>
      <button className="EmojieList-ItemDelete" onClick={onDeleteClick}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
