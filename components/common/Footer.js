import Link from "next/link"
import { TitleLogo } from "./Title"

import {  AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Crafter' caption='Byte' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+91 7021011068</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About agency</Link>
              </li>
              <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Demo design system</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.upwork.com/workwith/omkarm16'>
                    <SiUpwork  size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://github.com/omkar01111'>
                    <AiFillGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/omkar_more07?igsh=Nmt3OHpvdWl4M2Qz'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/in/omkar-more-599923203/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 ByteCrafter IN . ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>ByteCafter Company</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
