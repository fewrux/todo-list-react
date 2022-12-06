import { useState } from "react";

export function useCountDoneTasks() {
  const [doneTasks, setDoneTasks] = useState(0);

  return { doneTasks, setDoneTasks };
}
