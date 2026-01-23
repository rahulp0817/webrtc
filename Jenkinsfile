@Library("Shared") _

pipeline {
    
    agent {label "worker"}
    
    stages {

        stage("Code"){
            steps{
                script{
                    clone("https://github.com/rahulp0817/webrtc.git", "main")
                }
            }
        }
        stage("Build"){
            steps{
                // sh "docker build --no-cache -t webrtc-app:latest ." used first time
                script{
                    docker_build("webrtc-app", "latest", "rahuldev365")
                }
            }
        }
        stage("Test"){
            steps{
                echo "Testing the code..."
            }
        }
        stage("Push to Docker Hub"){
            steps{
                script{
                    docker_push("webrtc-app", "latest", "rahuldev365")
                }
            }
        }
        stage("Deploy"){
            steps{
                script{
                    docker_compose()
                }
            }
        }
    }
}