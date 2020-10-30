import React, { useState, useEffect } from "react";


const redborder = {
  border: "2px solid red"
};

const parentborder = {
  border: "2px solid green"
};

const blueborder = {
  border: "2px solid blue"
};

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */

     //useEffect(() => {setPerson(props.newPerson)},[props.newPerson])

  const updatePerson = (person) => {
    setPerson(props.personToEdit);

    props.apiFacade.addEditPerson(person);
    
  };

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const prop = target.id;
    const tmpPerson = { ...person, [prop]: value };
    setPerson(tmpPerson);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (person.id) {
      updatePerson(person);
      props.apiFacade.getPersons(props.setPersons)
    } else {
      props.addEditPerson(person);
      props.apiFacade.getPersons(props.setPersons);
    }
  };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              readOnly
              id="id"
              value={person.id}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
