import { notifications } from "@mantine/notifications";
import { MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./authentication/LoginPage";
import SignupPage from "./authentication/SignupPage";
import { AuthContextProvider } from "./core/contexts/auth";
import DashboardLayout from "./dashboard/components/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import HomePage from "./home/HomePage";

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      const errorMessage = (error as Error).message ?? "An error occurred, please try again!";
      notifications.show({
        title: "An error occurred",
        message: errorMessage,
        color: "red",
        position: "top-center",
      });
    },
  }),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
