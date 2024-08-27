import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Menu, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../core/hooks/useAuthContext";
import supabase from "../supabase/client";
import ArticleListCard from "./components/ArticleListCard";
import BlogCreateForm from "./components/BlogCreateForm";

const DashboardHome = () => {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const fullName = user?.user_metadata.fullName;
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleLogout = () => {
    supabase.auth.signOut();
    queryClient.clear();
    navigate("/login");
  };

  return (
    <div>
      <header className="shadow sticky top-0 z-[100] bg-white py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between">
            <span className="text-xl italic font-extrabold">Post Pulse</span>
            <div className="flex items-center gap-4">
              <Button onClick={open}>Create Blog</Button>
              <Menu offset={-2} width={120}>
                <Menu.Target>
                  <button className="flex items-center text-white gap-2 px-3 rounded-full">
                    <Avatar color="initials" name={fullName} allowedInitialsColors={["dark"]} />
                    <ChevronDownIcon />
                  </button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item color="red" onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl mt-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <div className="grid grid-cols-3 mt-3 gap-6">
          <div className="shadow-lg border border-black/10 rounded-md p-3">
            <h3 className="text-2xl font-semibold">12434</h3>
            <p className="mt-2">Total blog written</p>
          </div>

          <div className="shadow-lg border border-black/10 rounded-md p-3">
            <h3 className="text-2xl font-semibold">12434</h3>
            <p className="mt-2">Total likes received</p>
          </div>

          <div className="shadow-lg border border-black/10 rounded-md p-3">
            <h3 className="text-2xl font-semibold">12434</h3>
            <p className="mt-2">Total comments received</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-5">Posts</h2>
          <ArticleListCard />
          <ArticleListCard />
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title={<h4 className="text-xl font-semibold">Create blog</h4>}
        size="70%"
      >
        <BlogCreateForm />
      </Modal>
    </div>
  );
};
export default DashboardHome;
