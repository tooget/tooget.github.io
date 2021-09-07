def jwt(request):
    import jwt  # pyjwt==1.5.3
    import os
    import time
    from jwt.contrib.algorithms.pycrypto import RSAAlgorithm
    jwt.register_algorithm('RS256', RSAAlgorithm(RSAAlgorithm.SHA256))
  
    priv_rsakey = open("/pem/pem-github-app-IssueCreationBot-for-tooget-github-io", 'r').read()

    # from google.cloud import secretmanager

    # from jwt.contrib.algorithms.pycrypto import RSAAlgorithm
    # jwt.register_algorithm('RS256', RSAAlgorithm(RSAAlgorithm.SHA256))

    # # 環境変数読み込み
    # project_id = os.environ.get('forward-leaf-325313')
    # secret_name = os.environ.get('pem-github-app-IssueCreationBot-for-tooget-github-io')
    # secret_ver = os.environ.get(1)

    # def get_secret_text(project_id, secret_name, secret_ver):

    #   client = secretmanager.SecretManagerServiceClient()
    #   name = client.secret_version_path(project_id, secret_name, secret_ver)
    #   response = client.access_secret_version(name)

    #   return(response.payload.data.decode('UTF-8'))

    # Generate the JWT
    payload = {
      # issued at time, 60 seconds in the past to allow for clock drift
      'iat': int(time.time()) - 60,
      # JWT expiration time (10 minute maximum)
      'exp': int(time.time()) + (10 * 60),
      # GitHub App's identifier
      'iss': 136342
    }

    encoded_jwt = jwt.encode(payload, priv_rsakey, algorithm="RS256")
    return encoded_jwt
