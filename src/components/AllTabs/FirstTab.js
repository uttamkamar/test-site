import React, { useRef } from "react";
import "../AllTabs/FirstTab.css";
import img1 from "../../images/img1.jpg";
import ReactPlayer from "react-player";

const VIDEO_PATH = "https://www.youtube.com/watch?v=pQrM5L6C-FQ";

const FirstTab = () => {
  const playerRef = useRef(null);

  return (
    <>
      <section className="fcontainer">
        <h1>Lesson</h1>
        <img src={img1} alt="images" />
        <div className="txtarea">
          <p className="">
            Physics is more than calculating the momentum of billiard balls
            hitting each other or the friction acting on a speeding car’s tires.
            Physics includes the study of practically every form of matter and
            how it interacts with other matter and with energy in various forms.
            The image shows one of several large parabolic antennas that NASA
            physicists used for years to communicate with ships and devices
            completing solar system exploration missions. <br />
          </p>

          <h2>Definition of Physics</h2>
          <br />
          <p>
            What is physics? Physics is the branch of science that studies the
            physical world, including objects as small as subatomic particles
            and as large as galaxies. It studies the nature of matter and energy
            and how they interact. Physicists are inquisitive people who want to
            know the causes of what they see. How does the moon move? Why does
            the moon move? Why do the stars shine? Why do your hands get warm
            when you rub them together? Physicists, like all scientists, hope to
            find explanations that describe more than one phenomenon and offer a
            better understanding of how the universe works.
          </p>
          <h2>Common Misconceptions</h2>
          <br />
          <p>
            People commonly believe that physics is all about solving word
            problems and memorizing equations. While it is true that many
            physics classes focus on the equations, it is important to remember
            that the purpose of physics is less about the problems and more
            about using equations, laws, and theories to understand the world we
            live in.
          </p>
          <h2>Summary</h2>
          <br />
          <p>
            Physics is the branch of science that studies matter and energy and
            how they interact.
          </p>
          <h2>Review</h2>
          <br />

          <p>
            <ul>
              <li>Give your own definition of physics.</li>
              <li>
                What do you already know about physics? What do you think you
                know?
              </li>
              <li>
                Physics is all around us, all the time. Give a few examples of
                physics you have experienced
              </li>
            </ul>
          </p>
          <br />
          <h2>Explore More</h2>
          <br></br>
          <p>Use the resource below to answer the questions that follow.</p>
        </div>
        <div>
          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
      </section>
    </>
  );
};

export default FirstTab;
