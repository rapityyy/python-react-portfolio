import React from 'react';


const Header = () => {
  return (
    <div className="navbar navbar-dark bg-dark w-100">
      <div className="container-fluid d-flex justify-content-between">
        <div>
        <span className="text-light me-3">Phone: 123-456-7890</span>
        </div>
        <div>
          
          <span className="text-light">Email: example@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
