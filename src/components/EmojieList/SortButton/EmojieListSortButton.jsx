import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function EmojieListSortButton({ id, type, onSort }) {
  const onClick = () => {
    onSort({ id, type });
  };

  const icon = type === 'up' ? faArrowUp : faArrowDown;

  return (
    <button className="EmojieList-SortButton" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
