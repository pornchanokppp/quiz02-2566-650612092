export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex border-radius:50">
        {" "}
        userImagePath :{userImagePath}{" "}
      </div>
      <div className="d-flex"> username :{username} </div>
      <div className="d-flex"> commentText :{commentText} </div>
      <div className="d-flex">likeNum :{likeNum} </div>
      <div className="d-flex">replies :{replies} </div>

      {/* map-loop render Reply component here */}
    </div>
  );
};
