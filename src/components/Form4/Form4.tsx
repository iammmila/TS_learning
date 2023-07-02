// import React from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
const Form4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">name field must be filled</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">name's length must be minimum 3</p>
        )}
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

export default Form4;
