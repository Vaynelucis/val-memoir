import React from "react";
import ViewStory from "./viewStory";

export default function Stories() {
  //   const showStory = e => {
  //     console.log(e);
  //     return <ViewStory />;
  //   };
  const stories = [
    {
      username: "vayne",
      firstname: "Vayne",
      lastname: "lucis",
      headline: "The Kingsglaive",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore."
    },
    {
      username: "Nyx",
      firstname: "nyx",
      lastname: "Ulric",
      headline: "The Lucii",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore."
    },
    {
      username: "Luna",
      firstname: "Luna",
      lastname: "Freya",
      headline: "The Oracle",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore."
    },
    {
      username: "Ardyn",
      firstname: "Ardyn",
      lastname: "Lucis",
      headline: "The Usurper",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore."
    }
  ];

  const renderedStories = stories.map((story, index) => {
    return (
      <div
        key={index}
        className="story container col-xs-12 col-md-4  text-center"
      >
        <header className="story-header text-center">
          <span className="avatar">
            {story.firstname.substring(0, 1).toUpperCase()}
            {story.lastname.substring(0, 1).toUpperCase()}
          </span>
          <div>
            <h3>{story.headline}</h3>
            <p>
              by <span>{story.username}</span>
            </p>
          </div>
        </header>
        <p>{story.story}</p>

        <ViewStory story={story} index={index} />
      </div>
    );
  });
  return (
    <div className="container text-center">
      <h2>Stories</h2>
      <ViewStory />
      <div className="story-container">
        <div className="row">{renderedStories}</div>
      </div>
    </div>
  );
}
