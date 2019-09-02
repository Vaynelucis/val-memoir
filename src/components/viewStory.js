import React from "react";

export default function viewStory({ story, index, addLike }) {
  // console.log(story);
  // console.log(`#exampleModalScrollable${index}`);

  const like = e => {
    // console.log(e.target);
    // console.log(story);
    story.likes += 1;
    addLike(story, index);
  };

  const button = (
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target={`#exampleModalScrollable${index}`}
    >
      View More
    </button>
  );

  const modal = (
    <div
      className="modal fade"
      id={`exampleModalScrollable${index}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content ">
          <div className="modal-header ">
            <header className="story-header story-header-modal pl-5 ml-md-5">
              <span className="avatar">
                {story ? story.firstname.substring(0, 1).toUpperCase() : "J"}
                {story ? story.lastname.substring(0, 1).toUpperCase() : "D"}
              </span>
              <div>
                <h3>{story ? story.headline : "Headline"}</h3>
                <p>
                  by <span>{story ? story.username : "Loading"}</span>
                </p>
              </div>
            </header>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{story ? story.story : "Loading"}</div>
          <div className="modal-footer d-flex">
            <p className=" mt-3 r-3">{story ? story.likes : "loading"} likes</p>
            <button
              type="button"
              className="btn btn-secondary mx-3 "
              onClick={like}
            >
              Like
            </button>
            <button
              type="button"
              className="btn btn-secondary  "
              data-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" class="btn btn-primary">
              Save changes
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {button}
      {modal}
    </div>
  );
}
