# Probot & Azure Functions example

This repository is an example of how to deploy the "Hello, World" of probot apps to [Azure Functions](https://azure.microsoft.com/en-us/services/functions).

## Local setup

```
npm install
npm start
```

Open http://localhost:3000 and follow instructions to register a GitHub App for testing. When done, an `.env` file with your app's credentials will exist.

## Deployment through GitHub Actions

In the Azure Console, navigate to `Function App` -> your app -> `Configuration` and add the environment variables required by Probot

- `APP_ID`
- `PRIVATE_KEY` (you can encode your key value at https://www.base64encode.org/)
- `WEBHOOKS_SECRET`

Then in your repository settings, create two secrets:

1. `AZURE_CREDENTIALS`: see https://github.com/azure/login#configure-deployment-credentials for how to retrieve it from the Azure Console.
2. `AZURE_FUNCTION_APP_PUBLISH_PROFILE`: see https://github.com/Azure/functions-action#using-publish-profile-as-deployment-credential-recommended for how to retrieve it from the Azure Console.

## License

[ISC](LICENSE)
