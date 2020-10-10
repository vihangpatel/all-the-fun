import React from 'react';

const tweetsBlockQuotes = [
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">At <a href="https://twitter.com/react_india?ref_src=twsrc%5Etfw">@react_india</a> I tried a different presentation format to explain <a href="https://twitter.com/hashtag/JWT?src=hash&amp;ref_src=twsrc%5Etfw">#JWT</a> <a href="https://twitter.com/hashtag/auth?src=hash&amp;ref_src=twsrc%5Etfw">#auth</a> best practices with <a href="https://twitter.com/hashtag/GraphQL?src=hash&amp;ref_src=twsrc%5Etfw">#GraphQL</a>. The whole presentation was written in <a href="https://twitter.com/unity3d?ref_src=twsrc%5Etfw">@unity3d</a> and compiled to <a href="https://twitter.com/hashtag/WebGL?src=hash&amp;ref_src=twsrc%5Etfw">#WebGL</a> and <a href="https://twitter.com/hashtag/wasm?src=hash&amp;ref_src=twsrc%5Etfw">#wasm</a>. Watch it here: <a href="https://t.co/naptIBkEj7">https://t.co/naptIBkEj7</a> and let me know what do you think.</p>&mdash; Vladimir Novick (@VladimirNovick) <a href="https://twitter.com/VladimirNovick/status/1201893932566794242?ref_src=twsrc%5Etfw">December 3, 2019</a></blockquote>`,
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Feeling so lucky I had the chance to talk at <a href="https://twitter.com/react_india?ref_src=twsrc%5Etfw">@react_india</a> 🤩<br><br>Check my talk &amp; all the others&#39; here:<a href="https://t.co/bzcdjpxoqy">https://t.co/bzcdjpxoqy</a></p>&mdash; Eva Ieridou (@evaieridou) <a href="https://twitter.com/evaieridou/status/1201809506457530369?ref_src=twsrc%5Etfw">December 3, 2019</a></blockquote>`,
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Feeling so lucky I had the chance to talk at <a href="https://twitter.com/react_india?ref_src=twsrc%5Etfw">@react_india</a> 🤩<br><br>Check my talk &amp; all the others&#39; here:<a href="https://t.co/bzcdjpxoqy">https://t.co/bzcdjpxoqy</a></p>&mdash; Eva Ieridou (@evaieridou) <a href="https://twitter.com/evaieridou/status/1201809506457530369?ref_src=twsrc%5Etfw">December 3, 2019</a></blockquote>`,
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🎉🎉My talk <a href="https://twitter.com/react_india?ref_src=twsrc%5Etfw">@react_india</a> is in GraphQL Weekly this week! 🎉🎉<br>Very excited <a href="https://t.co/8IdNaxSgzc">https://t.co/8IdNaxSgzc</a></p>&mdash; Shruti Kapoor (@shrutikapoor08) <a href="https://twitter.com/shrutikapoor08/status/1196838478769614849?ref_src=twsrc%5Etfw">November 19, 2019</a></blockquote> `,
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Our <a href="https://twitter.com/react_india?ref_src=twsrc%5Etfw">@react_india</a> case study is finally out feedback will be much appreciated :/<br>“Designing India’s First React Beach conference.” by Saloni Mhapsekar <a href="https://t.co/9TXbe13kKV">https://t.co/9TXbe13kKV</a></p>&mdash; Simply Saloni (@salonimhapsekar) <a href="https://twitter.com/salonimhapsekar/status/1195770673571876864?ref_src=twsrc%5Etfw">November 16, 2019</a></blockquote>`,
  `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Set your reminders to 10:30 PM IST as we will be releasing a special video highlighting the best moments of React India 2019! You will also hear from the speakers and some of our attendees share their experiences at the event<br><br>Click here to check it out: <a href="https://t.co/uUrygeu6m3">https://t.co/uUrygeu6m3</a></p>&mdash; React India 🇮🇳 (@react_india) <a href="https://twitter.com/react_india/status/1193560926550708224?ref_src=twsrc%5Etfw">November 10, 2019</a></blockquote>`,
];

export default () => (
  <section
    className="testimonial-area testimonial-area-version-twenty"
    id="endorsement"
  >
    <div className="overlay" />
    {/* Start Container */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          {/* Start Heading Title */}
          <div className="heading-title text-center">
            <span className="subtitle">Our</span>
            <h2 className="f-weight-700 margin-0">Endorsement </h2>
            <div className="bordershep" />
          </div>
          {/* End Heading Title */}
          <div
            className="partners-wrapper text-center endorsment-wrapper"
            dangerouslySetInnerHTML={{ __html: tweetsBlockQuotes.join('\n') }}
          ></div>
        </div>
      </div>

      {/* End Testimonial Carousel */}
    </div>
    {/* End Container */}
  </section>
);
