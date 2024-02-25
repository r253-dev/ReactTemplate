## Infrastructure

Almost all configuration of the infrastructure is done by [terraform](https://github.com/r253-dev/TerraformGCP)
However, only the domain settings and firebase settings are configured manually.
The reason why we are manually configuring the domain is because we already have other management infrastructure, and Firebase's terraform provider is in beta.
