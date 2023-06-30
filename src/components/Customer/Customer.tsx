import React, { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "Malahat",
    address: {
      city: "Baku",
      zipCode: 99999,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 2323232 },
    });
  };
  return (
    <>
      <hr />
      Customer's name: {customer.name}
      <br />
      Customer's Address:
      <ul>
        <li>City: {customer.address.city}</li>
        <li>ZipCode: {customer.address.zipCode}</li>
      </ul>
      <hr />
      <button onClick={handleClick} type="button">
        Change value
      </button>
    </>
  );
};

export default Customer;
