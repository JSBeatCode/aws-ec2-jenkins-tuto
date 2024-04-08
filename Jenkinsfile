pipeline {
    agent any
    
    stages {
        stage('Install Dependencies') {
            steps {
                timeout(time: 5, unit: 'MINUTES', activity: 'abort') {
                    sh 'npm install --save'
                }
            }
        }
        // 여기에 추가적인 스테이지들을 추가할 수 있음
        stage('Build') {
            steps {
                timeout(time: 5, unit: 'MINUTES', activity: 'abort') {
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
