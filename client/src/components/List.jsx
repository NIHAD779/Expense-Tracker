import React from "react";
import { default as api } from "../store/apiSlice";
const List = () => {
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const handlerClick = (e) => {
    deleteTransaction(e.target.dataset.id);
    console.log({ _id: e.target.dataset.id });
  };
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    console.log(data);
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick} />
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }
  return (
    <div className="flex flex-col gap-2">
      <h1>History</h1>
      {Transactions}
    </div>
  );
};

export default List;

function Transaction({ category, handler }) {
  if (!category) return null;
  return (
    <>
      <div
        className="flex justify-between border-r-4"
        style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
      >
        <button onClick={handler}>
          <div data-id={category._id ?? "n"}>X</div>
        </button>
        <span>{category.name}</span>
      </div>
    </>
  );
}
