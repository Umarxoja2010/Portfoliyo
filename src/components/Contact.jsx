import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: '#000000',
    color: '#e0e0e0',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
  },
  wrapper: {
    display: 'flex',
    maxWidth: 700,
    width: '90%',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(255,255,255,0.1)',
    background: '#1a1a1a',
  },
  container: {
    flex: 1,
    padding: '2rem',
    textAlign: 'left',
  },
  hh1: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '10px',
  },
  containerLeft: {
    borderRight: '1px solid #333',
  },
  h1: {
    margin: '0 0 0.3rem 0',
    fontSize: '1.8rem',
    color: '#4aa3ff',
  },
  h2: {
    margin: '0 0 1rem 0',
    fontWeight: 'normal',
    fontSize: '1.3rem',
    color: '#a0a0a0',
  },
  info: {
    fontSize: '1rem',
    margin: '1rem 0 2rem 0',
    color: '#ccc',
  },
  infoItem: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.3rem',
    marginRight: '0.8rem',
    color: '#4aa3ff',
    flexShrink: 0,
  },
  link: {
    color: '#4aa3ff',
    textDecoration: 'none',
  },
  feedbackSection: {
    color: '#e0e0e0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 600,
  },
  textarea: {
    resize: 'vertical',
    minHeight: 100,
    padding: '0.7rem',
    borderRadius: 6,
    border: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit',
    backgroundColor: '#222',
    color: '#e0e0e0',
    outline: 'none',
  },
  button: {
    marginTop: '1rem',
    padding: '0.7rem',
    background: '#4aa3ff',
    border: 'none',
    borderRadius: 6,
    color: 'black',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    background: '#1a73e8',
  },
  thankYouMessage: {
    marginTop: '1rem',
    color: '#6cf26c',
    fontWeight: 600,
  },
};

const Contact = () => {
  const [feedback, setFeedback] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim().length === 0) return;

    const templateParams = {
      message: feedback,
      from_name: 'Umarxoja Mamarasulov',  // Siz yoki foydalanuvchi nomi
      reply_to: 'umarxojamamarasulov@gmail.com',  // Sizning email yoki foydalanuvchi emaili
    };

    emailjs.send(
      'service_hbmbiss',      // EmailJS Service ID-ni shu yerga yozing
      'template_ov920qc',     // Sizning Template ID (siz oldingiz)
      templateParams,
      '8uDruBM1zMlWqbJ6N'       // EmailJS Public Key yoki User ID
    ).then(() => {
      setShowThankYou(true);
      setFeedback('');
      setTimeout(() => setShowThankYou(false), 5000);
    }, (error) => {
      console.error('Email yuborishda xatolik:', error.text);
      alert('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
    });
  };

  const isMobile = windowWidth < 700;
  const isMoobile = windowWidth < 540;
  const siMoobile = windowWidth < 360;

  return (
    <div style={styles.body}>
      <h1 id="conta" style={styles.hh1}>Contact me</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <main
          style={{
            ...styles.wrapper,
            ...(isMobile ? { flexDirection: 'column', width: '60%' } : {}),
            ...(isMoobile ? { width: '90%' } : {}),
          }}
          aria-label="Kontakt va fikr bildirish formasi"
        >
          <section
            style={{
              ...styles.container,
              ...(siMoobile ? { textAlign: 'center', borderBottom: '1px solid #333', padding: '0' } : {}),
            }}
            aria-labelledby="contact-header"
          >
            <h1 id="contact-header" style={styles.h1}>Umarxo&apos;ja Mamarasulov</h1>
            <h2 style={styles.h2}>Frontend Developer</h2>
            <div style={styles.info} aria-label="Kontakt ma&apos;lumotlari">
              <div style={styles.infoItem}>
                <span style={styles.icon} aria-hidden="true">📍</span>
                <span>Uzbekistan, Sirdaryo</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.icon} aria-hidden="true">✉️</span>
                <a href="mailto:umarxojamamarasulov@gmail.com" aria-label="Email yozish" style={styles.link}>
                  umarxojamamarasulov@gmail.com
                </a>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.icon} aria-hidden="true">📞</span>
                <a href="tel:+998970641310" aria-label="Phone number" style={styles.link}>
                  +998 97 064 13 10
                </a>
              </div>
            </div>
          </section>

          <section style={{ ...styles.container, ...(isMobile ? { textAlign: 'center' } : {}) }} aria-labelledby="feedback-header">
            <h2 id="feedback-header" style={{ ...styles.h2, color: '#4aa3ff' }}>Comment</h2>
            <form id="feedback-form" aria-describedby="feedback-desc" onSubmit={handleSubmit} style={styles.form}>
              <label htmlFor="feedback-textarea" style={styles.label}>Your feedback</label>
              <textarea
                id="feedback-textarea"
                name="feedback"
                placeholder="Write your feedback.."
                required
                aria-required="true"
                style={styles.textarea}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                onFocus={(e) => (e.target.style.outline = '2px solid #4aa3ff')}
                onBlur={(e) => (e.target.style.outline = 'none')}
              />
              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...(isButtonHover ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setIsButtonHover(true)}
                onMouseLeave={() => setIsButtonHover(false)}
              >
                Submit
              </button>
              {showThankYou && (
                <div
                  id="thank-you"
                  role="alert"
                  aria-live="polite"
                  style={styles.thankYouMessage}
                >
                  Thank you for your feedback!
                </div>
              )}
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
