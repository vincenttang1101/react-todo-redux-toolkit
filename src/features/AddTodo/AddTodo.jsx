import { useState } from "react";
import { Button, TodoModal } from "../../components";

export const AddTodo = () => {
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
};
