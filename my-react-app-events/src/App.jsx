// import UserForm from './component/UserForm'

// function App() {
//   return (
//     <div>
//       <h1>User Form</h1>
//       <UserForm />
//     </div>
//   )
// }

// export default App

import useFetch from "./component/useFetch";
export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
  <>
    {data && data.map((item) => (
      <p key={item.id}>{item.title}</p>
    ))}
  </>
  );
}