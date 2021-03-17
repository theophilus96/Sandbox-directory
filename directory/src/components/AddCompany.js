import React, { useState } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import { useStateValue } from "../state/StateProvider";

export default function AddCompany() {
  const [{ user }] = useStateValue();
  //useState() hook captures the value from the input value
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  //   const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  //storage
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  /* The onSubmit function we takes the 'e'
    or event and submits it to Firebase
    */
  //    name
  //    phone
  //    address
  //    description
  //    longDescription
  //    image
  // companyID
  


  const onSubmit = (e) => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault();

    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("company");

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
        //   const createdAt = timestamp();
        await collectionRef.add({
          name: companyName,
          phone,
          description,
          longDescription,
          address,
          image: url,
          userEmail: user.email,
        });
        setCompanyName("");
        setPhone("");
        setAddress("");
        setDescription("");
        setLongDescription("");
        setFile(null);
        setURL("");
      }
    );
  };
  return (
    <div>
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
                            Name of Company
                          </label>
                          <input
                            className="form-control"
                            placeholder="Company Name"
                            value={companyName}
                            name="Company Name"
      //                        onChange takes the event and set it to whatever
      // is currently in the input. 'e' is equal to the event
      // happening. currentTarget.value is what is inputted
       
                            onChange={(e) =>
                              setCompanyName(e.currentTarget.value)
                            }
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group mb-5">
                          <label className="form-label" for="applyEmail">
                            Phone Number
                          </label>
                          <input
                            className="form-control"
                            placeholder="Phone"
                            value={phone}
                            name="phone"
                            onChange={(e) => setPhone(e.currentTarget.value)}
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group mb-5">
                          <label className="form-label" htmlFor="description">
                            Industrial Specialization
                          </label>
                          <input
                            className="form-control"
                            placeholder="Industrial Specialization"
                            value={description}
                            name="description"
                            onChange={(e) =>
                              setDescription(e.currentTarget.value)
                            }
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group mb-5">
                          <label className="form-label" htmlFor="address">
                            Company Location
                          </label>
                          <input
                            className="form-control"
                            placeholder="Address"
                            value={address}
                            name="address"
                            onChange={(e) => setAddress(e.currentTarget.value)}
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group mb-5">
                        <label className="form-label" htmlFor="longDescription">
                          Description of company
                        </label>
                        <input
                          className="form-control"
                          placeholder="Description"
                          value={longDescription}
                          name="longDescription"
                          onChange={(e) =>
                            setLongDescription(e.currentTarget.value)
                          }
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
                          Application will be securely sent and remain private
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
    </div>
  );
}
