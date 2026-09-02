import './Investment.scss'

function Investment(){
    return(
        <div className='hero'>
            <div className="hero-left">
          <h1>
            Investing in <br/>Knowledge and<br />
            <span>Your Future<br/>
            </span>
          </h1>

          <p>
            Good students aim for good grades great students aim for understanding
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Course</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfIgjl4xIY4gSzgKhzoZdue1WTyxVpP12qN8aPDQBww&s=10"
            alt=""
          />
        </div>
        </div>
    )
}
export default Investment;