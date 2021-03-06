import React, { useState } from "react";
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
   
    const userEmail = user.email
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
    <section class="pt-2 pt-md-2 pb-2 pb-md-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            {/* <!-- Card --> */}
            <div class="card card-border border-primary shadow-light-lg">
              <div class="card-body">
                {/* <!-- Form --> */}
                <form onSubmit={onSubmit}>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label class="form-label" for="applyName">
                          Title of Problem
                        </label>
                        <input
                          class="form-control"
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
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label class="form-label" for="applyEmail">
                          Company
                        </label>
                        <input
                          class="form-control"
                          placeholder="Company"
                          value={company}
                          name="company"
                          onChange={(e) => setCompany(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label class="form-label" for="Location">
                          Location
                        </label>
                        <input
                          class="form-control"
                          placeholder="Location"
                          value={location}
                          name="location"
                          onChange={(e) => setLocation(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label class="form-label" for="applyEmail">
                          Type of problem
                        </label>
                        <input
                          class="form-control"
                          placeholder="Type"
                          value={type}
                          name="type"
                          onChange={(e) => setType(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group mb-5">
                      <label class="form-label" for="applyName">
                        Description of problem
                      </label>
                      <input
                        class="form-control"
                        placeholder="Description"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-12 col-md">
                      <button class="btn btn-primary mb-6 mb-md-0 lift">
                        Submit <i class="fe fe-arrow-right ms-3"></i>
                      </button>
                    </div>
                    <div class="col-12 col-md-auto">
                      <p class="fs-sm text-muted mb-0">
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
