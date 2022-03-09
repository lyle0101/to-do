import { useForm } from "react-hook-form";
import { Categories } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a category",
        })}
        placeholder="Write new category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
