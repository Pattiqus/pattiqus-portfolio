import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from './SectionTitle';
import { MdLocalPhone, MdEmail, MdPlace } from 'react-icons/md'

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem, 2rem, 2rem, 2rem;
    }
  }
`;



export default function ContactComponent() {
  return (
    <ContactSectionStyle>
    <div>
        <div className="container">
            <SectionTitle heading="Contact" subheading="Let's chat!"/>
            <div className='contactSection__wrapper'>
              <div className='left'>
                <ContactInfo icon={<MdLocalPhone />} text='04** *** ***'/>
                <ContactInfo icon={<MdEmail />} text='pattiqus@gmail.com'/>
                <ContactInfo icon={<MdPlace />} text='Melbourne, Australia'/>
              </div>
              <div className='right'>
                <ContactForm/>
              </div>
            </div>
        </div>
    </div>
    </ContactSectionStyle>
  )
}
