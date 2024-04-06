pipeline {
    agent any
    
    stages {        
        stage('Install Dependencies') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') {
                    sh 'npm install'
                }
            }
        }
        // 여기에 추가적인 스테이지들을 추가할 수 있음
        stage('Build') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') { // 위의 설정에서 지정한 node 이름
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') {
                    //sh 'npx pm2 ls'
                    sh 'npm -version'
                }
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:latest'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                sh 'npm --v'
            }
        }
    }
}
