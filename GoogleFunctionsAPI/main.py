def jwt(request):

    import jwt  # pyjwt==1.5.3
    import os
    import time
    from jwt.contrib.algorithms.pycrypto import RSAAlgorithm

    # For more information about CORS and CORS preflight requests, see:
    # https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request

    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': ['GET', 'OPTIONS'],
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    }

    jwt.register_algorithm('RS256', RSAAlgorithm(RSAAlgorithm.SHA256))
    priv_rsakey = open("/pem/pem-github-app-IssueCreationBot-for-tooget-github-io", 'r').read()

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
    return (encoded_jwt, 200, headers)
