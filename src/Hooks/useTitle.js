import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - A C E R Json`;
  }, [title]);
};

export default useTitle;
