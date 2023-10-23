/**
 * Commitlint config
 * https://commitlint.js.org/#/
 * https://github.com/conventional-changelog/commitlint
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    /**
     * Ignore automatic release messages
     */
    (commit) => commit.includes("chore(release):"),
    /**
     * Ignore merge commits
     */
    (commit) => commit.includes("Merge "),
    /**
     * Ignore long message body lines caused by squash
     * merges with merge commits annotations
     */
    (commit) => commit.includes("(#") && commit.includes(")"), // TODO: improve
  ],
};
