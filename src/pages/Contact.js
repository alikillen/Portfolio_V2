import React from "react";
import "../App.css";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <div>
      <h1 className='contact'>Contact</h1>
      <p>Have your people call my people.</p>

      <p>there should probably be a form here...</p>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
