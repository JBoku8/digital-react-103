import { useEffect } from "react";

export const ProtectedPage = ({ title = "Protected Page" }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "brown";

    return () => {
      // cleanup function
      document.body.style.backgroundColor = "initial";
      // AJAX cancel
    };
  }, []);
  return (
    <div className="column">
      <h2 className="title">{title}</h2>
    </div>
  );
};
