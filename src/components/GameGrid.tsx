import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        
          {isLoading &&
            skeletons.map((Skeleton) => <GameCardContainer><GameCardSkeleton key={Skeleton}></GameCardSkeleton></GameCardContainer>)}
          {games.map((game) => (
            <GameCardContainer><GameCard key={game.id} game={game}></GameCard></GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
