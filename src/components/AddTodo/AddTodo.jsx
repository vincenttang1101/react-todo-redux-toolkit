import { useState } from "react";
import { Button } from "../Button/Button";
import TodoModal from "../TodoModal/TodoModal";

function AddTodo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        id="add_todo"
        variant="primary"
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      <TodoModal type="Add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default AddTodo;
