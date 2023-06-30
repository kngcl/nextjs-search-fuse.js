"use client"
import React, { useState } from "react";
import Fuse from "fuse.js";
import './search.css'
import friends from "./freinds.json"

export default function Search() {

  const [input, setInput] = useState<any>(friends);

  const handleSearch = (event:any) => {
    const { value } = event.target;
    if (value.length === 0) {
      setInput(friends);
      return;
    }

    const fuse = new Fuse(friends, {
      keys: ["name", "email", "age"],
    });

    const results = fuse.search(value);
    const items = results.map((result) => result.item);
    setInput(items);
  };

 

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, email or age"
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {input?.map((person: any, index: any) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
