import React from "react";

// Blog content for the Helpdesk project. Plain h2/h3/p/ul/blockquote/code tags are
// styled by ProjectPost, so posts only need to write the content.
const HelpdeskPost = () => {
  return (
    <>
      <h2>Overview</h2>
      <p>
        During the summer of 2025, I was granted the opportunity to work on the development team for the Helpdesk
        application, created by{" "}
        <a href="https://www.uoguelph.ca/profile/stefan-c-kremer" target="_blank" rel="noopener noreferrer">
          Stefan C. Kremer
        </a>
        . I was the sole developer who worked on improving the Helpdesk codebase, with a goal of improving the
        developer experience. As this application is used by students and teaching staff at the University of
        Guelph, the codebase will not be available to the public. This page will showcase the functionalities of
        this web-based application.
      </p>

      <h2>What is HelpDesk?</h2>
      <p>
        Helpdesk is an application designed to enable students to interact with professors and teaching staff for
        their respective courses. Using their University of Guelph credentials, students can sign into Helpdesk to
        gain access to their enrolled courses. Helpdesk grants students the ability to ask questions via ticket
        submissions, sign up for demo appointments, and request regrades. Professors and teaching staff can use
        Helpdesk to answer student inquiries, view class lists, and more. This web application seeks to improve the
        student experience by allowing for quick access to resources and tools to aid their educational needs.
      </p>

      <h2>Final Report</h2>
      <p>
        For a full write-up of the work I did on Helpdesk, read my{" "}
        <a
          href="https://drive.google.com/file/d/1Xk63ezdYDovp9ubRyXDO8R0P-0e41iw-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          final report
        </a>
        .
      </p>
    </>
  );
};

export default HelpdeskPost;
