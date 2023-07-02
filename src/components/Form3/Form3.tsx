// import React from "react";
import { useForm, FieldValues } from "react-hook-form";
const Form3 = () => {
  const { register, handleSubmit } = useForm();
  //fieldvalues always must be imported from react-hoook-form
  const onSubmit = (data: FieldValues) => {
    console.log("submtting: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form3;
