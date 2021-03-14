import React, { useEffect, useState } from "react";
import UploadImage from "./UploadImage"
//state
import { auth, projectFirestore } from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function Profile() {
  const [{ user }, dispatch] = useStateValue();

  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userBio, setUserBio] = useState("");

  const [FormUserName, setFormUserName] = useState("");
  //   const [FormUserImage, setFormUserImage] = useState("");
  const [FormUserCompany, setFormUserCompany] = useState("");
  const [FormUserRole, setFormUserRole] = useState("");
  const [FormUserBio, setFormUserBio] = useState("");

  const changeHandler = e =>{
      console.log("changed")
  } 

  useEffect(() => {
    if (user) {
      projectFirestore
        .collection("users")
        .doc(user.uid)
        .onSnapshot(
          {
            // Listen for document metadata changes
            includeMetadataChanges: true,
          },
          (doc) =>
            console.log(
              "user Image",
              doc.data().image,
              setUserName(doc.data().name),
              setUserImage(doc.data().image),
              setUserCompany(doc.data().company),
              setUserRole(doc.data().role),
              setUserBio(doc.data().bio)
            )
        );
    }
  }, [user]);

  const onSubmit = (e) => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault();
    projectFirestore.collection("users").doc(user.uid).update({
      name: FormUserName,
      company: FormUserCompany,
      role: FormUserRole,
      bio: FormUserBio,
    })
    // .then will reset the form to nothing
      .then(
        () => setFormUserName(""),
        setFormUserCompany(""),
        setFormUserRole(""),
        setFormUserBio("")
      );
  };
  return (
    <div>
      {/* <!-- HEADER --> */}
      <header className="bg-dark pt-14 pb-12 d-none d-md-block">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col">
              {/* <!-- Heading --> */}
              <h1 className="fw-bold text-white mb-2">Account Settings</h1>

              {/* <!-- Text --> */}
              <p className="fs-lg text-white-75 mb-0">
                Settings for {!user ? "Guest" : userName}
              </p>
            </div>
            {/* <div className="col-auto">
              <button className="btn btn-sm btn-gray-300-20">Log Out</button>
            </div> */}
          </div>
        </div>
      </header>

      {/* <!-- MAIN --> */}
      <main className="pb-8 pb-md-11 mt-md-n6">
        <div className="container-md">
          <div className="row">
            <div className="col-12 col-md-12">
              {/* <!-- Card --> */}
              <div className="card card-bleed shadow-light-lg mb-6">
                <div className="card-header">
                  {/* <!-- Heading --> */}
                  <h4 className="mb-0">Basic Information</h4>
                </div>
                <div className="card-body">
                  {/* <!-- Form --> */}
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-12">
                        {/* <!-- Name --> */}
                        <div className="form-group">
                          <label className="form-label" for="name">
                            Name
                          </label>
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder={!user ? "Guest" : userName}
                            onChange={(e) =>
                              setFormUserName(e.currentTarget.value)
                            }
                            value={FormUserName}
                          />
                        </div>
                      </div>
                      {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="email">
                            Email
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            type="email"
                            placeholder="name@address.com"
                          />
                        </div>
                      </div> */}
                      <div className="col-12 col-md-6">
                        {/* <!-- Name --> */}
                        <div className="form-group">
                          <label className="form-label" for="company">
                            Company
                          </label>
                          <input
                            className="form-control"
                            id="company"
                            type="text"
                            placeholder={!user ? "N/A" : userCompany}
                            onChange={(e) =>
                              setFormUserCompany(e.currentTarget.value)
                            }
                            value={FormUserCompany}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* <!-- Email --> */}
                        <div className="form-group">
                          <label className="form-label" for="role">
                            Role
                          </label>
                          <input
                            className="form-control"
                            id="role"
                            type="text"
                            placeholder={!user ? "N/A" : userRole}
                            onChange={(e) =>
                              setFormUserRole(e.currentTarget.value)
                            }
                            value={FormUserRole}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        {/* <!-- Bio --> */}
                        <div className="form-group">
                          <label className="form-label">Bio</label>
                          <input
                            className="form-control"
                            id="bio"
                            type="text"
                            placeholder={!user ? "N/A" : userBio}
                            onChange={(e) =>
                              setFormUserBio(e.currentTarget.value)
                            }
                            value={FormUserBio}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* <!-- Button --> */}
                        <button className="btn w-100 btn-primary" type="submit">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div className="card card-bleed shadow-light-lg mb-6">
                <div className="card-header">
                  {/* <!-- Heading --> */}
                  <h4 className="mb-0">Your media</h4>
                </div>
                <div className="card-body">
                  {/* <!-- List group --> */}
                  <div className="list-group list-group-flush">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <div className="avatar avatar-xl">
                            <img
                              className="avatar-img rounded-circle"
                              src={userImage}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col ms-n5">
                          {/* <!-- Heading --> */}
                          <p className="mb-0">Your avatar</p>

                          {/* <!-- Text --> */}
                          <small className="text-gray-700">
                            PNG or JPG no larger than 1000px
                          </small>
                        </div>
                        <div className="col-12 col-md-auto">
                          {/* <!-- Button --> */}
                          <button className="btn btn-xs w-100 btn-primary mt-5 mt-md-0">
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      {/* <!-- Heading --> */}
                      <p className="mb-0">Profile cover</p>

                      {/* <!-- Text --> */}
                      <p className="small text-gray-700">
                        PNG or JPG at 16:9 ratio no larger than 2MB
                      </p>
                      {/* <div className="fallback">
                          <div className="custom-file">
                            <input
                              className="custom-file-input"
                              id="projectCoverUploads"
                              type="file"
                              onChange={changeHandler}
                            />
                            <label
                              className="custom-file-label"
                              for="projectCoverUploads"
                            >
                              Choose file
                            </label>
                          </div>
                        </div> */}
                        <UploadImage />

                      {/* <!-- Dropzone --> */}
                      <div
                        className="dropzone dropzone-single"
                        data-dropzone='{"url": "https://", "maxFiles": 1, "acceptedFiles": "image/*"}'
                      >
                        {/* <!-- Fallback --> */}
                        {/* <div className="fallback">
                          <div className="custom-file">
                            <input
                              className="custom-file-input"
                              id="projectCoverUploads"
                              type="file"
                              onChange={changeHandler}
                            />
                            <label
                              className="custom-file-label"
                              for="projectCoverUploads"
                            >
                              Choose file
                            </label>
                          </div>
                        </div> */}

                        {/* <!-- Preview --> */}
                        {/* <div className="dz-preview dz-preview-single">
                          <div className="dz-preview-cover">
                            <img
                              className="dz-preview-img"
                              data-dz-thumbnail
                              src="data:image/svg+xml,%3csvg3c/svg%3e"
                              alt="..."
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div className="card card-bleed shadow-light-lg mb-8">
                <div className="card-header">
                  {/* <!-- Title --> */}
                  <h4 className="mb-0">Privacy</h4>
                </div>
                <div className="card-body">
                  {/* <!-- List group --> */}
                  <div className="list-group list-group-flush">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          {/* <!-- Heading --> */}
                          <p className="mb-0">Public Profile</p>

                          {/* <!-- Text --> */}
                          <small className="text-gray-700">
                            Making your profile public means anyone can see your
                            information.
                          </small>
                        </div>
                        <div className="col-auto">
                          {/* <!-- Switch --> */}
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="switchOne"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          {/* <!-- Heading --> */}
                          <p className="mb-0">Expose your email</p>

                          {/* <!-- Text --> */}
                          <small className="text-gray-700">
                            This lets users find you by your email address.
                          </small>
                        </div>
                        <div className="col-auto">
                          {/* <!-- Switch --> */}
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="switchTwo"
                              checked
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Text --> */}
              <p className="text-center mb-0">
                <small className="text-muted">
                  If you no longer want to use Sandbox, you can{" "}
                  <a className="text-danger" href="#!">
                    delete your account
                  </a>
                  .
                </small>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
