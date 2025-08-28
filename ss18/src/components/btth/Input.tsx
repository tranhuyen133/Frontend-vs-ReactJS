import { useState } from "react"

interface propsType {
    input: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    addTodo: () => void
}

export default function Input({ input, handleChange, addTodo }: propsType) {
    const [error, setError] = useState(false)
    function handleClick() {
        if (input === "") {
            setError(true)
        } else {
            addTodo();
            setError(false);
        }
    }

    return (
        <>
            <div className="d-flex mb-1">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Nhập công việc..."
                    onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={handleClick}>
                    Thêm
                </button>
            </div>
            {error && <p className="text-danger error-text mb-3 text-sm fs-6">
                Vui lòng nhập tên công việc!
            </p>}
        </>
    )
}