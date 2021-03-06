import React, { useEffect, useRef } from "react";
import ReactToPDF from "react-to-pdf";

const Template = ({ value, print, toggleCanDownload }) => {
  const ref = useRef(null);
  const pdfRef = useRef(null);

  const handlePDF = () => {
    pdfRef.current?.toPdf();
  };

  useEffect(() => {
    if (print) {
      handlePDF();
      toggleCanDownload();
    }
  }, [print, toggleCanDownload]);

  return (
    <>
      <div className="template1" ref={ref} style={{ textAlign: "center" }}>
        <header>
          <hgroup>
            <h1>Template {value}</h1>
          </hgroup>
        </header>
        <section>
          <h2>A Simple HTML5 Page</h2>
          <p>
            This is an example of a simple HTML5 webpage using some of it's
            basic elements.
          </p>
        </section>
        <section>
          <h2> CSS3 for Styling</h2>
          <p>
            To make this webpage visually appealing we'll use some of the basic
            CSS3 code in another example. CSS Makes styling of the page more
            easy and convinient.
          </p>
        </section>
        <section>
          <h2> Progress bar </h2>
          <p>
            Progress you'll make
            <br />
            When you undertand HTML5 code
            <progress max="100" value="50"></progress>
            <br />
            When you understand CSS3 Code{" "}
            <progress max="100" value="50"></progress>
            <br />
            When you understand HTML5+CSS3 Code
            <progress max="100" value="100"></progress>
          </p>
        </section>
        <section>
          <mark>
            For more understandibility how css works this page doesn't inlude
            any CSS3 code.
          </mark>
        </section>
        <footer>
          <p>
            This is the modified example of the code taught by Colleen van Lent
            in her Introduction to CSS3 course on coursera.
          </p>
        </footer>
      </div>
      <ReactToPDF ref={pdfRef} targetRef={ref} filename={`${value}.pdf`}>
        {({ toPdf }) => <span />}
      </ReactToPDF>
      <button onClick={handlePDF}>PDF2</button>
    </>
  );
};

export default Template;
