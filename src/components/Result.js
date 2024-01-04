import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './Resulttable'
import '../styles/Result.css'

function Result() {
  function onRestart(){
    console.log("restarted");
  }
  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    <div className='result flex-center'>
        <div className='flex'>
            <span>Username</span>
            <span className='bold'>Gokul</span>
        </div>
        <div className='flex'>
            <span>Total Quiz Points : </span>
            <span className='bold'>60</span>
        </div>
        <div className='flex'>
            <span>Total Questions : </span>
            <span className='bold'>100</span>
        </div>
        <div className='flex'>
            <span>Total Attempts : </span>
            <span className='bold'>2</span>
        </div>
        <div className='flex'>
            <span>Total Earn Points : </span>
            <span className='bold'>20</span>
        </div>
        <div className='flex'>
            <span>Quiz Result</span>
            <span  className='bold'>pass</span>
        </div>
    </div>

    <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
    </div>

    <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
    </div>
</div>
  )
}

export default Result