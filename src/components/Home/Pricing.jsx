import React from 'react'

const Pricing = () => {


  const prices = [
    {
      tier: 'FREE',
      amount: 0,
    },
    {
      tier: 'STANDARD',
      amount: 19,
    },
  ]

  return (
    <div className='parent-cont'>
      <div className='sub-cont justify-center items-center flex-column'>
        <div className='top-head'>
          <h1>Pricing</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='row justify-between items-center'>
          {prices?.map((price, i) => (
            <div className='mb-3 col-lg-6 col-12' key={i}>
              <div className='card cards'>
                <div className=''>
                  <h2>{price.tier}</h2>
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
