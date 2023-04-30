import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectButton } from "../../components";
import { updateFilterPriority } from "../../features/TodoList/TodoItem/TodoSlice";

export const FilterPriority = () => {
  const initialFilterPriority = useSelector(
    (state) => state.todo.filterPriority
  );
  const [filterPriority, setFilterPriority] = useState(initialFilterPriority);

  const dispatch = useDispatch();

  const handleUpdateFilterPriority = (e) => {
    setFilterPriority(e.target.value);
    dispatch(updateFilterPriority(e.target.value));
  };

  return (
    <SelectButton
      id="filter_priority"
      value={filterPriority}
      onChange={handleUpdateFilterPriority}
    >
      <option value="All Priority">Priority</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </SelectButton>
  );
};
