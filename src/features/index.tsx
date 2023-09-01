import { useAuthentication } from "../hooks";
import { AuthScreen } from "./auth";
import { TodoScreen } from "./todo";

export default function Main() {
  const { isAuthenticated } = useAuthentication();
  return isAuthenticated ? <TodoScreen /> : <AuthScreen />;
}
