import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkelton from "./GenreListSkelton";
import GameCardContainer from "./GameCardContainer";
interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const Genreslist = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skelton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {isLoading &&
        skelton.map((s) => (
          <GameCardContainer key={s}>
            <GenreListSkelton />
          </GameCardContainer>
        ))}
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"50px"}
                borderRadius={10}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genreslist;
