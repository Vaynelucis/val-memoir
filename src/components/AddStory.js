import React, { useState, useEffect } from "react";
import logo from "../styles/plus.svg";

export default function AddStory({ newStory, currentStories }) {
  const [valid, setValid] = useState(true);
  const [invalidIndicator, setIndicator] = useState(<p>loading</p>);

  useEffect(() => {
    let invalidMarkup = (
      <div style={styleValid} className="form-row my-0 text-left ">
        <div className="col my-0">
          <label htmlFor="username" className=" text-left  py-0 mt-3 mb-0">
            Username already taken
          </label>
        </div>
      </div>
    );
    setIndicator(invalidMarkup);
  }, [valid]);

  let styleValid = {
    display: `${valid ? "none" : "block"}`,
    color: "red"
  };

  const validateUsername = e => {
    let currentValue = e.target.value;

    for (let index = 0; index < currentStories.length; index++) {
      if (
        currentStories[index].username.toLowerCase() ===
        currentValue.toLowerCase()
      ) {
        setValid(false);
        break;
      } else {
        setValid(true);
      }
    }
  };

  const handleSubmit = e => {
    console.log(valid);
    e.preventDefault();
    if (valid) {
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
  };

  const button = (
    <div
      data-toggle="modal"
      data-target={`#exampleModalScrollable`}
      className="addStory"
    >
      <img src={logo} alt="" />
      <p className=" ">Add Story</p>
    </div>
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
            <header className="story-header story-header-modal ">
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
            <form
              className="text-left"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
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

              {invalidIndicator}

              <div className="form-row my-3">
                <div className="col">
                  <div className="form-group d-none"></div>
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
              <button
                type="submit"
                className="btn btn-primary btn-sm justify-content-start text-left"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="story container col-xs-12 col-md-3 mb-5 mx-5  text-center">
      <header className="story-header text-center">
        {button}
        <div></div>
      </header>
      {modal}
    </div>
  );
}
