module.exports = {
  output: process.env.BUILD_EXPORT === "true" ? "export" : undefined,
  reactStrictMode: true,
  basePath: process.env.BUILD_EXPORT === "true" ? "/web3-bywise-example" : undefined,
}
