import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsersFromApiMiddleware,
  updateUsersFromApiMiddleware,
} from "../../middlewares/crud-middlewares";
import { deleteId } from "../../action/crud-action";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const { userSaveLoading, id, userSaveError, isValid, editData, editDisable } =
    useSelector((state) => state.crudReducer);

  useEffect(() => {
    if (editData) {
      console.log("Data is:", editData);
      if (userSaveLoading === true) {
        setName(<p>Loading......</p>);
      }
      setName(editData.name);
      setEmail(editData.email);
      setGender(editData.gender);
      setStatus(editData.status);
    }
  }, [editData]);

  useEffect(() => {
    if (isValid === true) {
      console.log("isValid", isValid);
      props.click();
      dispatch(deleteId());
    }
  }, [isValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      gender,
      status,
    };
    if (editData && editData.id) {
      let newId = editData.id;
      dispatch(updateUsersFromApiMiddleware(newId, data));
    } else {
      dispatch(addUsersFromApiMiddleware(data));
    }
  };

  // const handleClose = () => {
  //   props.click();
  //   dispatch(deleteId(id));
  // };

  const nameFind =
    userSaveError &&
    userSaveError.find((name) => {
      return name.field === "name";
    });
  const emailFind =
    userSaveError &&
    userSaveError.find((name) => {
      return name.field === "email";
    });
  const genderFind =
    userSaveError &&
    userSaveError.find((name) => {
      return name.field === "gender";
    });
  const statusFind =
    userSaveError &&
    userSaveError.find((name) => {
      return name.field === "status";
    });

  return (
    <>
      <div className="popup">
        <form onSubmit={handleSubmit}>
          {/* <button className="closeBtn" onClick={handleClose}>
            &times;
          </button> */}
          <div>
          <label>Name:</label>&nbsp;
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={editDisable}
          />
          {nameFind && (
            <>
              <span className="error">{nameFind.message}</span>
              <br />
            </>
          )}
          </div>
          <div>
          <label>Email:</label>&nbsp;
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={editDisable}
          />
          {emailFind && (
            <>
              <span className="error">{emailFind.message}</span>
              <br />
            </>
          )}
          </div>
          <div>
          <label>Gender:</label>&nbsp;
          
            <input
              type="radio"
              value={"male"}
              checked={gender === "male"}
              onChange={(event) => setGender(event.target.value)}
              disabled={editDisable}
            />{" "}
            Male
            <input
              type="radio"
              value={"female"}
              checked={gender === "female"}
              onChange={(event) => setGender(event.target.value)}
              disabled={editDisable}
            />{" "}
            Female
            {genderFind && (
              <>
                <br />
                <span className="error">{genderFind.message}</span>
              </>
            )}
          
          </div>
          <div>
          <label>Status:</label>&nbsp;
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            disabled={editDisable}
          >
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {statusFind && (
            <>
              <span className="error">{statusFind.message}</span>
              <br />
            </>
          )}
          </div>
          <div>
          <button type="submit" disabled={userSaveLoading}>
            {userSaveLoading ? "Loading..." : "Save"}
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
