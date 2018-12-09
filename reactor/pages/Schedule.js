import React from 'react'

const Schedule = () => (
  <section class='eventSchedule'>
    <div class='container'>
      <div class='row'>
        <div class='col-md-12'>
          <div class='portfolio-grid'>
            <div class='row'>
              <div class='col-md-6 grid-item business growth platform'>
                <div class='portfolio-item'>
                  <div class='my_schedule_card'>
                    <div class='mr_card_header header1'>
                        <h3>Day 1 July 23, 2018</h3>
                      </div>
                    <div class='people_media'>
                        <div class='media'>
                            <img
                                class='img-fluid align-self-center mr-2'
                                src='assets/images/suhedule/p5.png'
                                alt=''
                                                />
                            <div class='media-body d-flex justify-content-between align-self-center'>
                                <div class='left d-flex align-self-center'>
                                    <div class='info'>
                                        <h4>Building Gov as a Service</h4>
                                        <p>
                                                                By
                                                                {' '}
                                            <a href='speakerprofile.html'>
                                                <span> Piera Mcclure </span>
                                              </a>
                                            {' '}
                                                                Director Slack
                                                            </p>
                                      </div>
                                  </div>
                                <div class='right d-flex align-self-center'>
                                    <p class='time'>08:00-09:00</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Schedule
