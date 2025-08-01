// LastCommit.js
import React, { useEffect, useState } from "react";

const LastCommit = () => {
  const [commitDate, setCommitDate] = useState(null);

  useEffect(() => {
    async function fetchCommit() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Samuel-Riedel/3d_Portfolio/commits"
        );
        const data = await res.json();
        const last = new Date(data[0].commit.committer.date);
        setCommitDate(last.toLocaleString());
        // eslint-disable-next-line
      } catch (error) {
        setCommitDate("❌ Failed to load");
      }
    }

    fetchCommit();
  }, []);

  return (
    <div
      style={{
        position:
          "fixed" /* This line of code potentially should be set to fixed*/,
        left: 0,
        top: "99%",
        opacity: "25%",
        transform: "translateY(-50%)",
        background: "none",
        padding: "4px 10px",
        borderRadius: "0 5px 5px 0",
        fontFamily: "sans-serif",
        fontSize: "14px",
        color: "#ffffff",
      }}
    >
      {commitDate ? `Last Commit: ${commitDate} UTC +2` : "Loading..."}
    </div>
  );
};

export default LastCommit;
