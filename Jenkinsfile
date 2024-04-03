pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'node:latest'
    }
    // Docker Tool로 설정된 이름을 사용하여 Docker 이미지를 실행합니다.
    tools {
        docker 'awc-ec2-jenkins-docker'
    }
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
         stage('Run App') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}").inside {
                        sh 'node -v'
                    }
                }
            }
        }
    }
}

