import Button from "./Button";
const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Task"}
      />
    </header>
  );
};

export default Header;
