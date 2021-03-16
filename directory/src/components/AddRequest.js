import React, { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function AddRequest() {
  const [{ user }] = useStateValue();
  //useState() hook captures the value from the input value
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  //   const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  /* The onSubmit function we takes the 'e'
    or event and submits it to Firebase
    */
  useEffect(() => {
    console.log("type: ", type);
  }, [type, setType]);

  const userEmail = user.email;
  const onSubmit = (e) => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault();
    projectFirestore
      .collection("problem")
      .doc("tLQSvrHR9fE5fI2mv7TV")
      .collection(type)
      .add({
        title,
        company,
        userEmail,
        description,
        location,
      })
      //.then will reset the form to nothing
      .then(
        () => setTitle(""),
        setCompany(""),
        setType(""),
        setLocation(""),
        setDescription("")
      );
  };
  return (
    <section className="pt-2 pt-md-2 pb-2 pb-md-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Card --> */}
            <div className="card card-border border-primary shadow-light-lg">
              <div className="card-body">
                {/* <!-- Form --> */}
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="form-label" for="applyName">
                          Title of Problem
                        </label>
                        <input
                          className="form-control"
                          placeholder="Title"
                          value={title}
                          name="title"
                          /* onChange takes the event and set it to whatever
      is currently in the input. 'e' is equal to the event
      happening. currentTarget.value is what is inputted
       */
                          onChange={(e) => setTitle(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="form-label" for="applyEmail">
                          Company
                        </label>
                        <input
                          className="form-control"
                          placeholder="Company"
                          value={company}
                          name="company"
                          onChange={(e) => setCompany(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="form-label" for="Location">
                          Location
                        </label>
                        <input
                          className="form-control"
                          placeholder="Location"
                          value={location}
                          name="location"
                          onChange={(e) => setLocation(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label className="form-label" for="applyEmail">
                          Type of problem 
                        </label>

                        {/* <input
                          className="form-control"
                          placeholder="Type"
                          value={type}
                          name="type"
                          onChange={(e) => setType(e.currentTarget.value)}
                          type="text"
                        ></input> */}

                        <div class="dropdown me-1 mb-1">
                          <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButtonTwo"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            { type? type: "Select Problem"}
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButtonTwo"
                            style={{ margin: 0 }}
                          >
                            <a
                              class="dropdown-item"
                              href="#!"
                              onClick={(e) => setType("design")}
                              value="design"
                            >
                              Design
                            </a>
                            <a
                              class="dropdown-item"
                              href="#!"
                              onClick={(e) => setType("engineering")}
                              value="engineering"
                            >
                              Engineering
                            </a>
                            <a
                              class="dropdown-item"
                              href="#!"
                              onClick={(e) => setType("general")}
                              value="general"
                            >
                              General
                            </a>
                            <a
                              class="dropdown-item"
                              href="#!"
                              onClick={(e) => setType("support")}
                              value="support"
                            >
                              Support
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-5">
                      <label className="form-label" for="applyName">
                        Description of problem
                      </label>
                      <input
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md">
                      <button className="btn btn-primary mb-6 mb-md-0 lift">
                        Submit <i className="fe fe-arrow-right ms-3"></i>
                      </button>
                    </div>
                    <div className="col-12 col-md-auto">
                      <p className="fs-sm text-muted mb-0">
                        Application will be send securely and remain private
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
        />
        <input
          placeholder="Company"
          value={company}
          name="company"
          onChange={(e) => setCompany(e.currentTarget.value)}
          type="text"
        />
        <input
          placeholder="Description"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.currentTarget.value)}
          type="text"
        />
        <input
          placeholder="Type"
          value={type}
          name="type"
          onChange={(e) => setType(e.currentTarget.value)}
          type="text"
        />
        <button>Submit</button>
      </form> */}
    </section>
  );
}
