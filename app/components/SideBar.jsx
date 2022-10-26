const SideBar = ({ handleRef }) => {
  return (
    <aside className="hidden md:block  border-dashed border-2 border-sky-500 bg-gray-900 ">
      <nav>
        <h2 className="px-5">Sidebar</h2>
        <button>Gooo!</button>
      </nav>
    </aside>
  );
};

export default SideBar;
