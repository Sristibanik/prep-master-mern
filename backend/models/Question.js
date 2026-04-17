import React, { useEffect, useState } from "react";
import { getQuestions, solveQuestion } from "../services/api";
import "./Questions.css";

function Questions() {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getQuestions();
      console.log("API DATA:", res.data);

      setQuestions(res.data); // IMPORTANT
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSolve = async (id) => {
    try {
      await solveQuestion({ questionId: id });
      alert("Marked as solved ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="questions-container">
      <h2>Interview Questions</h2>

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {questions.map((q) => (
            <div key={q._id} className="card">
              <h3>{q.title}</h3>

              <span className={`badge ${q.difficulty.toLowerCase()}`}>
                {q.difficulty}
              </span>

              <button onClick={() => handleSolve(q._id)}>
                Solve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Questions;