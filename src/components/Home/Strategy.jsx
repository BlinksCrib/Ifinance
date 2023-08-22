const Strategy = () => {

  const strategys = [
    'Investment Trading',
    'Support On Raising Funds the quick fox jumps over the lazy dog',
    'Financial Analysis',
    'Taxation Planning',
    'Save money and tim',
    'Outsourced Consulting Business',
  ]

  return (
    <div className='parent-cont'>
      <div className='sub-cont justify-center items-center flex-column'>
        <div className='top-head'>
          <h1>Better Strategy With Quality Business</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='row justify-between items-center'>
          {strategys?.map((strategy, i) => (
            <div className='col-lg-4 mb-3 col-md-6 col-12' key={i}>
              <div className='card cards'>
                <div className=''>
                  <h4>{strategy}</h4>
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

export default Strategy
