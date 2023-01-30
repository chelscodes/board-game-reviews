const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/board-game-reviews_development",
      test: "postgres://postgres:postgres@localhost:5432/board-game-reviews_test",
      e2e: "postgres://postgres:postgres@localhost:5432/board-game-reviews_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
