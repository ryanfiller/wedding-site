import React from 'react'
import Link from 'gatsby-link'

import Image from '../components/image.js'
import Ferns from '../components/ferns.js'
import Header from '../components/header.js'
import Location from '../components/location.js'
import Rsvp from '../components/rsvp.js'

import styled from 'styled-components';
import styles from '../config/styles.js';

const Invite = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.main`
  font-size: 1.75rem;
  width: 100%;

  p {
    font-family: ${styles.sansSerif}
  }
`;

const IndexPage = () => (
  <Invite>
  
    <Image />
  
    <Header />

    <Ferns />

    <Body>
      {/* <Location 
        title={'Dixon Gallery & Gardens'}
        address={'4339 Park Ave'}
        url={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.0059232391327!2d-89.91941168505947!3d35.10656298033234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f841869ab43bb%3A0x1236a41bd3f0242a!2sDixon+Gallery+%26+Gardens!5e0!3m2!1sen!2sus!4v1518145884877'}
      />

      <Location 
        title={"Folk's Folly"}
        address={'551 S Mendenhall Rd'}
        url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.627892658846!2d-89.89828048505913!3d35.116001480330056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f847acb04379b%3A0x6f8f6af14e306238!2sFolk's+Folly+Prime+Steak+House!5e0!3m2!1sen!2sus!4v1518146438403"}
      />   */}

      <Rsvp />
      
    </Body>
    

  </Invite>
)

export default IndexPage
