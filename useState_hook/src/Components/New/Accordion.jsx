import React from 'react'
import { useState } from 'react';
export default function Accordion() {
 
  const sections = [
    { title: "Sec 1", content: "Content 1" },
    { title: "Sec 2", content: "Content  2" },
    { title: "Sec 3", content: "Content 3" },
  ];
  const [Section, setSection] = useState(null)

  console.log(Section, "Section");
  const toggleSection = (index) => {
    if (Section === index) {
      console.log(index, "index");
      console.log(Section, "Section");
      setSection(null);
    } else {
      console.log("hh");
      setSection(index);
    }
  };


  return (
    <>
   
    <div>
      {sections.map((section, index) => (
        <div>
          <div onClick={() => toggleSection(index)}>{section.title}</div>
          {console.log(Section, "Section")}
          {Section === index && (
            <>
              {console.log("true")}
              <div style={{ color: "Red" }}>{section.content}</div>
            </>
          )}
        </div>
      ))}
    </div>
  </>
  )
};
