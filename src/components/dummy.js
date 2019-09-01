import React from "react";

export default function viewStory({ story, index }) {
  console.log(story);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={
          index ? "#exampleModalScrollable" : "#exampleModalScrollable" + index
        }
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id={
          index ? "#exampleModalScrollable" : "#exampleModalScrollable" + index
        }
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
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
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
