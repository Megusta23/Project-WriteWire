import React from "react";

const Card = () => {
  return (
    <div className="card-content">
      <img
        src="https://unsplash.com/photos/1-29wyvvLJA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNzgzNzEzfA&force=true&w=640"
        alt="placeholder"
      />

      <div className="card-information">
        <div>
          <h2>Some big description about this blog post ovo ono</h2>
          <h3>Some small description about this blog post al me vodira</h3>
          <div className="user-information">
            <img
              src="https://unsplash.com/photos/7YVZYZeITc8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8fHwxNjkwNzMzNTM4fDA&force=true&w=640"
              alt="user"
              className="small-icon-img"
            />
            <div>
              <p>Name of the user</p>
              <p>date of the post</p>
            </div>
          </div>
        </div>

        <a href="#">link</a>
      </div>
    </div>
  );
};

export default Card;
