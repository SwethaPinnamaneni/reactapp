import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";

export const So = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    let url = "https://657bb210394ca9e4af14a223.mockapi.io/json/Userdata";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        alert(console.log(error));
      });
  }, []);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setpage(pageNumber);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.ID}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.Country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === page}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </div>
  );
};
