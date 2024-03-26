import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getStoredFromLocalStorage = () => {
  const getItem = localStorage.getItem("read");
  // console.log(getItem);
  if (getItem) {
    const parseItem = JSON.parse(getItem);
    return parseItem;
  }
  return [];
};
const saveStoredToLocalStorage = (id) => {
  const getItemFromLocalStorage = getStoredFromLocalStorage();

  const exists = getItemFromLocalStorage.find((item) => item === id);

  getItemFromLocalStorage.push(id);

  if (!exists) {
    localStorage.setItem("read", JSON.stringify(getItemFromLocalStorage));
    toast.success("Books Added to Read List");
  } else {
    toast.error("hello error");
  }
};
export { getStoredFromLocalStorage, saveStoredToLocalStorage };
