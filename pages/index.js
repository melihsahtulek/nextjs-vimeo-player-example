import { useEffect, useState } from "react";
import FragmanPopUp from "../components/FragmanPopUp";

export default function Home() {
  const [selectedFragman, setSelectedFragman] = useState(null);
  const [popUpIsActive, setPopUpIsActive] = useState(false);

  return (
    <div className="flex gap-5 p-10">
      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(579843958);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(306783762);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(196197120);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(331850230);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(467681968);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      <div>
        <button
          className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
          onClick={() => {
            setSelectedFragman(405380540);
            setPopUpIsActive(true);
          }}
        >
          Fragman İzle
        </button>
      </div>

      {selectedFragman !== null && popUpIsActive && <FragmanPopUp videoLink={selectedFragman} setPopUpIsActive={setPopUpIsActive} />}
    </div>
  );
}
