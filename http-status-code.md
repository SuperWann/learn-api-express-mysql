## HTTP Status Codes

### 1xx Informational

- **100 Continue**: The server has received the request headers and the client should proceed to send the request body.

### 2xx Success

- **200 OK**: The request was successful.
- **201 Created**: The request has been fulfilled and a new resource has been created.
- **204 No Content**: The server has successfully fulfilled the request and there is no additional content to send in the response payload body.

### 3xx Redirection

- **301 Moved Permanently**: The requested resource has been assigned a new permanent URI and any future references to this resource should be directed to the given URI.
- **304 Not Modified**: The server has a cached copy of the requested resource that the client can use instead of making a request to the server.

### 4xx Client Error

- **400 Bad Request**: The request cannot be served due to malformed syntax.
- **401 Unauthorized**: The request requires user authentication.
- **403 Forbidden**: The server understood the request, but is refusing to fulfill it.
- **404 Not Found**: The requested resource could not be found.

### 5xx Server Error

- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
- **503 Service Unavailable**: The server is currently unable to handle the request due to a temporary overload or maintenance.
