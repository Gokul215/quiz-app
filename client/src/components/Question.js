import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import data from '../database/data'
/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.question);
    const result = useSelector(state => state.result.result);
    const res = useSelector(state => state);
    const [{ isLoading, serverError}] = useFetchQestion() 

    const questions = useSelector(state => state.question.queue[state.question.trace])
    // const options = useSelector(state => state.question.queue[state.question.trace])
    const dispatch = useDispatch()
    //  const ques = useSelector(state => state.questions)

    useEffect(() => {
      
        // console.log(questions);
        dispatch(updateResult({ trace, checked}))
    }, [checked])
    //  console.log(options);
    // console.log(questions);
     console.log(res);

    
    function onSelect(i){

        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}