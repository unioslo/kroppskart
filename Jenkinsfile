@Library('wapplib')

branch = env.BRANCH_NAME
jobName = env.JOB_NAME

node('wapp') {
  processFrontend(branch, jobName)
}