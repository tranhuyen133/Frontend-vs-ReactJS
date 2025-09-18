import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { changeCompany } from "../store/companySlice";

const ChangeState: React.FC = () => {
  const company = useSelector((state: RootState) => state.company.name);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{company}</h1>
      <button onClick={() => dispatch(changeCompany())}>Change state</button>
    </div>
  );
};

export default ChangeState;
