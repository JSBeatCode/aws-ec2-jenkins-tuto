pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // 소스코드 체크아웃
                git 'https://github.com/your/repository.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // 원하는 디렉토리로 이동
                dir('/home/ubuntu/aws-ec2-jenkins-tuto') {
                    // npm install 실행
                    sh 'npm install'
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
