import React from 'react'
import Mountcard from './Mountcard'


const Mount = (props) => {
    const datum = props.datas;
    console.log(datum);
  return (
    <>
        {datum.map((x)=>{
          return <Mountcard mountData = {x} key = {x.id} />
        })}
       
    </>
  )
}

export default Mount