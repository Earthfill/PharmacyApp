import { useState } from "react"

const useField = () => {
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return { value, handleChange }
}

export default useField