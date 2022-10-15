import React from 'react'
import Form from './components/Form'
import Graph from './components/Graph'
const App = () => {
  return (
    <div className='mx-20'>
      <header className='text-center bg-slate-500 my-10 text-[50px]'> Expense Tracker</header>
      <div className='flex justify-evenly '>
        <Graph/>
        <Form/>
      </div>
    </div>

  )
}

export default App