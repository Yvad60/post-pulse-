import { Button, Select, Textarea, TextInput } from "@mantine/core";

const BlogCreateForm = () => {
  return (
    <form action="">
      <div className="flex flex-col mt-4 gap-4">
        <TextInput label="Blog title" />

        <Select label="Category" data={["Tech", "Health", "Fashion", "Travel"]} />

        <Textarea label="Content" rows={5} resize={"vertical"} />

        <Button variant="filled" color="dark" className="mt-2" type="submit">
          Create blog
        </Button>
      </div>
    </form>
  );
};
export default BlogCreateForm;
