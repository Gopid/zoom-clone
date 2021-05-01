# Zoom clone

The purpose of this project is to demonstrate how an application works accross the stack through the example of a Zoom clone.

#### Used technologies:

- [React](https://reactjs.org/) - UI
- [Docker](https://www.docker.com/) - Containerization

#### Implemented Zoom features:

#### To run the app locally:

[Install Docker](https://docs.docker.com/get-docker/)
Run docker compose in the root of the project:

```sh
$ docker-compose up
```

#### To deploy the app's infrastructure to AWS:

[Install Docker](https://docs.docker.com/get-docker/)
[Install aws-vault](https://github.com/99designs/aws-vault)
[Set up AWS access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)

```sh
# Store AWS credentials for the "zoom-clone" profile
$ aws-vault add zoom-clone
Enter Access Key Id: ABDCDEFDASDASF
Enter Secret Key: %%%

# Creates a session for 3 hours
$ aws-vault exec --duration=3h zoom-clone
```

Initialize terraform from the root of the project:

```sh
$ npm run terraform init
```

Deploy infrastructure to AWS using terraform:

```sh
$ npm run terraform apply -y
```

#### To deploy the client app to AWS:

1. Follow the steps above to have valid AWS credentials
2. Run from the client folder to deploy the app

```sh
$ npx serverless
```

3. Run from the client folder to destroy the resources that were created

```sh
$ npx serverless remove
```

#### To deploy the app using Github actions:

#### To test changes made for Github actions:

Install [act](https://github.com/nektos/act)
