pipeline {
    agent any
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'                
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
                //sh 'npx pm2 ls'
                sh 'npm -version'
            }
        }
        stage('test') {
            steps {
                sh 'pm2 list'
            }
        }
    }
}
