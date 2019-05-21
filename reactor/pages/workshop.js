import React, { Fragment } from 'react'
import Header from '../header'

export default () => (
    <Fragment>
      <Header hardRefresh />
        <section className="section workshops">
            <div className="container">
                <div className="workshops-title">Workshops at React India Conference</div>
                <div className="workshops-description">
                    <p>On September 26 and 27th, 2019, to extend your conference experience, we'll host multiple workshops targeted both at the React newcomers and hardcore fans. Take the full advantage of your conference visit and get training from our best speakers and trainers.</p>
                    <p>All trainings start at 9:00 (with doors open 8:30) and continue until 17:00 and are <strong>hosted in individual locations, different from the conference venue but in short reach.</strong> Please address individual workshop description for location details and follow your registered mailbox for updates.</p>
                </div>
                <div className="workshops-content">
                    <div className="workshop">
                        <div className="workshop-item workshop-item-lg">
                            <div className="workshop-item-title">Siddharth Kshetrapal</div>
                            <div className="workshop-item-content">
                                <h3>Building your first Design System: from scratch to production</h3>
                                <p> 
                                This is a hands-on workshop for developers in which you will learn how to define a common language for collaboration and iterate on products faster.<br/>
                                Learn the best practices of component driven design and how to standardize your design patterns. Leverage React to build a component library that can be used in products and can evolve as teams use it. At the end of the day, you will have a small but complete Design system implementation that will cover the full product lifecycle.
                                </p>
                            </div>
                        </div>
                        <div className="workshop-item">
                            <div className="workshop-item-title">Pre-requisites</div>
                            <div className="workshop-item-content">
                                <p> 
                                    Working knowledge of React would go a long way. Difficult: Medium to Advanced.
                                </p>
                            </div>
                        </div>
                        <div className="workshop-item">
                            <div className="workshop-item-title">Outline</div>
                            <div className="workshop-item-content">
                                <h4>Introduction to design systems</h4>
                                <ul>
                                    <li>- What are the moving pieces of a design system</li>
                                    <li>- How to define a design system for your company</li>
                                    <li>- Balancing flexibility and consistency across your components</li>
                                </ul>
                                <h4>Concepts and Development</h4>
                                <ul>
                                    <li>- Doing an inventory of your existing products or on-going design concept</li>
                                    <li>- Systemize brand attributes and design decisions into tokens</li>
                                    <li>- Staring a component library with fundamental building blocks</li>
                                    <li>- Combining building blocks to build advanced compound components</li>
                                    <li>- Defining a consistent, easy to use API across your components</li>
                                    <li>- Formalise the definition and usage guidelines into documentation</li>
                                    <li>- Distributing your system with versioning and good documentation</li>
                                </ul>
                                <h4>Other moving parts</h4>
                                <ul>
                                    <li>- Designing a cross-functional design system team</li>
                                    <li>- Creating a implementation strategy and publishing a long-term roadmap</li>
                                    <li>- Updating the system (breaking changes, semver, visual tests, upgrading)</li>
                                    <li>- Getting buy-in and driving adoption in your company</li>
                                    <li>- Common roadblocks that you will hit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="workshop">
                        <div className="workshop-item workshop-item-lg">
                            <div className="workshop-item-title">Vladimir Novick</div>
                            <div className="workshop-item-content">
                                <h3>Practical ReasonML for React devs</h3>
                                <p> 
                                Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems. In this workshop we won't only see how and why we should write our code in ReasonML, but talk about practical applications of using ReasonML in new or existing React projects
                                </p>
                            </div>
                        </div>
                        <div className="workshop-item">
                            <div className="workshop-item-title">Prerequisites</div>
                            <div className="workshop-item-content">
                                <p> 
                                Good JavaScript and React knowledge, open minded, basic functional programming concepts in any programming language is a bonus.
                                </p>
                            </div>
                        </div>
                        <div className="workshop-item">
                            <div className="workshop-item-title">What we will cover</div>
                            <div className="workshop-item-content">
                                <p> 
                                ReasonML core syntax, Bucklescript and interop with existing JavaScript packages, ReasonReact, Reason and GraphQL.<br/>
                                During this workshop we will build a working ReasonReact app with GraphQL backend. We will also add JavaScript npm packages and interop between them and our Reason React app. For final touch we will discuss how to embed our ReasonReact app as part of bigger existing React application.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
  