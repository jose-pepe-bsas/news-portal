console.log("Bypassing cicd flow")
/**
*
*import { connect } from "@dagger.io/dagger"
// NOTE: Using mjs for avoid MODULE management.

// load up dagger client
console.log("Starting Dagger client up")
connect(async (client) => {
  // obtain reference to the local project
  const source = client.host().directory(".", { exclude: ["node_modules", ".git"] })

  //  Build Docker image with Strapi
  const image = client
    .container()
    .from("node:18-alpine")
    .withDirectory("/app", source)
    .withWorkdir("/app")
    .withExec(["apk", "add", "--no-cache", "build-base", "gcc", "autoconf", "automake", "zlib-dev", "libpng-dev", "vips-dev"])
    .withExec(["npm", "ci"])
    .withExec(["npm", "run", "build"])
    .withExposedPort(1337)
    .withEntrypoint(["npm", "run", "start"])

  // IF RAILWAY_TOKEN is available then push to railway
  if (process.env.RAILWAY_TOKEN) {
    const railwayToken = process.env.RAILWAY_TOKEN

    // using railway cli for deploy
    await client
      .container()
      .from("alpine:latest")
      .withExec(["apk", "add", "--no-cache", "curl", "bash"])
      .withExec(["curl", "-fsSL", "https://railway.app/install.sh", "|", "sh"])
      .withEnvVariable("RAILWAY_TOKEN", railwayToken)
      .withDirectory("/app", source)
      .withWorkdir("/app")
      .withExec(["railway", "up"])
      .stderr()

    console.log("CI: Deployment to Railway completed")
  } else {
    console.log("CI: ERROR! RAILWAY_TOKEN not found, skipping deployment")
    console.log("CI: ERROR! Image built successfully and ready for deployment")
  }
})
*/
