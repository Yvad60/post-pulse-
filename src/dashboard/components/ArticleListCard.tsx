import { Button } from "@mantine/core";

const ArticleListCard = () => {
  return (
    <div className="py-3 flex flex-col">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">My super good blog title is here</h4>
        <div className="flex items-center">
          <Button variant="subtle" color="red">
            Delete
          </Button>
          <Button variant="subtle">Edit</Button>
        </div>
      </div>
      <div className="h-px bg-black/20 mt-2"></div>
    </div>
  );
};
export default ArticleListCard;
