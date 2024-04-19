import React from 'react'
import Button from './Button';

export const ContactUs = (props) => {
  return (
    <div>
      ContactUs
      <img src={props.img1} alt="water" style = {{ width:"100px" }} />
      <Button/>
    </div>
  )
}
export default ContactUs;
