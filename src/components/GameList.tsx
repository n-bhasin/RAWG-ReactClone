import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GameListSkeleton from "./GameListSkeleton";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GameList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  return (
    <>
      <Heading fontSize="2x" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((sk) => (
            <ListItem key={sk} paddingY="5px">
              <GameListSkeleton key={sk} />
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
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

export default GameList;
