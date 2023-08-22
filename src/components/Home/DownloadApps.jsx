import React from 'react'

const DownloadApps = () => {

    const apps = [
      {
        ware: 'App Store',
      },
      {
        ware: 'Google Play',
      },
      {
        ware: 'Amazon.com',
      },
      {
        ware: 'Windows Store',
      },
    ]

  return (
    <div className='parent-cont'>
      <div className='sub-cont flex-column'>
        <div className='top-head'>
          <h1>Download Our App</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='row justify-between items-center'>
          {apps?.map((app, i) => (
            <div className='col-lg-3 mb-3 col-md-6 col-12' key={i}>
              <div className='card cards flex'>
                <div className="">1</div>
                <div className=''>
                  <p>Download on</p>
                  <h4>{app.ware}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DownloadApps