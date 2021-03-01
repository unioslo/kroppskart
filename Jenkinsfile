@Library('wapplib')

appName = 'nettskjema-inn-kroppskart'
branch = env.BRANCH_NAME

currentBuild.displayName = "Nettskejma Inn: Kroppskart"
echo "Jenkinsfile for ${appName}"

node('wapp') {
  processFrontend(branch, jobName, "application", "nettskjema-inn")
}
