pipeline{
    agent any

    stages{

        // stage('Build'){
        //     agent{
        //         docker{
        //             image 'node:24.14.0-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps{
        //         sh'''
        //             ls -la
        //             node --version
        //             npm --version
        //             npm install
        //             npm run build
        //             ls -la
        //         '''
        //     }
        // }

        // stage('Test'){
        //     agent{
        //         docker{
        //             image 'node:24.14.0-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps{
        //         sh'''
        //             test -f build/index.html
        //             CI=true npm test
        //         '''
        //     }
        // }

        stage('Deploy'){
            agent{
                docker{
                    image 'amazon/aws-cli'
                    reuseNode true
                    args '--entrypoint=""'
                }
            }
            steps{
                withCredentials([usernamePassword(credentialsId: 'my-temp', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    sh'''
                    aws --version
                    aws s3 ls
                    '''
                }
            }
        }
    }
}