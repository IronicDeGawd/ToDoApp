import { useState } from "react";
/*eslint-disable react/prop-types */

const ShowMore = ({ tasksDetail }) => {
  const [hide, setHide] = useState(true);

  const handleclick = () => {
    setHide((prev) => !prev);
    // console.log(hide);
  };

  return (
    <>
      <span className="transition-all duration-300">
        {hide ? tasksDetail.details.slice(0, 50) : tasksDetail.details}
        {hide ? "" : <br />}
      </span>
      <span
        onClick={handleclick}
        className="text-blue-600 transition-all duration-300 font-bold"
      >
        {hide ? " Show more..." : " Hide details!"}
      </span>
    </>
  );
};
export default ShowMore;
