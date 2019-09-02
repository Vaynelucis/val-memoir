import React, { useState } from "react";

export default function AddStory({ newStory }) {
  const handleSubmit = e => {
    e.preventDefault();
    // e.reset();
    const submitedFields = {
      username: e.target.userName.value,
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
      headline: e.target.headline.value,
      story: e.target.story.value
    };

    newStory(submitedFields);
    e.target.reset();

    console.log(e.target);

    // console.log(submitedFields);
  };

  const button = (
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target={`#exampleModalScrollable`}
    >
      Add Story
    </button>
  );

  const modal = (
    <div
      className="modal fade"
      id={`exampleModalScrollable`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content ">
          <div className="modal-header ">
            <header className="story-header story-header-modal pl-5 ml-md-5">
              <div>
                <h3>Add Your Story</h3>
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
          <div className="modal-body">
            <div className="container-fluid"> </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="userName"
                  />
                </div>
                <div className="col">
                  <select name="gender" className="form-control">
                    <option defaultValue>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    placeholder="Headline"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="col">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="story"
                    placeholder="Your Story"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary text-center">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="story container col-xs-12 col-md-4  text-center">
      <header className="story-header text-center">
        <span className="avatar">+</span>
        <div></div>
      </header>
      {button}
      {modal}
    </div>
  );
}
