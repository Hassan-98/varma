import React from 'react';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Data
import questions from './data.json';
//= Styles
import classes from './info.module.scss';

function Info() {
  const PER_ROW = Math.ceil(questions.length / 2);
  const First_Row_Questions = questions.filter((_, i) => i < PER_ROW);
  const Second_Row_Questions = questions.filter((_, i) => i >= PER_ROW);

  return (
    <section className={`${classes.info} ${montserrat_font}`}>
      <div className="container">
        <p className={classes.subtitle}>FAQ</p>
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="faq_accordion">
          <div className="row g-5">
            <div className="col-lg-6 col-12">
              {
                First_Row_Questions.map((question, index) => (
                  <div className="accordion-item" key={index}>
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {question}
                      </button>
                    </p>
                    <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <strong>This is the first item accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="col-lg-6 col-12">
              {
                Second_Row_Questions.map((question, index) => (
                  <div className="accordion-item" key={index}>
                    <p className="accordion-header">
                      <button
                        className={`accordion-button ${index === 1 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + PER_ROW + 1}`}
                        aria-expanded={index === 1 ? "true" : "false"}
                        aria-controls={`collapse${index + PER_ROW + 1}`}
                      >
                        {question}
                      </button>
                    </p>
                    <div id={`collapse${index + PER_ROW + 1}`} className={`accordion-collapse collapse ${index === 1 ? "show" : ""}`} data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <strong>This is the first item accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info