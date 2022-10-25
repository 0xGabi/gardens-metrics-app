const SideBar = ({ handleRef }) => {
  return (
    <aside className="hidden md:block shrink border-dashed border-2 border-sky-500 bg-gray-900 ">
      <nav>
        <h2 className="px-5">Sidebar</h2>
        {/* <button onClick={handleRef}>Go!</button> */}
      </nav>
    </aside>
  );
};

export default SideBar;
