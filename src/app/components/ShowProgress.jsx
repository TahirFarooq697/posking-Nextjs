import React from "react";
import { VscGraph } from "react-icons/vsc";

export default function ShowProgress({ title, amount }) {
  return (
    <div>
      <div className="flex flex-row gap-3 text-xl">
        <VscGraph className="text-gray-400"/>
        <h1 className="font-bold text-gray-800">{amount}</h1>
      </div>
      <p className="text-gray-400">{title}</p>
    </div>
  );
}