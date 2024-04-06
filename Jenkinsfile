pipeline {
    agent any
    
    stages {
        stage('Init') {
            steps {
                sh 'sudo rm -rf node_modules'
                sh 'sudo rm -f package-lock.json'
            }
        }
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
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 reload index.cjs'
            }
        }
    }
}
