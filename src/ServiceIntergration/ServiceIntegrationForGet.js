import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceIntegrationForGet = () => {
  const [nameList, setData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    let url = "http://localhost:8080/get-all";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          let nameList = response.data.map((item) => {
            return (
              <div>
                <table>
                  <tr>
                    {/*  <td>{item.id}</td> */}
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                </table>
              </div>
            );
          });
          setData(nameList);
          console.log(response.data);
        }
      })
      .catch((error) => {
        alert(console.log(error));
      });
  };
  const addUser = () => {
    let url = "http://localhost:8080/save-customer";
    const reqBody = {
      id: 2,
      name: "swetha20",
      ph: "9478458795",
      email: "ftyfxtu@gmail.com",
      dob: "2003-07-09",
    };
    axios
      .post(url, JSON.stringify(reqBody), {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Inserted Successfully");
        }
      })
      .catch((error) => {
        alert("Caught an unexpected error");
      });
  };
  const updateUser = () => {
    let url = "http://localhost:8080/update-customer";
    const reqBody = {
      id: "2",
      name: "Vijaya",
    };
    axios
      .put(url, JSON.stringify(reqBody), {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Inserted Successfully");
        }
      })
      .catch((error) => {
        alert("Caught an unexpected error");
      });
  };
  const deleteUser = () => {
    let url = "http://localhost:8080/delete-customer?id=53";
    axios
      .delete(url, {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Deleted Successfully");
        }
      })
      .catch((error) => {
        alert("Caught an unexpected error");
      });
  };

  return (
    <div>
      ServiceIntegrationForGet
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{nameList}</tbody>
      </table>
      <button type="button" onClick={addUser}>
        Add User
      </button>
      <button
        type="button"
        onClick={() => {
          updateUser();
        }}
      >
        Update User
      </button>
      <button
        type="button"
        onClick={() => {
          deleteUser();
        }}
      >
        Delete User
      </button>
    </div>
  );
};

export default ServiceIntegrationForGet;
