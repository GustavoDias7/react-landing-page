import React from "react";

const faq = [
  {
    title: "How do I apply?",
    content: `
      You need to register with us and complete the relevant application – there’s quite a lot to fill in but you don’t have to do it all at once. We’ve got lots of information on filling in your application.
      Different courses have different application deadlines – check out our when to apply page for more information.
      Before you can send us your application, you'll need to pay an application fee of £20 if you’re applying to just one course, or £26 for multiple courses and for late applications sent after 30 June 2021. 
      `,
  },
  {
    title: "What are entry requirements?",
    content: `
      Entry requirements vary between universities and colleges – a full list of universities and colleges and their minimum entry criteria can be found in our search tool. If you are unsure you meet a university/college's criteria, it is best to contact their admissions team for further guidance.
      More information can be found on our entry requirements web page.
      `,
  },
  {
    title: "What are UCAS Tariff points?",
    content: `
      The UCAS Tariff is a way of allocating points to qualifications. Not all qualifications attract UCAS Tariff points for various reasons. The university or college you're interested in may accept your qualifications as an appropriate entry route, even if they don't attract UCAS Tariff points.
      For more information, check out our Tariff page.
      `,
  },
  {
    title: "What should I include in my personal statement? ",
    content: `You can read comprehensive advice and watch a video on writing a personal statement. We have also created a blog post with input from universities which you may find useful. `,
  },
  {
    title: "How do I get a reference?",
    content: `The reference process will vary depending on how you choose to apply; you can either register and apply through a school, college or centre that is registered with UCAS, or apply as an individual.`,
  },
]

const AccordionList = () => {
  return (
    <ul className="accordion-list">
      {faq.map((faq, index) => {
        return (
          <li key={index}>
            <input type="checkbox" id={`check-0${++index}`} />
            <label htmlFor={`check-0${index}`}>
              <h3>{faq.title}</h3>
              <p>{faq.content}</p>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default AccordionList;
