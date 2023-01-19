import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { IoBagAdd } from "react-icons/io5";
import TableRow from "../../../components/Dashboard/TableRow";
import ApiLoadingLight from "../../../components/Loading/ApiLoadingLight";
import confirmModal from "../../../components/Dashboard/confirmModal";

const ManageUsers = () => {
  const [showModal, setShowModal] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const url = `https://qwerty-gi38.onrender.com/user`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setUsers(data);
      setSpinner(false);
      // console.log(data)
    };
    getProducts();
  }, [users]);

  const handleDelete = (email) => {
    const url = `https://qwerty-gi38.onrender.com/user/${email}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(email);
        const remaining = users.filter((user) => user.email !== email);
        setUsers(remaining);
        console.log(showModal);
      });
  };

  return (
    <div>
      <h3 className="text-[20px] font-[600] flex items-center">
        <IoBagAdd
          color="white"
          className="inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]"
        />
        All Users
      </h3>
      <div className="product-rows mt-2">
        <div
          style={{ gridTemplateColumns: "1fr 1fr 1fr 100px" }}
          className="product-row-heading"
        >
          <p>Email ({users.length})</p>
          <p></p>
          <p>Role</p>
          <p>Actions</p>
        </div>
        {users.map((user) => (
          <TableRow
            setShowModal={setShowModal}
            showModal={showModal}
            key={user._id}
            user={user}
            handleDelete={handleDelete}
          ></TableRow>
        ))}
      </div>
      {/* {showModal && <confirmModal>
            </confirmModal>} */}
      {showModal && (
        <div>
          <input type="checkbox" id="confirmModal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg border-b-[2px]">
                Congratulations random Interner user!
              </h3>
              <p class="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div class="modal-action">
                <label
                  onClick={() => setShowModal(null)}
                  for="confirmModal"
                  class="btn"
                >
                  Cancel
                </label>
                <label
                  onClick={() => handleDelete(showModal.email)}
                  for="confirmModal"
                  class="btn bg-red-500"
                >
                  Delete
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
