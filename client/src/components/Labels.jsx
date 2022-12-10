import React from "react";
import { default as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper";

const Labels = () => {
  // console.log(api.useGetCategoriesQuery());
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let Transaction;

  if (isFetching) {
    Transaction = <div>Fetching</div>;
  } else if (isSuccess) {
    Transaction = getLabels(data, "type").map((v, i) => (
      <Labelcomponent key={i} data={v} />
    ));
  } else if (isError) {
    Transaction = <div>Error</div>;
  }

  console.log(data);

  return <>{Transaction}</>;
};
export default Labels;
function Labelcomponent({ data }) {
  if (!data) return <></>;

  return (
    <>
      <div className="flex gap-3">
        <div className="flex gap-2">
          <div className="bg-[{data.color}]"></div>
          <h3>{data.type ?? ""}</h3>
        </div>
        <h3>{Math.round(data.percent) ?? ""}</h3>
      </div>
    </>
  );
}
