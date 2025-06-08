import { toast } from "react-toastify";
import type { Middleware } from "@reduxjs/toolkit";

const errorLogger: Middleware = () => (next) => (action) => {
  if (!navigator.onLine) {
    toast.error("Failed to connect. Please check your internet connection.", {
      toastId: "NETWORK",
    });
  } else if (action) {
    // Handle error actions here
  }

  return next(action);
};

export default errorLogger;
