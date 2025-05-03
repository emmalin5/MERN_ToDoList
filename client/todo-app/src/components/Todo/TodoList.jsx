import Card from "../Todo/Card";

const TodoList = () => {
  return (
    <div className="flex flex-col w-full  max-w-xl ">
      
      <Card
        title="Drink Water"
        time="Today at 3:00 PM"
        status="pending"
        colorIndex={0}
      />
      <Card
        title="Buy Groceries"
        time="Today at 3:00 PM"
        status="completed"
        colorIndex={1}
      />
      <Card
        title="Learn React"
        time="Today at 3:00 PM"
        status="pending"
        colorIndex={2}
      />
    </div>
  );
};

export default TodoList;
