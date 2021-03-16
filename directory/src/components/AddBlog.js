import React, { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { useStateValue } from "../state/StateProvider";

export default function AddBlog() {
  const [{ user }] = useStateValue();

  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");

  //storage
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
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
              "user documents",
              doc.data().name,
              setUserName(doc.data().name),
              setUserImage(doc.data().image)
            )
        );
    }
  }, [user]);
  //   author
  // authorImage
  // date
  // image
  // longDesc
  // shortDesc
  // title

  const onSubmit = (e) => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault();

    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("blog");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log("progress bar", percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({
          author: userName,
          authorImage: userImage,
          date: createdAt,
          title,
          shortDesc,
          longDesc,
          image: url,
          userEmail: user.email
        });
        setTitle("");
        setShortDesc("");
        setLongDesc("");
        setFile(null);
        setURL("");
      }
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
                        <label className="form-label" htmlFor="Title">
                          Blog Title
                        </label>
                        <input
                          className="form-control"
                          placeholder="Title"
                          value={title}
                          name="Title"
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
                        <label className="form-label" htmlFor="shortDesc">
                          Short Description
                        </label>
                        <input
                          className="form-control"
                          placeholder="Summary"
                          value={shortDesc}
                          name="shortDesc"
                          onChange={(e) => setShortDesc(e.currentTarget.value)}
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-5">
                      <label className="form-label" htmlFor="longDesc">
                        Blog
                      </label>
                      <input
                        className="form-control"
                        placeholder="Blog"
                        value={longDesc}
                        name="longDesc"
                        onChange={(e) => setLongDesc(e.currentTarget.value)}
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <label className="form-label" htmlFor="file">
                      Image of company
                    </label>
                    <div className="form-group mb-5">
                      <input type="file" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md">
                      <button
                        className="btn btn-primary mb-6 mb-md-0 lift"
                        disabled={!file}
                      >
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
