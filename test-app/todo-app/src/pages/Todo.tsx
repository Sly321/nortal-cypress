import { useCallback, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { Input } from "../components/Input"

type Todo = {
	id: string
	name: string
	status: "open" | "done"
}

function useAddTodo() {
	return useMutation<any, any, Partial<Todo>>("todos", async (variables) => {
		return await (await fetch("/todos", { method: "POST", body: JSON.stringify(variables), headers: {
			"Content-Type": "application/json"
		} })).json()
	})
}

function useDeleteTodo() {
	return useMutation<any, any, Todo>("todos", async (todo) => {
		return await (await fetch(`/todos/${todo.id}`, { method: "DELETE", })).json()
	})
}

function useDone() {
	return useMutation<any, any, Todo>("todos", async (todo: Todo) => {
		return await (await fetch(`/todos/${todo.id}`, { method: "PUT", body: JSON.stringify({ ...todo, status: "done" }), headers: {
			"Content-Type": "application/json"
		} })).json()
	})
}

function useTodos(status: Todo["status"]) {
	return useQuery<unknown, any, Array<Todo>>(["todos", { status }], async () => {
		return await (await fetch(`/todos?status=${status}`, { method: "GET" })).json()
	})
}

export function TodoApp() {
	const [todoInput, setTodoInput] = useState<string>("")

	const { data: openTodos, refetch: refetchOpen } = useTodos("open")
	const { data: doneTodos, refetch: refetchClose } = useTodos("done")
	const { mutateAsync: done } = useDone()
	const { mutateAsync: deleteTo } = useDeleteTodo()
	const { mutateAsync } = useAddTodo()

	const onSubmit = useCallback(() => {
		mutateAsync({ name: todoInput, status: "open" })
		setTodoInput("")
	}, [mutateAsync, todoInput])

	const finishTodo = useCallback(async (todo: Todo) => {
		await done(todo)
		refetchOpen()
		refetchClose()
	}, [done, refetchClose, refetchOpen])

	const deleteTodo = useCallback(async (todo: Todo) => {
		await deleteTo(todo)
		refetchOpen()
		refetchClose()
	}, [deleteTo, refetchClose, refetchOpen])

	const onChange = useCallback((event) => setTodoInput(event.target.value), [])

	return <div>
		<div className="flex items-center flex-col">

		<h1 className="font-bold">Another TODO App 🎉</h1>
			<form onSubmit={onSubmit}>
				<Input id="todo-input" label="Todo's" onChange={onChange} value={todoInput} />
			</form>
		</div>
		<div className="flex flex-row justify-between mt-5 p-5 bg-indigo-200 rounded-lg">
			<div className="w-40">
				<h2 className="underline font-medium">Open</h2>
				<ul>
					{openTodos && openTodos.map((todo, i) => <li key={i} className="cursor-pointer hover:bg-indigo-100 rounded-md" onClick={() => finishTodo(todo)}>{todo.name}</li>)}
				</ul>
			</div>
			<div className="w-40">
				<h2 className="underline font-medium">Done</h2>
				<ul>
					{doneTodos && doneTodos.map((todo, i) => <li key={i} className="cursor-pointer hover:bg-indigo-100 rounded-md line-through" onClick={() => deleteTodo(todo)}>{todo.name}</li>)}
				</ul>
			</div>
		</div>
	</div>
}