const { createProbot } = require("probot");
const app = require("../app");

// create Probot instance using environment variables
const probot = createProbot();

// load app once outside of the function to prevent double
// event handlers in case of container reuse
probot.load(app);

/**
 * @param {import('@azure/functions').Context} context
 * @param {import('@azure/functions').HttpRequest} req
 */
module.exports = async function (context, req) {
  // this will be simpler once we  ship `verifyAndParse()`
  // see https://github.com/octokit/webhooks.js/issues/379
  await probot.webhooks.verifyAndReceive({
    id: req.headers["X-GitHub-Delivery"] || req.headers["x-github-delivery"],
    name: req.headers["X-GitHub-Event"] || req.headers["x-github-event"],
    signature:
      req.headers["X-Hub-Signature-256"] || req.headers["x-hub-signature-256"],
    payload: req.body,
  });

  context.res = {
    status: "200",
    body: "ok",
  };
};
