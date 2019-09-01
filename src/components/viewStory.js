import React from "react";

export default function viewStory({ story, index }) {
  console.log(story);
  console.log(`#exampleModalScrollable${index}`);
  const data = `data-target="#exampleModalScrollable${index}"`;
  const id = `id="#exampleModalScrollable${index}"`;
  const button = (
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target={`#exampleModalScrollable${index}`}
    >
      Launch demo modal
    </button>
  );

  const modal = (
    <div
      class="modal fade"
      id={`exampleModalScrollable${index}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <header className="story-header text-center">
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
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
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
