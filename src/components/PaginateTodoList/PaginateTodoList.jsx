import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import TodoList from "../TodoList/TodoList";
import "./PaginateTodoList.scss";

function PaginateTodo() {
  const todoList = useSelector((state) => state.todo.todoList);
  const todos = [...todoList];
  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = todos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(todos.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % todos.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <TodoList todos={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="item"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default PaginateTodo;
