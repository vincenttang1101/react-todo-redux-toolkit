import styles from "./TodoModal.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import moment from "moment";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { addTodo, updateTodo } from "../TodoItem/TodoSlice";
import { dropIn } from "../Motion/Motion";

function TodoModal({ todo, type, modalOpen, setModalOpen }) {
  moment.suppressDeprecationWarnings = true;

  const [title, setTitle] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState(moment().toDate());
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      if (type === "Add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            priority,
            deadline: moment(deadline).format("LL"),
          })
        );
        toast.success("Task added successfully");
        setModalOpen(false);
      }
      if (type === "Update") {
        if (
          todo.title !== title ||
          todo.status !== status ||
          todo.priority !== priority ||
          todo.deadline !== deadline
        ) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
              priority,
              deadline: moment(deadline).format("LL"),
            })
          );
          toast.success("Task updated successfully");
        } else {
          toast.error("No Change");
          return;
        }
      }
      setModalOpen(false);
    } else {
      toast.error("Please enter title !");
    }
  };

  useEffect(() => {
    if (type === "Update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
      setPriority(todo.priority);
      setDeadline(moment(todo.deadline).toDate());
    } else {
      setTitle("");
      setStatus("Pending");
      setPriority("Low");
      setDeadline(moment().toDate());
    }
  }, [type, todo, modalOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.modal_wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal_container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              role="button"
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}> {type} Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>
              <label htmlFor="priority">
                Priority
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>
              <label htmlFor="deadline">Deadline</label>
              <div className={styles.datePicker}>
                <DatePicker
                  value={deadline}
                  onChange={setDeadline}
                  format="dd-MM-yyyy"
                />
              </div>
              <div className={styles.buttonContainer} id="add_cancel">
                <Button type="submit" variant="primary">
                  {type === "Add" ? "Add Task" : "Update Task"}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
