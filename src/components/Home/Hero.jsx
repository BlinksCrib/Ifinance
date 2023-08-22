// hero component right picture
import phone from "../../assets/hero.svg"

const Hero = () => {
  return (
    <div className='parent-cont'>
      <div className='sub-cont justify-center items-center '>
        <div className='row justify-between items-center'>
          {/* the left side */}
          <div className='col-lg-6 col-12 mb-5 mb-lg-0'>
            <h1>Financial Assistance With True Purpose</h1>
            <p>
              We know how large objects will act, but things on a small scale.
            </p>
            <button className='hero_first-btn'>Get Quote Now</button>
            <button className='hero_second-btn'>Learn More</button>
          </div>
          {/* the right side */}
          <div className='col-lg-5 col-12'>
            <img
              src={phone}
              alt='a phone mock-up with blue backgroun under'
              className='hero-img'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero