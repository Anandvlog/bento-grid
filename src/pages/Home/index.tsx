import React from "react";

const Homepage = () => {
  return (
    <div className="container">
      <div className="grid"></div>
      <div className="create-card">
        <h2>
          Create and schedule content <span>quicker.</span>
        </h2>
        <img
          src="/src/assets/images/illustration-create-post.webp"
          alt="Create Content"
        />
      </div>
      <div className="social-media-card">
        <h2>
          Social Media <span className="number">10x</span>{" "}
          <span className="font-style">Faster</span> with AI
        </h2>
        <img
          alt="five-star"
          src="/src/assets/images/illustration-five-stars.webp"
        />
        <p>Over 4,000 5-star reviews</p>
      </div>

      <div className="schedule_card">
        <h3>Schedule to social media.</h3>
        <img
          src="/src/assets/images/illustration-schedule-posts.webp"
          alt="Schedule Content"
        />
        <p>
          Optimize post timings to publish content at the perfect time for
          platforms.
        </p>
      </div>

      <div className="ai-card">
        <h2>Write your content using AI.</h2>
        <img
          src="/src/assets/images/illustration-ai-content.webp"
          alt="AI Content"
        />
      </div>

      <div className="multi-media-card">
        <img alt="social-media" src="/src/assets/images/illustration-multiple-platforms.webp"  />
        <h2>Manage multiple accounts and platforms.</h2>
      </div>

      <div className="maintain-card">
          <h2>Maintain a consistent posting schedule.</h2>
          <img src="/src/assets/images/illustration-consistent-schedule.webp" alt="Maintain Schedule" />
      </div>

        <div className="audience-card">
          <h2>{">"}56%</h2>
          <p>faster audience growth</p>
          <img alt="audience growth" src="/src/assets/images/illustration-audience-growth.webp" />
        </div>

        <div className="followers-card">
              <img alt="followers" src="/src/assets/images/illustration-grow-followers.webp" />
              <h2>Grow followers with non-stop content.</h2>
        </div>




    </div>
  );
};

export default Homepage;
