import Logo from '../assets/logo.svg'
import Statistics from '../assets/illustration-dashboard.png'
import React, { useState } from 'react'
function ComingSoon() {

    const [valid, setValid] = useState<Boolean>(true)

    const onChang = (element: HTMLInputElement) => {
        const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(element.value.match(validation)) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    const validEmail = valid ? '' : 'not-valid' 

  return (
    <section>
        <figure className='logo'>
            <img src={Logo} alt="" />
        </figure>
        <div className="content">
            <h2>We are launching <span>soon!</span></h2>
            <p>Subscribe and get notified</p>
        </div>
        <div className="notify-input">
            <input type="email" className={validEmail} placeholder='Your email address...' onChange={(e) => onChang(e.target)} />
            <button>Notify Me</button>
        </div>
        {
            !valid && (
                <p className={valid ? '': 'valid-state'}>Email not valid!</p>
            )
        }
        <div className="statistics">
            <figure>
                <img src={Statistics} alt="" />
            </figure>
        </div>
        <footer>
            <div className="links">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="copyright">
                &copy; Copyright Ping. All Rights Reserved
            </div>
        </footer>
    </section>
  )
}

export default ComingSoon