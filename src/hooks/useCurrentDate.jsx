const useCurrentDate = () => {
  let timeObj = [];

  let dateObj = new Date();
  let currTime = Date.now();

  let month = String(dateObj.getMonth() + 1).padStart(2, "0");

  let day = String(dateObj.getDate()).padStart(2, "0");

  let year = dateObj.getFullYear();
  let output = day + "/" + month + "/" + year;

  timeObj = [currTime, output];

  return timeObj;
};

export default useCurrentDate;
