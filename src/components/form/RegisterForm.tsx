import { register } from "@/service/auth";

const RegisterForm = () => {
  return (
    <form action={register} className="bg-blue-500 p-4 space-x-4">
      <input placeholder="username" name="username" />
      <input placeholder="password" name="password" />
      <button type="submit">submit</button>
    </form>
  );
};

export default RegisterForm;
