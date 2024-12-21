export const gitDataLoader = async () => {
  const result = await fetch("https://api.github.com/users/itsHrishi");
  return result.json();
};
