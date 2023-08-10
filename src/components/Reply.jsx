export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  return (
    <div>
      <div className="d-flex border-radius:50">
        {" "}
        userImagePath :{userImagePath}{" "}
      </div>
      <div className="d-flex"> username :{username} </div>
      <div className="d-flex"> replyText :{replyText} </div>
      <div className="d-flex">likeNum :{likeNum} </div>
      <div className="d-flex">replies :{replies} </div>
    </div>
  );
};
