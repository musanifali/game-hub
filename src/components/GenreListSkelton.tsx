import { List, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkelton = () => {
  return (
    <List paddingY={2}>
      <ListItem>
        <SkeletonCircle marginY={2} />
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkelton;
