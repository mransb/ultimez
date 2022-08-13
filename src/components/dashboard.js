import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard() {
  const { http } = AuthUser();
  const [userdetail, setUserdetail] = useState("");

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    http.post("/register").then((res) => {
      setUserdetail(res.data);
    });
  };

  function renderElement() {
    if (userdetail) {
      return (
        <div>
          <h4>Full Name</h4>
          <p>{userdetail.fullName}</p>
          <h4>User Name</h4>
          <p>{userdetail.userName}</p>
          <h4>Email</h4>
          <p>{userdetail.email}</p>
          <h4>Country</h4>
          <p>{userdetail.country}</p>
          <h4>Mobile Number</h4>
          <p>{userdetail.mobile}</p>
          <h4>Refferal ID</h4>
          <p>{userdetail.refferalId}</p>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  return (
    <div>
      <h1 className="mb-4 mt-4">Dashboard page</h1>
      {renderElement()}
    </div>
  );
}
