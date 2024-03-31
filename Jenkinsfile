pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                //Git 저장소에서 소스코드를 가져옵니다.
                git branch: 'main', credentialsId: 'github_token', url: 'https://github.com/JSBeatCode/aws-ec2-jenkins-tuto.git'
            }
        }

        stage('Install Dependencies') {
            steps {                
                // npm을 사용하여 종속성을 설치합니다.
                // sh 'npm install'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // 빌드 스크립트를 실행합니다.
                // 예시: 프로덕션 환경에 맞게 빌드 스크립트를 수정
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // 배포 스크립트를 실행합니다.
                // 예시: 배포 스크립트를 프로젝트 필요에 따라 수정
                sh 'pm2 reload index.cjs'
            }
        }
    }
}
