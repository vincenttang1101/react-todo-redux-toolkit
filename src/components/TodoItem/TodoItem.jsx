import { motion } from "framer-motion";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./TodoSlice";
import styles from "./TodoItem.module.scss";
import { getClasses } from "../../utils/getClasses";
import CheckButton from "../Button/CheckButton";
import TodoModal from "../TodoModal/TodoModal";
import moment from "moment";
import { child } from "../Motion/Motion";

function TodoItem({ todo }) {
  moment.suppressDeprecationWarnings = true;

  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.status === "Completed") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo deleted successfully");
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "Pending" : "Completed",
      })
    );
  };
  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "Completed" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <p className={styles.time}>Deadline: {todo.deadline}</p>
              <div
                title={moment(todo.deadline)
                  .subtract(moment().format("LL"), "days")
                  .calendar(null, {
                    sameElse: "DD/MM/YYYY",
                  })}
                className={
                  moment(todo.deadline).diff(moment().format("LL"), "days") > 0
                    ? getClasses([
                        styles.iconDeadline,
                        styles["iconDeadline--early"],
                      ])
                    : moment(todo.deadline).diff(
                        moment().format("LL"),
                        "days"
                      ) < 0
                    ? getClasses([
                        styles.iconDeadline,
                        styles["iconDeadline--end"],
                      ])
                    : getClasses([
                        styles.iconDeadline,
                        styles["iconDeadline--lastDay"],
                      ])
                }
              >
                <RiRadioButtonLine />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.todoActions}>
          <p
            className={
              todo.priority === "Low"
                ? styles.low
                : todo.priority === "Medium"
                ? styles.medium
                : styles.high
            }
          >
            {todo.priority}
          </p>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={() => setUpdateModalOpen(true)}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="Update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
