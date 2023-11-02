import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import Dashboard from "./Dashboard";
function Student() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [userid, setuserid] = useState(null);
  const [data, setdata] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:9190/get1").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
        setfirstname(resp[0].firstname);
        setlastname(resp[0].lastname);
        setemail(resp[0].email);
        setuserid(resp[0].id);
        console.log(resp);
      });
    });
  }

  function save() {
    // console.log(firstname,lastname,email);
    Swal.fire("Good job!", "data insert successfully!", "success");
    let data = { firstname, lastname, email };
    fetch("http://localhost:9190/get2", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      getList();
    });
    document.getElementsByTagName("input")[0].value = null;
    document.getElementsByTagName("input")[1].value = null;
    document.getElementsByTagName("input")[2].value = null;
  }
  function deleteuser(id) {
    fetch(`http://localhost:9190/emp/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        Swal.fire("Good job!", "You clicked the button!", "success");
        getList();
      });
    });
  }
  function selectuser(id) {
    console.log(data[id - 1]);
    setfirstname(data[id - 1].firstname);
    setlastname(data[id - 1].lastname);
    setemail(data[id - 1].email);
    setuserid(data[id - 1].id);
  }
  function updateuser() {
    Swal.fire("Good job!", "data update succesfully", "success");
    let item = { firstname, lastname, email, userid };
    fetch(`http://localhost:9190/emp/${userid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getList();
      });
    });
  }
  return (
    <div style={{ display: "flex" }}>
      <Dashboard />

      <div className="col-md-12">
        <div className="Student" style={{ fontFamily: "Times New Roman" }}>
          <h1
            style={{ textDecoration: "underline", fontFamily: "cursive" }}
            className="text-center"
          >
            view the Student details
          </h1>
          <table border="1" className="table">
            <tr>
              <td>id</td>
              <td>first name</td>
              <td>last name</td>
              <td>email</td>
              <td colSpan={2}>Action</td>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    style={{ color: "black" }}
                    onClick={() => deleteuser(item.id)}
                  >
                    delete
                  </button>
                  <Button
                    color="info"
                    className="mx-1"
                    onClick={() => {
                      selectuser(item.id);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </table>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                  <center><img src="https://w7.pngwing.com/pngs/17/243/png-transparent-computer-icons-arshad-ayub-graduate-business-school-students-miscellaneous-logo-monochrome.png" alt="" height={'100px'} width={'30px'} style={{marginLeft:'120px'}} /></center>
                    Update the student
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div>
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row">Enter First Name</th>
                          <td>
                            <input
                              type="text"
                              value={firstname}
                              onChange={(e) => setfirstname(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter Last Name</th>
                          <td>
                            <input
                              type="text"
                              value={lastname}
                              onChange={(e) => setlastname(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the email</th>
                          <td>
                            {" "}
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              className="form-control mt-1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Gender</th>
                          <td colspan="2">Male or female</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <Button color="primary" onClick={updateuser}>
                    update{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <center>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              Add the Student
            </button>
          </center>

          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    <center><img src="https://w7.pngwing.com/pngs/17/243/png-transparent-computer-icons-arshad-ayub-graduate-business-school-students-miscellaneous-logo-monochrome.png" alt="" height={'100px'} width={'30px'} style={{marginLeft:'120px'}} /></center>
                    Add new Student
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div id="profile-details">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row"> Enter First Name</th>
                          <td>
                            {" "}
                            <input
                              type="text"
                              onChange={(e) => {
                                setfirstname(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="firstname"
                              placeholder="type firstname here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter Last Name</th>
                          <td>
                            <input
                              type="text"
                              onChange={(e) => {
                                setlastname(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="lastname"
                              placeholder="type lastname here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Enter the email</th>
                          <td>
                            {" "}
                            <input
                              type="email"
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                              className="form-control mt-1"
                              name="email"
                              placeholder="type email here"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Gender</th>
                          <td colspan="2">Male</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <Button color="warning" type="submit" onClick={save}>
                    save here
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Student;
