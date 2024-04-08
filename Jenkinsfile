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
                sh 'npm install --save'
            }
        }
        // 여기에 추가적인 스테이지들을 추가할 수 있음
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 reload index.cjs'
            }
        }
    }
}
