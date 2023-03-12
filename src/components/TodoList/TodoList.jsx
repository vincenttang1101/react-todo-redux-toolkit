import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { container, child } from "../Motion/Motion";

function TodoList({ todos }) {
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filterPriority = useSelector((state) => state.todo.filterPriority);

  todos.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  const filteredTodoList = todos.filter((item) => {
    if (filterStatus === "All Status" && filterPriority === "All Priority") {
      return true;
    } else if (
      (filterStatus !== "All Status" && filterPriority === "All Priority") ||
      (filterPriority !== "All Priority" && filterStatus === "All Status")
    ) {
      return (
        (true && item.priority === filterPriority) ||
        (true && item.status === filterStatus)
      );
    } else if (
      filterStatus !== "All Status" &&
      filterPriority !== "All Priority"
    ) {
      return item.status === filterStatus && item.priority === filterPriority;
    }
    return true;
  });

  return (
    <motion.div
      className={styles.todoList}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos Found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default TodoList;
