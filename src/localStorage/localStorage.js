import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getStoredFromLocalStorageRead = () => {
  const getItem = localStorage.getItem("read");
  // console.log(getItem);
  if (getItem) {
    const parseItem = JSON.parse(getItem);
    return parseItem;
  }
  return [];
};
const saveStoredToLocalStorageRead = (id) => {
  const getItemFromLocalStorage = getStoredFromLocalStorageRead("read");
  // console.log(getItemFromLocalStorage);

  const exists = getItemFromLocalStorage.find((item) => item === id);

  getItemFromLocalStorage.push(id);

  if (!exists) {
    localStorage.setItem("read", JSON.stringify(getItemFromLocalStorage));
    toast.success("Books Added to Read List");
  } else {
    toast.error("You have Already Read This book!");
  }
};

// wish
const getStoredFromLocalStorageWish = () => {
  const getItem = localStorage.getItem("wish");

  // console.log(getItem);
  if (getItem) {
    const parseItem = JSON.parse(getItem);
    return parseItem;
  }
  return [];
};
const saveStoredToLocalStorageWish = (id) => {
  const getItemRead = getStoredFromLocalStorageRead();
  const getItemFromLocalStorage = getStoredFromLocalStorageWish("wish");
  console.log(getItemRead, getItemFromLocalStorage);

  const value = getItemRead.find((item) => item === id);

  console.log(value);
  if (value) {
    toast.error("You have Already Read this Books");
  } else {
    const exists = getItemFromLocalStorage.find((item) => item === id);

    getItemFromLocalStorage.push(id);

    if (!exists) {
      localStorage.setItem("wish", JSON.stringify(getItemFromLocalStorage));
      toast.success("Books Added to WishList");
    } else {
      toast.error("You have Already Read This book!");
    }
  }
};



export {
  getStoredFromLocalStorageRead,
  getStoredFromLocalStorageWish,
  saveStoredToLocalStorageRead,
  saveStoredToLocalStorageWish,
};
