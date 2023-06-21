import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";

const GameCardSkeltom = () => {
  return (
    <Card>
      <Skeleton height={"280px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeltom;
