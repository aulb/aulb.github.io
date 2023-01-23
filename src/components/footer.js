import * as React from 'react'


const Footer = () => {
  const currentYear = (new Date).getFullYear();
  return (
    <div>
      &copy; 2014 - {currentYear}
    </div>
  )
}

export default Footer
