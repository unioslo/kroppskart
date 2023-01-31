pipeline {
    agent {
        node {
            label 'wapp'
        }
    }

    environment {
        appName = 'nettskjema-inn-kroppskart'
        projectName = 'nettskjema-inn'
        openshiftTemplatesBranch = 'master'
        timestamp = new Date().format("yyyyMMdd-HHmmss.SSS")
        commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        uniqueTagName = "${timestamp}-${commitHash}"
    }

    stages {
        stage('Docker-node steps:') {
            agent {
                docker {
                    image 'mirrors/docker.io/library/node:16-alpine'
                    registryUrl 'https://harbor.uio.no/'
                    registryCredentialsId 'harbor-wapp-systembruker'
                    reuseNode true
                }
            }

            environment {
                HTTP_PROXY = 'http://software-proxy.uio.no:3128/'
                HTTPS_PROXY = 'http://software-proxy.uio.no:3128/'
                NO_REDIS = true
            }

            stages {
                stage('Build') {
                    when {
                        not {
                            anyOf {
                                branch 'master'
                                branch '*-test'
                                branch '*-dev'
                                branch '*-develop'
                            }
                        }
                    }
                    steps {
                        sh "npm ci"
                        sh "npm run build"
                    }
                }
                // stage('test') {
                //     steps {
                //         sh "npm run test"
                //         /*
                //         enable if can setup and fix proxy:
                //         https://docs.cypress.io/guides/getting-started/installing-cypress#Docker
                //         or wait for github actions
                //         */
                //         //sh "npm run cypress:ci"
                //     }
                // }
                stage('Audit') {
                    steps {
                        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                            sh "npm audit"
                        }
                    }
                }
            }
        }

        stage('Build and push image') {
            when {
                anyOf {
                    branch 'master'
                    branch '*-dev'
                    branch '*-develop'
                    branch '*-test'
                }
            }
            steps {
                script {
                    def imagePrefix = "harbor.uio.no:443/it-usit-wapp-drift/${appName}"
                    image = docker.build("${imagePrefix}:${uniqueTagName}", '-f ./Dockerfile ./')
                    try {
                        docker.withRegistry('https://harbor.uio.no:443', 'harbor-wapp-systembruker') {
                            image.push()
                            image.push("$BRANCH_NAME")
                            image.push('latest')
                            if ('master'.equals(BRANCH_NAME) || BRANCH_NAME.endsWith('-test')) {
                                image.push("prod-${uniqueTagName}")
                            }
                        }
                    } finally {
                        try {
                            sh "docker image rm ${image.id}"
                            sh "docker image rm ${imagePrefix}:${BRANCH_NAME}"
                            sh "docker image rm ${imagePrefix}:latest"
                            if ('master'.equals(BRANCH_NAME)) {
                                sh "docker image rm ${imagePrefix}:prod-${uniqueTagName}"
                            }
                        } catch (Exception e) {
                            echo 'Could not delete image: ' + e.getMessage()
                        }
                    }
                }
            }
        }

        stage('Deploy to dev on openshift') {
            when {
                anyOf {
                    branch '*-dev'
                    branch '*-develop'
                }
            }
            steps {
                script {
                    build job: 'wapp-ops/deploy-openshift-config-pilot-okd4',
                        parameters: [
                            string(name: 'branch', value: "${openshiftTemplatesBranch}"),
                            string(name: 'openshiftUrl', value: 'https://api.okd4-pilot.uio.no:6443/'),
                            string(name: 'project', value: "${projectName}-dev"),
                            string(name: 'imageTag', value: "${uniqueTagName}"),
                            string(name: 'application', value: "${appName}-test")
                        ]
                }
            }
        }

        stage('Deploy to test on openshift') {
            when {
                anyOf {
                    branch 'master'
                    branch '*-test'
                }
            }
            steps {
                script {
                    build job: 'wapp-ops/deploy-openshift-config-test-okd4',
                        parameters: [
                            string(name: 'branch', value: "${openshiftTemplatesBranch}"),
                            string(name: 'openshiftUrl', value: 'https://api.okd-test-blue.uio.no:6443/'),
                            string(name: 'project', value: "${projectName}-test"),
                            string(name: 'imageTag', value: "prod-${uniqueTagName}"),
                            string(name: 'application', value: "${appName}-test")
                        ]
                }
            }
        }

        stage('Deploy to prod on openshift') {
            when {
                anyOf {
                    branch 'master'
                }
            }
            steps {
                script {
                    timeout(time:60, unit:'MINUTES') {
                        input 'Deploy to prod?'
                    }
                    build job: 'wapp-ops/deploy-openshift-config-prod-okd4',
                        parameters: [
                            string(name: 'branch', value: "${openshiftTemplatesBranch}"),
                            string(name: 'openshiftUrl', value: 'https://api.okd-green.uio.no:6443/'),
                            string(name: 'project', value: "${projectName}-prod"),
                            string(name: 'imageTag', value: "prod-${uniqueTagName}"),
                            string(name: 'application', value: "${appName}-prod")
                        ]
                }
            }
        }
    }

    post {
        cleanup {
            deleteDir()
        }
    }
}
