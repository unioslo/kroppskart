@Library('wapplib')

appName = 'nettskjema-inn-kroppskart'
branch = env.BRANCH_NAME

currentBuild.displayName = "Nettskjema Inn: Kroppskart"
echo "Jenkinsfile for ${appName}"

node('wapp') {
  processFrontend(branch, jobName, "application", "nettskjema-inn")
}