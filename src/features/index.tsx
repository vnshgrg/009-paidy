import { useAuthenticationState } from "../hooks";
import { AuthScreen } from "./auth";
import { TodoScreen } from "./todo";

export default function Main() {
  const { isAuthenticated } = useAuthenticationState();
  return isAuthenticated ? <TodoScreen /> : <AuthScreen />;
}
