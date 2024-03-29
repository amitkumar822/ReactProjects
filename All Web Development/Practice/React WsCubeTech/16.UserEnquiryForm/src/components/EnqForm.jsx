import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EnqForm() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: ""
  });

  let [userData, setUserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
    // console.log(oldData)
  };

  let handleSubmit = (event) => {
    let curentUserFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };
   
    if(formData.index === ""){
        //👉here check email and phone both allready exist in formData 
        let checkFilterUser = userData.filter((v)=> v.uemail ===formData.uemail || v.uphone === formData.uphone);
    
        if(checkFilterUser.length ==1){
            // here give notification alert help of toasty error
            toast.error("Email or Phone allready exists..");
        }else{
            let oldUserData = [...userData, curentUserFormData]; //old Array + new Array Element
            // console.log(oldUserData);
            setUserData(oldUserData);
            //here oldUserData update 
            setFormData(
                {
                    uname: "",
                    uemail: "",
                    uphone: "",
                    umessage: "",
                    index: "",
                }
            )
        }
    }else{
        //Here Edit data update in formData 
        let editIndex = formData.index;
        let oldData = userData;

        //👉here again check updating time if user email and phone allready exist another

        let checkFilterUser = userData.filter((v,i)=> (v.uemail ===formData.uemail || v.uphone === formData.uphone) && i != editIndex)

        if(checkFilterUser.length == 0){
            oldData[editIndex]['uname'] = formData.uname
            oldData[editIndex]['uemail'] = formData.uemail
            oldData[editIndex]['uphone'] = formData.uphone
            oldData[editIndex]['umessage'] = formData.umessage
    
            setUserData(oldData)
            setFormData(
                {
                    uname: "",
                    uemail: "",
                    uphone: "",
                    umessage: "",
                    index: "",
                }
            )
        }else{
            // here give notification alert help of toasty error
            toast.error("Updated Email or Phone allready exists..");
        }
    }


    event.preventDefault();
  }

  //👉here delet Row
  let deletRow = (indexNumber)=>{
    let filterDataafterDelete =userData.filter((v,i)=> i !=indexNumber)

    setUserData(filterDataafterDelete)
    toast.success('You success fully delet!');
  }


  //👉Here Edit Row or Update Row
  let editRow = (indexNumber) => {
    let editData = userData.filter((v,i)=> i==indexNumber)[0]

    editData['index'] = indexNumber;
    // console.log(editData);
    setFormData(editData)
  }
  return (
    <>
      <div className="container fluid">
      <ToastContainer /> {/* 👉Notification container*/}
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h1>Enquiry Now</h1>
            </div>
          </div>
            
            <span style={{background:"yellow",padding:"6px"}}>
                {`How many time form submit count-> ${userData.length}`}
            </span>
          <div className="row row-gap-lg-5">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <div className="pb-3">
                  <label className=" form-label">Nmae</label>
                  <input
                    type="text"
                    onChange={getValue}
                    value={formData.uname}
                    name="uname"
                    className=" form-control"
                  />
                </div>

                <div className="pb-3">
                  <label className=" form-label">Email</label>
                  <input
                    type="text"
                    onChange={getValue}
                    value={formData.uemail}
                    name="uemail"
                    className=" form-control"
                  />
                </div>

                <div className="pb-3">
                  <label className=" form-label">Phone</label>
                  <input
                    type="text"
                    onChange={getValue}
                    value={formData.uphone}
                    name="uphone"
                    className=" form-control"
                  />
                </div>

                <div className="pb-3">
                  <label className=" form-label">Message</label>
                  <input
                    type="text"
                    onChange={getValue}
                    value={formData.umessage}
                    name="umessage"
                    className=" form-control"
                  />
                </div>

                <button className="btn btn-primary">
                  {formData.index !== "" ? "Update" : "Save"}
                </button>
              </form>
              <div className="col col-lg-7 mt-4">
                <div className="table striped bordered hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Message</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.length >= 1 ? (
                      userData.map((obj, i) => {
                        return (
                          <tr key={i}>
                            <td>{i+1}</td>
                            <td>{obj.uname}</td>
                            <td>{obj.uemail}</td>
                            <td>{obj.uphone}</td>
                            <td>{obj.umessage}</td>
                            <td>
                              <button onClick={()=>deletRow(i)} className="btn  btn-danger mx-2">
                                Delet
                              </button>
                              <button onClick={()=>editRow(i)} className="btn btn-success">Edit</button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={6}>No Data Found</td>
                      </tr>
                    )}
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnqForm;
