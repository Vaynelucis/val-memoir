import React, { useState } from "react";

export default function AddStory({ newStory, currentStories }) {
  let display = "d-none";
  let valid = true;
  const validateUsername = e => {
    let currentValue = e.target.value;

    // currentStories.map(story => {
    //   story.username === currentValue ? (valid = false) : (valid = true);
    // });

    for (let index = 0; index < currentStories.length; index++) {
      if (currentStories[index].username === currentValue) {
        valid = false;
        break;
      } else {
        valid = true;
      }
    }

    // currentStories.map(story => {
    //   if (story.username === currentValue) {
    //     valid = false;
    //     return;
    //   } else {
    //     valid = true;
    //   }
    // });

    // valid == true ? handleSubmit() : (display = "");
    //   console.log(e.target.value);
  };
  //   validateUsername();
  //   const display = () => {};
  const handleSubmit = e => {
    // console.log(currentStories);
    console.log(valid);
    e.preventDefault();
    if (valid) {
      // e.reset();
      const submitedFields = {
        username: e.target.userName.value,
        firstname: e.target.firstName.value,
        lastname: e.target.lastName.value,
        headline: e.target.headline.value,
        story: e.target.story.value,
        likes: 0
      };

      newStory(submitedFields);
      e.target.reset();
    }

    // console.log(e.target);

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
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className={`"form-row my-0 text-left ${display} "`}>
                <div className="col my-0">
                  <label
                    htmlFor="username"
                    className=" text-left  py-0 mt-3 mb-0"
                  >
                    Invalid username
                  </label>
                </div>
              </div>

              <div className="form-row my-3">
                <div className="col">
                  <div class="form-group d-none"></div>
                  <input
                    onChange={validateUsername}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="userName"
                    id="username"
                    required
                  />
                </div>
                <div className="col">
                  <select name="gender" className="form-control" required>
                    <option value="">Gender</option>
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
                    required
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
                    required
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
