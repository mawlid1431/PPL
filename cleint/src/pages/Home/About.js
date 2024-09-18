import React from "react";
import SectionTitle from "../../components/SectionTitle ";
function About() {
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex">
        <div className="h-[70vh]">
          <lottie-player
            src="https://lottie.host/216da901-cfc9-48a9-aa09-dcafeb1fd3a5/4eCe3iodGa.json"
            background="#FFFFFF"
            speed="1"
            autoplay
            direction="1"
            mode="normal"></lottie-player>
        </div>
        <div className="  flex flex-col gap-5">
          <p className="text-tertiary">
            {" "}
            Hello! I’m Mowlid Mohamoud, and I’m deeply passionate about
            community development, technology, and creating positive change.
            Based in Hargeisa, Somaliland, I’m driven by the belief that
            communities have the power to uplift and transform lives. My journey
            has been shaped by a commitment to harnessing this power through
            technology, innovation, and active community engagement.
          </p>
          <p className="text-tertiary">
            {" "}
            With a rich background in both technology and community-focused
            roles, I bring a unique perspective to every project. Whether it’s
            through organizing impactful events, developing user-friendly
            technology solutions, or volunteering for meaningful causes, my goal
            is always to make a tangible difference. I’m enthusiastic about
            leveraging my skills to foster growth, empowerment, and progress
            within my community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
