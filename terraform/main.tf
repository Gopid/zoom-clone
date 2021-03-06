provider "aws" {
  version = "~> 3.13"
  region  = "eu-west-2"
}

resource "aws_ecr_repository" "zoom_clone_repo" {
  name = "zoom-clone"
}

# resource "aws_ecs_cluster" "zoom_clone_cluster" {
#   name = "zoom-clone"
# }

# resource "aws_ecs_task_definition" "client_task" {
#   family                   = "client-task" # Naming our first task
#   container_definitions    = <<DEFINITION
#   [
#     {
#       "name": "client-task",
#       "image": "${aws_ecr_repository.zoom_clone_repo.repository_url}",
#       "essential": true,
#       "portMappings": [
#         {
#           "containerPort": 3000,
#           "hostPort": 3000
#         }
#       ],
#       "memory": 256,
#       "cpu": 2
#     }
#   ]
#   DEFINITION
#   requires_compatibilities = ["FARGATE"] # Stating that we are using ECS Fargate
#   network_mode             = "awsvpc"    # Using awsvpc as our network mode as this is required for Fargate
#   memory                   = 256         # Specifying the memory our container requires
#   cpu                      = 2         # Specifying the CPU our container requires
#   # execution_role_arn       = "${aws_iam_role.ecsTaskExecutionRole.arn}"
# }

# resource "aws_iam_role" "ecsTaskExecutionRole" {
#   name               = "ecsTaskExecutionRole"
#   assume_role_policy = "${data.aws_iam_policy_document.assume_role_policy.json}"
# }

# data "aws_iam_policy_document" "assume_role_policy" {
#   statement {
#     actions = ["sts:AssumeRole"]

#     principals {
#       type        = "Service"
#       identifiers = ["ecs-tasks.amazonaws.com"]
#     }
#   }
# }

# resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
#   role       = "${aws_iam_role.ecsTaskExecutionRole.name}"
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }

# Providing a reference to our default VPC
# resource "aws_default_vpc" "default_vpc" {
# }

# # Providing a reference to our default subnets
# resource "aws_default_subnet" "default_subnet_a" {
#   availability_zone = "eu-west-2a"
# }

# resource "aws_default_subnet" "default_subnet_b" {
#   availability_zone = "eu-west-2b"
# }

# resource "aws_default_subnet" "default_subnet_c" {
#   availability_zone = "eu-west-2c"
# }

# resource "aws_ecs_service" "client_service" {
#   name            = "client-service"                             # Naming our first service
#   cluster         = "${aws_ecs_cluster.zoom_clone_cluster.id}"             # Referencing our created Cluster
#   task_definition = "${aws_ecs_task_definition.client_task.arn}" # Referencing the task our service will spin up
#   launch_type     = "FARGATE"
#   desired_count   = 3 # Setting the number of containers we want deployed to 3

#   network_configuration {
#     subnets          = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}", "${aws_default_subnet.default_subnet_c.id}"]
#     assign_public_ip = true # Providing our containers with public IPs
#   }
# }