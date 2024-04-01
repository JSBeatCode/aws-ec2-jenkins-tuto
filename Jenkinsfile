pipeline {
    agent any
    environment {
        JENKINS_HOME = '/home/ubuntu/aws-ec2-jenkins-tuto'
    }
    stages {
        stage('Checkout') {
            steps {
                // dir('/home/ubuntu/aws-ec2-jenkins-tuto') {
                    // 소스코드 체크아웃
                    // credentialId는 git personal token을 jenkins에 등록할때 부여되는 Id이다. Jenkins 관리 > 
                    git branch: 'main', credentialsId: '5d0209e2-c7bb-498e-b9b5-7ae4a526bf45', url: 'https://github.com/JSBeatCode/aws-ec2-jenkins-tuto.git'
                // }
            }
        }
        stage('Install Dependencies') {
            steps {
                // 원하는 디렉토리로 이동하여 sudo로 npm install 실행
                //script {
                    // sh 'who'
                    //sh 'chmod o+rwx /home/ubuntu/aws-ec2-jenkins-tuto'
                    // sh 'cd /home/ubuntu/aws-ec2-jenkins-tuto'
                //}
                // nodejs의 nodeJSInstallationName는 Jenkins 관리 > plugin > nodejs 설치 > Jenkins 관리 > Tools > Nodejs 등록시의 name이다.
                nodejs(nodeJSInstallationName: 'aws-ec2-jenkins-node') { // 위의 설정에서 지정한 node 이름
                    sh 'cd /home/ubuntu/aws-ec2-jenkins-tuto && npm install'
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
