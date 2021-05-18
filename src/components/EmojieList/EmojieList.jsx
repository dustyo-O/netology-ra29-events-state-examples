import { useState } from "react";
import EmojieListForm from "./Form/EmojieListForm";
import EmojieListItem from "./Item/EmojieListItem";
import EmojieListSortButton from "./SortButton/EmojieListSortButton";

export default function EmojieList() {
  const [list, setList] = useState([{ id: 1, emojie: '❤️', title: 'heart' }]);

  const onItemDelete = (id) => {
    console.log(id);
    setList(prev => prev.filter(item => item.id !== id));
  }

  const onItemAdd = (emojie) => {
    setList(prev => [...prev, emojie]);
  }

  const onSort = ({ id, type }) => {
    if (type === 'up') {
      onSortUp(id);
    } else {
      onSortDown(id);
    }
  };

  const onSortDown = (id) => {
    setList(prev => {
      let swap;
      return prev.reduce((all, current) => {
        if (current.id === id) {
          swap = current;

          return all;
        }

        all.push(current);

        if (swap) {
          all.push(swap);

          swap = undefined;
        }

        return all;
      }, []);
    })
  };

  const onSortUp = (id) => {
    console.log(id);
    setList(prev => {
      return prev.reduce((all, current) => {
        console.log(current.id);
        let swap;
        if (current.id === id) {
          swap = all.pop();
        }

        all.push(current);

        if (swap) {
          all.push(swap);

          swap = undefined;
        }

        return all;
      }, []);
    })
  };

  return (
    <div className="EmojieList">
      {
        list.map(
          (emojie, index) => (
            <div key={emojie.id}>
              <EmojieListItem
                {...emojie}
                onDelete={onItemDelete}
              />
              {index > 0 && <EmojieListSortButton id={emojie.id} type="up" onSort={onSort} />}
              {index < list.length - 1 && <EmojieListSortButton id={emojie.id} type="down" onSort={onSort} />}
            </div>
          )
        )
      }
      <EmojieListForm onEmojieAdd={onItemAdd} />
    </div>
  );
}
