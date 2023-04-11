import React from 'react'
// import './Loading.css'

const Loading = () => {
  return (
        <section>
            <div className='Loading'>
                <div className="green">
                    <div className="black"></div>
                </div>
                <div className="green">
                    <div className="yellow"></div>
                </div>
                <div className="green">
                    <div className="black"></div>
                </div>
            </div>
            <h1>Loading...</h1>
        </section>
  )
}
export default Loading