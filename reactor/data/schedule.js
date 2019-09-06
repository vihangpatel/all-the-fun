export const scheduleList = {
    workshops: [
      {
        type: 'workshop',
        time: '09:30 AM - 05:30 PM',
        venue: 'Planet Hollywood',
        day: 'Thursday',
        title: 'Building your first Design System: from scratch to production',
        description: 'This is a hands-on workshop for developers in which you will learn how to define a common language for collaboration and iterate on products faster.Learn the best practices of component driven design and how to standardize your design patterns. Leverage React to build a component library that can be used in products and can evolve as teams use it. At the end of the day, you will have a small but complete Design system implementation that will cover the full product lifecycle.',
        trainer: {
          name: 'Siddharth Kshetrapal',
          image: 'assets/images/speakers/siddharth.jpg'
        }
      },
      {
        type: 'workshop',
        time: '09:30 AM - 05:30 PM',
        venue: 'Conference, Main Hall',
        day: 'Thursday',
        title: 'Practical ReasonML for React devs',
        description: 'Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems. In this workshop we won\'t only see how and why we should write our code in ReasonML, but talk about practical applications of using ReasonML in new or existing React projects',
        trainer: {
          name: 'Vladimir Novick',
          image: 'assets/images/speakers/vladir.jpg'
        }
      },
      {
        type: 'workshop',
        time: '09:30 AM - 05:30 PM',
        venue: 'Conference, Main Hall',
        day: 'Thursday',
        title: 'Advanced GraphQL',
        description: 'GraphQL is a new way to build APIs for modern apps. Building APIs with GraphQL often needs a mental shift from RESTful APIs. In this workshop, we will cover all the concepts required for building GraphQL based apps. We will build a simple e-commerce web app with GraphQL (apollo-server) on the backend and React & Apollo Client on the frontend in this workshop.',
        trainer: {
          name: 'Kiran Abburi',
          image: 'assets/images/speakers/kiranAbburi.jpg'
        }
      }
    ],
    conference: {
      day1: [
        {
          type: 'basic',
          time: '08:30 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Badges Pickup & Breakfast'
        },
        {
          type: 'basic',
          time: '09:30 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Conference opening & welcome'
        },
        {
          type: 'talk',
          time: '10:00 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'TBA',
          description: '',
          speaker: {
            image: 'assets/images/speakers/sunil_pai.jpg',
            name: 'Sunil Pai'
          }
        },
        {
          type: 'talk',
          time: '10:30 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'GraphQL State Management in a React World',
          description: 'Once we receive data from an API, how do we manage it on the GraphQL client side? How do hooks work with GraphQL? How can we leverage Apollo client to manage our state? Can we use Redux along with GraphQL ?  In this talk, I will be answering these questions and talking about state management solutions that work well with GraphQL. I will also be talking about the GraphQL journey at PayPal.',
          speaker: {
            image: 'assets/images/speakers/shruti.jpg',
            name: 'Shruti Kapoor'
          }
        },
        {
          type: 'talk',
          time: '11:00 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Curious Cases of GraphQL',
          description: 'As GraphQL moves into the mainstream, the tooling & ecosystem has grown and has made it possible to do much more with GraphQL than using it as just a data layer. In this talk, I\'ll show how developers are using GraphQL as an API gateway to accomplish things that you may have never thought possible.',
          speaker: {
            image: 'assets/images/speakers/nader_dabit.jpg',
            name: 'Nader Dabit'
          }
        },
        {
          type: 'break',
          time: '11:30 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Break',
          community: 'true'
        },
        {
          type: 'talk',
          time: '11:55 AM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Cleartrip’s reactive journey from 3 to 0.2s using Apollo GraphQL, Redis Caching and Monitoring',
          description: 'We have built a single GraphQL endpoint @Cleartrip to remove the dependency of the react client with the Rest API. This will avoid the unnecessary over fetching of verbose data and manipulation on the client, making the react client cleaner and faster (3 → 0.2s document load).I will also talk about how we improved page load time using redis caching at Graphql server and monitored the results using new relic.',
          speaker: {
            image: 'assets/images/speakers/EeshTyagi.jpg',
            name: 'Eesh Tyagi'
          }
        },
        {
          type: 'talk',
          time: '12:25 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: '"Intuitive" Tooling',
          description: 'One of the nuances of working in frontend development is constantly being told that [insert whatever tooling, frameworks or technologies here] are “super simple” or “easy to pickup”. While on the surface this seems great, the reality is that many of these technologies are riddled with syntax quirks, incomplete documentation and a high barrier to entry.In this talk, we’ll discuss why truly intuitive tooling doesn’t exist, go over some common misconceptions in the React community and learn more inclusive ways to talk about emerging frontend technologies.',
          speaker: {
            image: 'assets/images/speakers/carolyn.jpg',
            name: 'Carolyn Stransky'
          }
        },
        {
            type: 'break',
            time: '01.05 PM',
            venue: 'Planet Hollywood',
            day: 'Friday',
            title: 'Lunch',
            community: 'true'
          },
        {
          type: 'talk',
          time: '02.30',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Making Development More Visual',
          description: 'Building websites is a very visual process. The goal often is to make a website that is visually appealing and easy to use. However, we\'re always building websites with code. Changing margins is done by typing, changing font styles is done by typing, and every change often requires you to wait a while before you can see the result.During this talk I want to explore how we can make our development tooling more visually oriented. What can we do to lower the feedback loop and make it easier to create beautiful websites and apps?',
          speaker: {
            image: 'assets/images/speakers/ives.jpg',
            name: 'Ives van Hoorne'
          }
        },
        
        {
          type: 'talk',
          time: '03:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Modular client-side GraphQL with urql',
          description: 'Recently we at Formidable have introduced urql. A new take on client-side GraphQL. Built to be easy to get started with and be extensible, so it can be customised in any number of ways.This talk is an introduction to urql and why it exists, and shows off some of what\'s possible by having as much power as possible over your GraphQL client and even how it caches.',
          speaker: {
            image: 'assets/images/speakers/phill.jpg',
            name: 'Phil Plückthun'
          }
        },
        {
          type: 'talk',
          time: '03:30 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Build your backend with GraphQL & Serverless in Redux style',
          description: 'What if it was possible to build backend features for our react apps in the same way that we use redux in our react apps? In this live-coding demo, I will show you how we’ll add backend business logic using the redux abstractions of dispatching actions, writing reducers as pure functions and subscribing to updated state. Our backend will be completely serverless and using open-source and managed services so that we’re not actually deploying and maintaining any servers. We will use GraphQL mutations from our React app to dispatch actions. These will trigger serverless functions which are pure and return the modified state, which will be persisted safely on a cloud managed database. Portions of your app that are subscribed to the state using GraphQL subscriptions (live-queries) will automatically update! You will witness the raw awesomeness of being able to use JavaScript and GraphQL in a pattern that you are comfortable with to build backend features from scratch.',
          speaker: {
            image: 'assets/images/speakers/ShahidhKMuhammed.jpg',
            name: 'Shahidh K Muhammed'
          }
        },
        {
          type: 'talk',
          time: '04:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Beats on the web - A journey into performance',
          description: 'React is a brilliant JavaScript library for building simple and complex user interfaces. It is quite performant when used correctly but there are times when the library alone is not enough to achieve what we want. This talk focuses on using the power of React and the platform together to build a fast and performant music application. It will involve using the different threads, web features and React in sync. I will be talking about the journey of converting an idea into a product and different decisions I had to take both in regards to design and implementation. ',
          speaker: {
            image: 'assets/images/speakers/RiteshKumar.jpg',
            name: 'Ritesh Kumar'
          }
        },
        {
            type: 'break',
            time: '04:30 PM',
            venue: 'Conference, Main Hall',
            day: 'Friday',
            title: 'Break',
            community: 'true'
        },
        {
          type: 'talk',
          time: '05:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Conditional Modules & Dynamic Bundling, A Netflix Original',
          description: 'Learn about how we, at Netflix, hacked Webpack for our needs, leveraged Abstract Syntax Tree (AST) to identify conditional dependencies in our dependency graph and glued them all together to build a highly scalable, server side JS and CSS bundler, that serves these unique user experiences to millions of Netflix customers across the globe.',
          speaker: {
            image: 'assets/images/speakers/RajatKumar.jpg',
            name: 'Rajat Kumar'
          }
        },
        {
          type: 'talk',
          time: '05:30 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'WebVR - the Disruption in Immersive Space',
          description: 'WebVR is a latest technology and developing it is not boring like lines and lines of code to get a small VR experience. Just a few steps to do the magic. If one is interested to learn the tricks of the magician and get the secrets behind the screen revealed then there you are, must attend my talk to get the cats off the bag. Also, having been contributed for Mozilla since 5 years I will be also dealing with how A-frame can help in this web driven technology of WebVR. Also get some free tips on how your React.js can get a VR effect in just a snap of finger.',
          speaker: {
            image: 'assets/images/speakers/bhuvana.jpg',
            name: 'Bhuvana Meenakshi Koteeswaran'
          }
        },
        {
          type: 'talk',
          time: '06:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'DRY when writing a GraphQL React App',
          description: '\'Let\'s face it, writing React apps with GraphQL is verbose. Your team took up a massive application write using React + GraphQL. It has a team of 200+ developers working on the same codebase. You need tools! You need abstraction! You need patterns! You don\'t want the same code to be written multiple times everywhere. How do you do that? Here comes middlewares on the frontend, links from Apollo, Observables and ASTs to ease your headache and make sure that you increase your team\'s productivity by making everyone write less code. Whether you are a single developer in a small startup or a big team working on a massive project, you do want to have these tricks up your sleeve!',
          speaker: {
            image: 'assets/images/speakers/TanayPratap.jpg',
            name: 'Tanay Pratap'
          }
        },
        {
          type: 'basic',
          time: '06:30 PM',
          venue: 'Conference, Main Hall',
          day: 'Friday',
          title: 'Closing & Preping for Day 2'
        }
      ],
      day2: [
        {
          type: 'basic',
          time: '09:00 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: "MC's opening stage"
        },
        {
          type: 'talk',
          time: '09:30 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'You Belong Here',
          description: 'Done well, open source is one of the highest-value targets for businesses these days. Companies like Facebook and Airbnb leverage OSS as a source of brand equity and recruiting, among other advantages. However, OSS is still uncomfortable for many companies — and even if they do open source their tools, these projects often fail to launch — because they’re missing the most important (and best) part of OSS: the community.Projects that survive in today’s landscape have thriving communities that care deeply about the quality and advancement of open source and the people using it. But open source can also be intimidating to newcomers, and occasionally unwelcoming. In this talk, learn how popular open source framework Gatsby has doubled down on community, including: 1. Offering open pair programming hours 2. Trusting all contributors with merge access 3. Sending free swag to contributors... And much more! Learn how you can borrow our strategies to create a healthy, welcoming community for your open source projects, starting today!',
          speaker: {
            image: 'assets/images/speakers/jason.jpg',
            name: 'Jason Lengstorf'
          }
        },
        {
          type: 'talk',
          time: '10:00 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'A Journey to the Center of a Slow React App',
          description: 'What are the major factors that slow down a web application written in React? Can we mitigate them? If so, what are the tradeoffs. I will be speaking about perf improvements we made in our large application. From state management to measuring correctly to dealing with legacy frontend, this talk will cover a variety of reasons why things got slow. And how to deal with it.',
          speaker: {
            image: 'assets/images/speakers/pavithra.jpg',
            name: 'Pavithra Kodmad'
          }
        },
        {
          type: 'talk',
          time: '10:30 AM',
          venue: 'Planet Hollywood, Goa',
          day: 'Saturday',
          title: 'Architecting scalable serverless applications with GraphQL api using Hasura',
          description: 'In this talk we will see what are the benefits of building event driven Realtime GraphQL backend and what problems it will solve. We will see how we can bootstrap our GraphQL backend fast with free and open source Hasura engine and connect it to serverless functions for custom business logic, providing our web or mobile apps with infinitely scalable backend with modern GraphQL api.',
          speaker: {
            image: 'assets/images/speakers/vladir.jpg',
            name: 'Vladimir Novick'
          }
        },
        {
          type: 'break',
          time: '11:00 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Break',
          community: 'true'
        },
        {
          type: 'talk',
          time: '11:25 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Refactoring React',
          description: 'This is a talk about code quality for people already working with React. Learn how to identify code smells in your React app and how to improve it. Let’s pair program to refactor some okay-okay code to make it great code.',
          speaker: {
            image: 'assets/images/speakers/siddharth.jpg',
            name: 'Siddharth Kshetrapal'
          }
        },
        {
          type: 'talk',
          time: '11:55 AM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'High Performance E-commerce App in React',
          description: 'This talk will be focused on building high-performance e-commerce application in React. Where we look at architecture, server-side rendering, and best practices and things to avoid in the process.',
          speaker: {
            image: 'assets/images/speakers/rex.jpg',
            name: 'Rex Isaac Raphael'
          }
        },
        {
          type: 'talk',
          time: '12:25 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'The art of over-engineering',
          description: 'As developers, we have the tendency to over-engineer everything we build. This can be seen as a bad thing. But is it really a bad thing? Let\'s walk over why we do this, what we can learn from it and the several types of over-engineering and what we can learn from it. You will leave this talk feeling better about your over-engineered projects I promise.',
          speaker: {
            image: 'assets/images/speakers/sara_vieria.jpg',
            name: 'Sara Vieira'
          }
        },
        {
          type: 'break',
          time: '01:05 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Lunch',
          community: 'true'
        },
        {
          type: 'talk',
          time: '02:30 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'State of preact',
          description: 'Preact and its ecosystem has recently undergone an overhaul. It now supports all the latest features from React 16 from hooks to suspense.This talk will cover the how we got there and whats in the charts for us.I will also talk about how Preact guards and pushes your app performance with its Meta framework preact cli.',
          speaker: {
            image: 'assets/images/speakers/prateek.jpg',
            name: 'Prateek Bhatnagar'
          }
        },
        {
          type: 'talk',
          time: '3:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Case study: High performance image upload for web',
          description: 'Operating on files (and images) and extracting crucial information out of them in the browser can be tough. Performing this while keeping the main thread free can be tougher. This talk will focus on the efforts made to streamline uploading product images by customers while they write reviews for the same.',
          speaker: {
            image: 'assets/images/speakers/AbinashMohapatra.jpg',
            name: 'Abinash Mohapatra'
          }
        },
        {
          type: 'talk',
          time: '3:30 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'React for Designers',
          description: 'The almighty React is not just for developers, it\'s for everyone! It leaves no one behind. With React\'s component-driven architecture, UX and web designers can make use of this quality and integrate React in their workflow to bridge the gap between design/prototyping tool and what actually goes on the web in production. This talk explores the topic on how React is not only well suited for designing static components but is well suited for rapid prototyping with interactions.',
          speaker: {
            image: 'assets/images/speakers/AnanyaNeogi.jpg',
            name: 'Ananya Neogi'
          }
        },
        {
          type: 'talk',
          time: '04:00 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Building offline first apps with GraphQL & Apollo',
          description: 'Offline first apps have a unique set of challenges to keep them fully functional even in offline mode. On top of that, GraphQL based apps need new ways of solving these challenges. In this talk, I will share my experience with implementing offline first app with GraphQL & Apollo.',
          speaker: {
            image: 'assets/images/speakers/kiranAbburi.jpg',
            name: 'Kiran Abburi'
          }
        },
        {
            type: 'break',
            time: '04:30 PM',
            venue: 'Conference, Main Hall',
            day: 'Saturday',
            title: 'Break',
            community: 'true'
          },
        {
          type: 'talk',
          time: '4:55 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Sleeping well at night with cypress.io',
          description: 'Why are we afraid of updating our React app on Friday evening? Mostly because its hard to know if nothing is broken because manual testing takes time and automated testing was not reliable. (And we really want to go home). With cypress things are different. In this talk, we are going to cover how to start covering your React app with e2e tests and showcase coolest features that cypress.io has to offer. Automated tests dont have to be boring, difficult to write and even harder to debug. We deserve to have tests we can count on, even when shipping stuff as soon as ASAP.',
          speaker: {
            image: 'assets/images/speakers/tomasz.png',
            name: 'Tomasz Łakomy'
          }
        },
        {
          type: 'talk',
          time: '05:25 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'React, Collaborate and Listen',
          description: 'According to npm, 63% of JavaScript developers use React. This is for a good reason: of all the ways we’ve tried building applications on the web, React seems to have chosen the right tradeoffs to make developers and teams happy and productive. React is eating the web.According to its website, React is a JavaScript library for building user interfaces. It’s also an ecosystem of open source tools and development practices. But most importantly, React is a community of people with a firm grip on the steering wheel of web development and where it’s going.Do we know where we are going? When do we know whether we’ve gone too far? Siri, how can we build the best products for our users, while ensuring the continued health of the open web? Siri?Jani is part of the React industrial complex. At his job at Formidable he helps companies and teams build software with JavaScript and React. He advocates the use of React in his conference talks, open source projects, workshops and writing. In this talk full of industry insights, real-world anecdata and many unpopular opinions, he’ll offer his industry insider point of view on where we as a community of developers may have lost the plot, and how we can do better.This is a wake-up call, and the call is coming from inside the house.',
          speaker: {
            image: 'assets/images/speakers/jani.jpg',
            name: 'Jani Eväkallio'
          }
        },
        {
         type: 'basic',
          time: '06:25 PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'Closing Key Note of React India 2019'
        },
        {
          type: 'basic',
          time: '8PM - 10.30PM',
          venue: 'Conference, Main Hall',
          day: 'Saturday',
          title: 'After Party + Some exciting announcement soon'
        }
      ]
    }
  }
