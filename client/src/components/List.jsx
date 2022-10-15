import React from 'react'

const obj = [{
    type : "Savings",
    color : '#f9c74f',
    percent:45},
    {
        type : "investments",
        color : '#f9c74f',
        percent:45},
    {
    type : "spending",
    color : '#f9c74f',
    percent:45},
    
]
const List = () => {
  return (
    <div className="flex flex-col gap-2">
        <h1>History</h1>
        {obj.map((v,i) => <Transaction key={i} category={v}/>)}
    </div>
  )
}

export default List

function Transaction({category}){
    if (!category) return null;
    return (
        <>
        <div className='flex justify-between border-r-4 border-r-indigo-500'>
            <button>X</button>
            <span>{category.type}</span>
        </div>
        </>
    )
}