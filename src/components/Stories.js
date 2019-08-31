import React from "react";

export default function Stories() {
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
    }
  ];

  const renderedStories = stories.map(story => {
    return (
      <div className="story container text-center">
        <header className="story-header text-center">
          <span className="avater">
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

        <button>View more</button>
      </div>
    );
  });
  return (
    <div className="container text-center">
      <h2>Stories</h2>
      <div className="story-container">{renderedStories}</div>
    </div>
  );
}
