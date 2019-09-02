import React, { useState, useEffect } from "react";
import ViewStory from "./viewStory";
import AddStory from "./AddStory";

export default function Stories() {
  const [updatedStories, setStories] = useState([
    {
      username: "vayne",
      firstname: "Vayne",
      lastname: "lucis",
      headline: "The Kingsglaive",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore.",
      likes: 10
    },
    {
      username: "Nyx",
      firstname: "nyx",
      lastname: "Ulric",
      headline: "The Soldier",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore.",
      likes: 10
    },
    {
      username: "Luna",
      firstname: "Luna",
      lastname: "Freya",
      headline: "The Oracle",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore.",
      likes: 10
    },
    {
      username: "Cor",
      firstname: "Cor",
      lastname: "Leonis",
      headline: "The Bodyguard",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore.",
      likes: 10
    },
    {
      username: "Ardyn",
      firstname: "Ardyn",
      lastname: "Lucis",
      headline: "The Usurper",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta doloremque molestias voluptates officiis sequi totam tempore dolore      ipsam illo iusto doloribus unde sed est, quis, ipsa veniam omnisinventore.",
      likes: 10
    }
  ]);

  const [markup, setMarkup] = useState(<p>Loading </p>);

  const newStory = story => {
    const newStory = {
      username: story.username,
      firstname: story.firstname,
      lastname: story.lastname,
      headline: story.headline,
      story: story.story,
      likes: story.likes
    };

    setStories([...updatedStories, newStory]);
  };

  const addLike = (story, index) => {
    setStories(() => {
      let stories = [...updatedStories];
      stories[index].likes = story.likes;
      return stories;
    });
  };

  useEffect(() => {
    let renderedStories = updatedStories.map((story, index) => {
      return (
        <div
          key={index}
          className="story container-fluid col-xs-12 col-md-4 mb-5  text-center"
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
          <p>
            {story.story.substring(0, 98)}{" "}
            {story.story.length > 99 ? "..." : ""}{" "}
          </p>

          <div className="d-flex align-items-center  justify-content-center ">
            <p className="pt-3 pr-3">{story.likes} likes</p>

            <ViewStory story={story} index={index} addLike={addLike} />
          </div>
        </div>
      );
    });

    setMarkup(renderedStories);
  }, [updatedStories]);

  return (
    <div id="stories" className="container text-center">
      <h2>Stories</h2>
      <div className="story-container ">
        <div className="row">
          {markup}
          <AddStory newStory={newStory} currentStories={updatedStories} />
        </div>
      </div>
    </div>
  );
}
