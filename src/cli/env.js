const parseEnv = () => {
  const envVarNamesWithPrefixRSS = Object.keys(process.env).filter(
    (envVarName) => envVarName.startsWith("RSS_")
  );

  if (envVarNamesWithPrefixRSS.length === 0) {
    console.error("Error: No environment variables with the prefix 'RSS_'.");
    return;
  }

  const result = envVarNamesWithPrefixRSS
    .map((envVarName) => `${envVarName}=${process.env[envVarName]}`)
    .join("; ");

  console.log(result);
};

parseEnv();
