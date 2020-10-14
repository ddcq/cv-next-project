import { useDispatch } from "react-redux";
import { showSidebar } from "../../../redux/actions";
import Sidebar from "../../sidebar";

const ResumeItem = ({ date, name, company, description, children }) => {
  const dispatch = useDispatch();
  return (
    <div className="resume-item border-line-h active">
      <div className="date">{date}</div>
      <div className="name">{name}</div>
      <div className="company">{company}</div>
      <p>{description}</p>
      {children && (
        <div>
          <a onClick={() => dispatch(showSidebar(name))}>[détails]</a>
        </div>
      )}
      {children && <Sidebar id={name}>{children}</Sidebar>}
    </div>
  );
};
export default ResumeItem;
