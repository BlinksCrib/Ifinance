import React from 'react'

const ClientSay = () => {

    const testimonials = [
      {
        name: 'Regina Miles',
        work: 'Designer',
        testmon:"Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        pics:"",
        star:2
      },
    ]

  return (
    <div className='parent-cont'>
      <div className='sub-cont justify-center items-center flex-column'>
        <div className='top-head'>
          <h1>What Clients Say</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='row justify-center items-center'>
          {testimonials?.map((testimonial, i) => (
            <div className='col-8 mb-3' key={i}>
              <div className='card client-card'>
                <div className=''>
                  <h4>{testimonial?.name}</h4>
                  <p>{testimonial?.work}</p>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                {[...Array(testimonial.star)].map((_, starIndex) => (
                  <span key={starIndex}>⭐️</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientSay