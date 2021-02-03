# Probot & Azure Functions example

This repository is an example of how to deploy the "Hello, World" of probot apps to [Azure Functions](https://azure.microsoft.com/en-us/services/functions).

## Local setup

```
npm install
npm start
```

Open http://localhost:3000 and follow instructions to register a GitHub App for testing. When done, an `.env` file with your app's credentials will exist.

## Deployment through GitHub Actions

1. Create `AZURE_CREDENTIALS` repository secret. See https://github.com/azure/login#configure-deployment-credentials for how to retrieve it from the Azure Console.
2. Create `AZURE_FUNCTION_APP_PUBLISH_PROFILE` repository secret. See https://github.com/Azure/functions-action#using-publish-profile-as-deployment-credential-recommended for how to retrieve it from the Azure Console.

## License

[ISC](LICENSE)
