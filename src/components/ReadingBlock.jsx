import React from "react";

const ReadingBlock = ({ id, setTerm }) => {
  return (
    <div className="reading--block">
      <button className="close--btn" onClick={() => setTerm(false)}>
        X
      </button>
      <iframe
        src={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`}
        title="Pdf Viewer"
        className="iframe"
      ></iframe>
    </div>
  );
};

export default ReadingBlock;