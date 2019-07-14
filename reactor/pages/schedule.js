import React, { memo, useState, Fragment } from 'react'
import { scheduleList } from '../data/schedule'

const tabs = [
  { id: 0, name: 'Workshop Day', date: 'Thu, Sep 26', type: 'workshop' },
  { id: 1, name: 'Conf Day 1', date: 'Fri, Sep 27', type: 'conference' },
  { id: 2, name: 'Conf Day 2', date: 'Sat, Sep 28', type: 'conference' }
]

const ShowMoreLess = ({ id, text, flag, handler, thresholdLength = 120 }) => {


  const length = text.length

  const showButton = length > thresholdLength

  return <Fragment>
    {!showButton ? <p className="animate-in">{text}</p> :
      flag ?
        <div key={flag} className="animate-in all">
          {text}
          <i onClick={() => handler(id)}> show less </i>
        </div> :
        <div key={flag} className="animate-in small">
          {text.substr(0, thresholdLength)}
          <i onClick={() => handler(id)}> ... show more </i>
        </div>
    }
  </Fragment>
}

function Schedule() {
  const [currentTab, changeTab] = useState(0)

  // structure of showMores = {
  //  "09:30-10:30": true
  // }
  const [hideText, setHideText] = useState({})

  const toggleHideFlag = speaker => {
    const newHideText = { ...hideText }
    newHideText[speaker] = !newHideText[speaker]
    setHideText(newHideText)
  }

  function onTabChange(e, tab) {
    e.preventDefault()
    changeTab(tab)
  }

  return (
    <section id="schedule" className="schedule_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="heading-title text-center">
              <span className="subtitle">Our</span>
              <h2 className="f-weight-700 margin1 margin-0">Schedule</h2>
              <div className="bordershep" />
            </div>
          </div>
        </div>

        <div className="row margin-b-30 margin-t-30">
          <div className="col-md-10 offset-md-1">
            <div>
              {/* Nav tabs */}
              <ul className="tabs-schedule list-inline" role="tablist">
                {tabs.map((tab, i) => (
                  <li
                    role="presentation"
                    className={currentTab === tab.id ? 'active' : ''}
                    key={tab.id}
                  >
                    <a
                      className="schedule-navlink"
                      onClick={e => onTabChange(e, tab.id)}
                      aria-controls={`0${tab.id + 1}`}
                      role="tab"
                      data-toggle="tab"
                      aria-expanded={currentTab === tab.id}
                    >
                      {tab.name}
                      <span>{tab.date}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* Nav tabs */}
              {/* Tab panes */}
              {currentTab === 0 && (
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className={`tab-pane ${currentTab === 1 &&
                      'active in'} fade`}
                  >
                    {scheduleList.workshops.map((workshop, i) => (
                      <div className="row" key={i}>
                        <div className="col-sm-3 event-info">
                          <span>{workshop.day}</span>
                          <span>{workshop.time}</span>
                          <span className="event-hall">{workshop.venue}</span>
                        </div>
                        <div className="col-sm-9 event-detail">
                          <h3>{workshop.title}</h3>
                          <div className="row margin-b-50">
                            <div className="col-5 col-sm-2">
                              <img
                                src={workshop.trainer.image}
                                alt={workshop.trainer.name}
                                className="img-responsive"
                              />
                            </div>
                            <div className="col-sm-10">
                              <h4>{workshop.trainer.name}</h4>
                              <p className="schedule-desc">
                                <ShowMoreLess
                                  id={workshop.trainer.name}
                                  text={workshop.description}
                                  handler={toggleHideFlag}
                                  flag={hideText[workshop.trainer.name]}
                                />

                                {/* <br />
                              <i>[Short coffee-break at 11:00]</i> */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div className="row margin-b-30" style={{ opacity: '0.7' }}>
                      <div className="col-sm-3 event-info">
                        <span>Thursday</span>
                        <span>13:00 - 14:00</span>
                        <span className="event-hall">First floor</span>
                      </div>
                      <div className="col-sm-9 event-detail">
                        <h3>lunch</h3>
                        <p />
                      </div>
                    </div> */}
                  </div>
                </div>
              )}

              {currentTab === 1 && (
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className={`tab-pane ${currentTab === 0 &&
                      'active in'} fade`}
                  >
                    {scheduleList.conference.day1.map((item, i) => {
                      if (item.type === 'talk') {
                        return (
                          <div className="row" key={i}>
                            <div className="col-sm-3 event-info">
                              <span>{item.day}</span>
                              <span>{item.time}</span>
                              <span className="event-hall">{item.venue}</span>
                            </div>
                            <div className="col-sm-9 event-detail">
                              <h3>{item.title}</h3>
                              <div className="row margin-b-50">
                                <div className="col-5 col-sm-2">
                                  <img
                                    src={item.speaker.image}
                                    alt={item.speaker.name}
                                    className="img-responsive"
                                  />
                                </div>
                                <div className="col-sm-10">
                                  <h4>{item.speaker.name}</h4>
                                  <p className="schedule-desc">
                                    <ShowMoreLess
                                      id={item.speaker.name}
                                      text={item.description}
                                      handler={toggleHideFlag}
                                      flag={hideText[item.speaker.name]}
                                    />
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      } else if (item.type === 'basic') {
                        return (
                          <div
                            className="row margin-b-30"
                            style={{ opacity: '0.6' }}
                            key={i}
                          >
                            <div className="col-sm-3 event-info">
                              <span>{item.day}</span>
                              <span>{item.time}</span>
                              <span className="event-hall">{item.venue}</span>
                            </div>
                            <div className="col-sm-9 event-detail">
                              <h3>{item.title}</h3>
                              <p />
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )}

              {currentTab === 2 && (
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className={`tab-pane ${currentTab === 0 &&
                      'active in'} fade`}
                  >
                    {scheduleList.conference.day2.map((item, i) => {
                      if (item.type === 'talk') {
                        return (
                          <div className="row" key={i}>
                            <div className="col-sm-3 event-info">
                              <span>{item.day}</span>
                              <span>{item.time}</span>
                              <span className="event-hall">{item.venue}</span>
                            </div>
                            <div className="col-sm-9 event-detail">
                              <h3>{item.title}</h3>
                              <div className="row margin-b-50">
                                <div className="col-5 col-sm-2">
                                  <img
                                    src={item.speaker.image}
                                    alt={item.speaker.name}
                                    className="img-responsive"
                                  />
                                </div>
                                <div className="col-sm-10">
                                  <h4>{item.speaker.name}</h4>
                                  <p className="schedule-desc">
                                    <ShowMoreLess
                                      id={item.speaker.name}
                                      text={item.description}
                                      handler={toggleHideFlag}
                                      flag={hideText[item.speaker.name]}
                                    />
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      } else if (item.type === 'basic') {
                        return (
                          <div
                            className="row margin-b-30"
                            style={{ opacity: '0.6' }}
                            key={i}
                          >
                            <div className="col-sm-3 event-info">
                              <span>{item.day}</span>
                              <span>{item.time}</span>
                              <span className="event-hall">{item.venue}</span>
                            </div>
                            <div className="col-sm-9 event-detail">
                              <h3>{item.title}</h3>
                              <p />
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )}
              {/* Tab panes end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Schedule)