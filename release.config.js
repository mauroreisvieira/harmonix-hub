// https://github.com/semantic-release/semantic-release/tree/master/docs

const options = {
  /** branch to allow releases from */
  branch: "master",
  /** set to true if running on ci environment - allow publishing GitHub releases */
  isCI: false,
  /** if set to true will prevent:
   * - package publish (along with {@link ConfigOptions.npmPublish})
   * - tag creation
   * - pushing to remote (along with {@link ConfigOptions.push})  */
  isDryRun: false,
  /** If set tot true will publish package to registry */
  npmPublish: false,
  /** if set to true, will push version & changelog changes to remote */
  push: true,
};

const cfg = (() => {
  const plugins = [
    // Defines versioning effects commits cause
    // https://github.com/semantic-release/commit-analyzer
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          /**
           * Prevent docs, chore and refactor(docs) typed / scoped commits
           * from affecting versions
           * https://github.com/semantic-release/commit-analyzer#releaserules
           * Defaults (when unmatched)
           * https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-rules.js
           */
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
      },
    ],
    // Defined how the changelog content (release notes) is structured & generated
    // https://github.com/semantic-release/release-notes-generator
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalCommits", // NOTE: should be synced with lerna config
        presetConfig: {
          // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.0.0/README.md#types
          types: [
            {
              type: "feat",
              section: "Features",
              hidden: false,
            },
            {
              type: "fix",
              section: "Bug Fixes",
              hidden: false,
            },
            {
              type: "perf",
              section: "Performance",
              hidden: false,
            },
            {
              type: "refactor",
              section: "Code Refactoring",
              hidden: false,
            },
            {
              type: "revert",
              section: "Changes Reverted",
              hidden: false,
            },
            { type: "docs", hidden: true },
            { type: "test", hidden: true },
            { type: "style", hidden: true },
            { type: "chore", hidden: true },
          ],
        },
      },
    ],
    // Create/update changelog file
    // https://github.com/semantic-release/changelog
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/MAIN_CHANGELOG.md",
      },
    ],
  ];

  // Publish in npm registry
  // https://github.com/semantic-release/npm
  if (!options.isDryRun)
    plugins.push([
      "@semantic-release/npm",
      {
        npmPublish: options.npmPublish,
      },
    ]);

  // Create GitHub release
  // https://github.com/semantic-release/github
  if (!options.isDryRun && options.isCI)
    plugins.push([
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ]);

  // Push changes to remote
  // https://github.com/semantic-release/git
  if (!options.isDryRun && options.push)
    plugins.push([
      "@semantic-release/git",
      {
        assets: ["package.json", "docs/MAIN_CHANGELOG.md"],
        message: "chore(release): main publish [no ci]",
      },
    ]);

  return {
    tagFormat: "project-${version}",
    ci: options.isCI,
    dryRun: options.isDryRun,
    branches: [
      {
        name: options.branch,
        prerelease: false,
        // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/workflow-configuration.md#channel
        channel: false,
      },
    ],
    plugins,
  };
})();

module.exports = cfg;
