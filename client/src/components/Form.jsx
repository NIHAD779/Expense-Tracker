import React from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import { default as api } from "../store/apiSlice";
const Form = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();
  const onSubmit = async (data) => {
    if (!data) return {};
    await addTransaction(data).unwrap();
    // console.log(data);
    resetField("name");
    resetField("amount");
  };
  return (
    <div className="flex flex-col text-center">
      <h1>Transaction</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Salary Investment Savings"
            />
          </div>
          <select {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Salary">Salary</option>
            <option value="Savings">Savings</option>
          </select>
          <div>
            <input type="text" {...register("amount")} placeholder="Amount" />
          </div>
          <button className="">Make Transaction</button>
        </div>
      </form>
      <List></List>
    </div>
  );
};

export default Form;
