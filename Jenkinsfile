pipeline {
    agent any
    
    stages {
        // stage('Checkout') {
            // steps {
                // 소스코드 체크아웃
                // git branch: 'main', credentialsId: '5d0209e2-c7bb-498e-b9b5-7ae4a526bf45', url: 'https://github.com/JSBeatCode/aws-ec2-jenkins-tuto.git'
            // }
        // }
        stage('Install Dependencies') {
            steps {
                // 원하는 디렉토리로 이동하여 sudo로 npm install 실행
                script {
                    // sh 'who'
                    sh 'chmod o+rwx /home/ubuntu/aws-ec2-jenkins-tuto'
                    // sh 'cd /home/ubuntu/aws-ec2-jenkins-tuto'
                }
                
            }
        }
        // 여기에 추가적인 스테이지들을 추가할 수 있음
    }
    // post 옵션을 사용하여 파이프라인 실행 결과를 처리할 수 있음
    post {
        success {
            echo 'Build 성공!'
            // 여기에 추가적인 작업을 추가할 수 있음
        }
        failure {
            echo 'Build 실패 :('
            // 여기에 실패 시 처리할 작업을 추가할 수 있음
        }
    }
}
