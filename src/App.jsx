import { useEffect, useRef, useState } from "react";
import Comments from "./component/Comments";
import Posts from "./component/Posts";
import Props from "./component/Props";

function App() {
  // Завдання 1
  const [users, setUsers] = useState([`John Doe, john.doe@domen.com`]);
  const inpName = useRef();
  const inpSurname = useRef();
  const inpEmail = useRef();

  // Завдання 2
  const [stateTaskSecond, setStateTaskSecond] = useState(1);

  // Завдання 3
  const [stateTaskThird, setStateTaskThird] = useState(10);

  // Завдання 1
  const addUser = () => {
    setUsers([
      ...users,
      `${inpName.current.value} ${inpSurname.current.value}, ${inpEmail.current.value}`,
    ]);
  };

  // Завдання 2
  useEffect(() => {
    console.log("Render component Task 2");
  }, [stateTaskSecond]);

  return (
    <>
      {/* Завдання 1. Створити 3 елементи input для імені, прізвища та емейл адреси. До кожного елементу input застосувати хук useRef. Створити елемент button та функцію, яка буде збирати введенні в input дані та додавати їх в state. Порада: використовуйте масив об'єктів, як тип даних для state. */}
      <div className="container">
        <input ref={inpName} type="text" />
        <input ref={inpSurname} type="text" />
        <input ref={inpEmail} type="text" />
        <button onClick={addUser}>Push</button>
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>

        {/* Завдання 2. Створити хук useEffect, який при кожному рендері компоненту буде виводити останнє значення стейту в консоль. */}
        <h3 className="top">Завдання 2</h3>
        <h3>Render component: {stateTaskSecond}</h3>
        <button onClick={() => setStateTaskSecond((prev) => prev + 1)}>
          Change state component
        </button>

        {/* Завдання 3. Створити дочірній компонент, який буде приймати props, та передайте в нього якийсь об'єкт. Відобразіть даний props в інтерфейсі. Що відбудеться, якщо props зміниться? */}
        {console.log("Render coponent Task 3")}
        <h3 className="top">Завдання 3</h3>
        <h3>Render component: {stateTaskThird}</h3>
        <Props
          stateTaskThird={stateTaskThird}
          setStateTaskThird={setStateTaskThird}
        />
      </div>

      {/* Завдання 0. Реалізуйте декілька компонентів, які будуть відображати пости та коментарі. Дані отримайте через API з порталу https://jsonplaceholder.typicode.com - /posts та /comments. */}
      <Posts />
      <Comments />
    </>
  );
}

export default App;
