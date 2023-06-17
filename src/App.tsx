import "./App.scss";
import clsx from "clsx";
import { useAnnotate } from "./hooks/query";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// function Todos() {
//   // Access the client
//   const queryClient = useQueryClient();

//   // Queries
//   const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

//   // Mutations
//   const mutation = useMutation({
//     mutationFn: postTodo,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//   });

//   return (
//     <div>
//       <ul>
//         {query.data?.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//           mutation.mutate({
//             id: Date.now(),
//             title: "Do Laundry",
//           });
//         }}
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// }

function X() {
  const { data } = useAnnotate();
  console.log(data, "<==");

  return <div className={clsx("bg-red-200")}>app</div>;
}

function App() {
  return (
    <div className={clsx("")}>
      <X />
    </div>
  );
}

export default App;
