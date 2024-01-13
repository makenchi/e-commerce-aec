import React, {Fragment} from 'react'

const Footer = () => {
  return (
    <Fragment>
      <div className='text-center bg-dark text-white py-2 fixed-bottom'>
        <span>
          Developed by{" "}
          <a href='https://github.com/makenchi' target='blank'>
            Lucas Santos
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;