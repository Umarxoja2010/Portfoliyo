import React from 'react';

const Myresume = () => {
  return (
    <>
      <style>{`
        /* Reset and base */
        * {
          box-sizing: border-box;
        }
        body,html {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #000;
          color: #eee;
          line-height: 1.5;
          min-height: 100vh;
        }
        .resume-container {
          max-width: 900px;
          width: 100%;
          display: flex;
          gap: 40px;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          margin: 0 auto;
        }
        section {
          flex: 1 1 45%;
        }
       .resume-container h2 {
          font-weight: 700;
          font-size: 2rem;
          border-bottom: 3px solid #2ecc71;
          padding-bottom: 6px;
          margin-bottom: 20px;
        }
        .timeline-item {
          margin-bottom: 24px;
        }
        .content-box {
          padding: 15px 18px;
          border-radius: 8px;
          background-color: #111;
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .content-box:hover {
          transform: scale(1.04);
        }
        .date {
          font-weight: 600;
          color: #2ecc71;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .title {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 6px;
        }
        .description {
          color: #ccc;
          font-size: 1rem;
        }
        #education-section h2 {
          text-align: left;
        }
        #experience-section h2 {
          text-align: left;
        }
        #experience-section {
          text-align: left;
        }
        #experience-section .timeline-item {
          text-align: left;
        }
        /* Responsive adjustments */
        @media (max-width: 700px) {
          .resume-container {
            flex-direction: column;
            max-width: 600px;
          }
          #experience-section h2,
          #experience-section,
          #experience-section .timeline-item {
            text-align: left;
          }
        }
        @media (max-width: 400px) {
       .resume-container   h2 {
            font-size: 1.6rem;
            margin-bottom: 16px;
          }
          .date {
            font-size: 1rem;
          }
          .title {
            font-size: 1.1rem;
          }
          .description {
            font-size: 0.95rem;
          }
      
        }
      `}</style>
        <h2 id='resum' className='resumh2'>My resume</h2>
      <main className="resume-container" role="main" aria-label="Resume Section">
        <section id="education-section" aria-labelledby="education-title">
          <h2 id="education-title">My Education</h2>
          <article className="timeline-item">
            <div className="content-box">
              <div className="date">2024-2024</div>
              <div className="title">IT Park in Guliston</div>
              <div className="description">
                I learned the basics of programming, algorithms, and the basics of frontend programming in there.
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="content-box">
              <div className="date">2024-2025</div>
              <div className="title">It park in Guliston</div>
              <div className="description">
                I took lessons in web programming from professional teachers, and I learned all the knowledge necessary for the field of Frontend engineering. I did many projects and improved important soft skills and hard skills.
              </div>
            </div>
          </article>
        
        </section>

        <section id="experience-section" aria-labelledby="experience-title">
          <h2 id="experience-title">My Experience</h2>
          <article className="timeline-item">
            <div className="content-box">
              <div className="date">2024-...</div>
              <div className="title">Frontend projects</div>
              <div className="description">
                I have built many independent websites so far and some of them are in available production. You can see them in the portfolio section.
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="content-box">
              <div className="date">2024-...</div>
              <div className="title">Freelance</div>
              <div className="description">
As a freelancer, I work with clients on online platforms
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Myresume;
