import { FC } from "react";

interface NavbarProps {
  // Define your component props here
}

const Navbar: FC<NavbarProps> = (props) => {
  return (
    <nav>
      <h1>Image Gallery</h1>
      <div>
        <button>Delete files</button>
      </div>
    </nav>
  );
};

export default Navbar;
