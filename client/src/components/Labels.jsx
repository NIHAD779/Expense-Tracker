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
const Labels = () => {
  return (
    <>
    {obj.map((v,i)=><Labelcomponent key ={i} data = {v}/>)}
    </>
  )
}

export default Labels 

function Labelcomponent({data}){
    if (!data) return <></>;

    return(
        <>
        <div className='flex'>
            <div className='flex gap-2'>
                <div className='bg-[{data.color}]'></div>
                <h3>{data.type}</h3>
            </div>
            <h3>{data.percent}</h3>  
        </div>
        </> 
    )
}