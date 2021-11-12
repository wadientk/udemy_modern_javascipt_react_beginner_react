const UndoneTasks = ({ task }) => {
  return (
    <>
      <li>
        <div className="list-row">
          <p>{task}</p>
          <button>Complete</button>
          <button>Delete</button>
        </div>
      </li>
    </>
  );
};

export default Footer;
