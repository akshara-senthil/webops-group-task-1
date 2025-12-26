import React from 'react'
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
//import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-[#020617] py-4 px-4 md:p-16 lg:p-24'>
      <div className="footer-container bg-[#050b27] text-gray-400 py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">About Us</h3>
          <p className="text-sm">
            Shaastra is the annual technical festival of IIT Madras, renowned for its student-driven initiatives and cutting-edge innovations.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:" className='hover:underline text-gray-400'>webops@shaastra.org</a></li>
            <li><a href="tel:+91-44-2257-8100" className='hover:underline text-gray-400'>+91-44-2257-8100</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-emerald-400">Follow Us</h3>
          <ul className="flex space-x-4 text-sm">
            <li><FaFacebookF className='text-blue-400'/><a href="https://www.facebook.com/shaastra.iitm" target="_blank" rel="noopener noreferrer" className='hover:underline text-gray-400'>Facebook</a></li>
            <li><FaInstagram className='text-pink-400'/><a href="https://www.instagram.com/shaastra.iitm/" target="_blank" rel="noopener noreferrer" className='hover:underline text-gray-400'>Instagram</a></li>
            <li><FaLinkedin className='text-blue-300'/><a href="https://www.linkedin.com/company/shaastra-iitm/" target="_blank" rel="noopener noreferrer" className='hover:underline text-gray-400'>LinkedIn</a></li>
            <li><FaTwitter className='text-gray-300'/><a href="https://twitter.com/shaastra_iitm" target="_blank" rel="noopener noreferrer" className='hover:underline text-gray-400'>Twitter</a></li>
          </ul>
        </div>

      </div>
      <div className='border border-t bg-[#050b27] p-4'>
      <p className="text-center text-sm text-gray-400 py-4">© 2024 Shaastra. All rights reserved.</p>
        
      </div>
    </footer>
    
  )
}

export default Footer
