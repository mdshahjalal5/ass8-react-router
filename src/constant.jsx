import {
  successDoctor,
  successPatients,
  successReview,
  successStaffs,
} from "./assets";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "My Bookings",
    path: "/my-bookings",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Contact us",
    path: "/contact-us",
  },
];

const servicesSummary = [
  {
    label: "Total Doctors",
    count: 199,
    logo: successDoctor,
  },

  {
    label: "Patients",
    count: 199,
    logo: successPatients,
  },
  {
    label: "Reviews",
    count: 199,
    logo: successReview,
  },
  {
    label: "Staffs",
    count: 199,
    logo: successStaffs,
  },
];
const blogs = [
  {
    question: "What is useState and how does it work in React?",
    answer:
      "useState is a Hook in React that lets us add state to functional components. It returns a stateful value and a function to update it. When we call the update function, React re-renders the component with the new state.",
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer:
      "useEffect lets us perform side effects in our components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can depend on specific values to control when it re-runs.",
  },
  {
    question: "What is a custom hook in React and when should we use one?",
    answer:
      "A custom hook is a JavaScript function that starts with 'use' and uses other hooks internally. We use it to extract and reuse logic across multiple components, helping keep our code clean and DRY (Don't Repeat Yourself).",
  },
  {
    question:
      "Difference between controlled and uncontrolled components? Which one is better?",
    answer:
      "Controlled components are form elements where React manages the state using useState or similar. Uncontrolled components use refs to access form values directly from the DOM. Controlled components are preferred for predictable behavior and easier debugging.",
  },
  {
    question: "Tell us something about useFormStatus() (explore and explain)",
    answer:
      "useFormStatus is a React hook used with forms, particularly in frameworks like Next.js with Server Actions. It provides the current state of the form submission (like pending, success, or error) so we can show feedback (like a loading spinner) while the form is being submitted.",
  },
];

export { links, servicesSummary, blogs };
