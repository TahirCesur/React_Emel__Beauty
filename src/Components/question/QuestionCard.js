/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function QuestionCard(props) {
  const { quest, answer, delay, target } = props;
  return (
    <li data-aos="fade-up" data-aos-delay={delay}>
      <i className="bx bx-help-circle icon-help"></i>
      <a
        data-bs-toggle="collapse"
        className="collapsed"
        data-bs-target={target}
      >
        {quest}
        <i className="bx bx-chevron-down icon-show"></i>
        <i className="bx bx-chevron-up icon-close"></i>
      </a>
      <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
        <p>{answer}</p>
      </div>
    </li>
  );
}

export default QuestionCard;
