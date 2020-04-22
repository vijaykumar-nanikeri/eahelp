const responseStatuses = {
  success: {
    statusCode: 200,
    statusType: 'SUCCESS',
    statusMessage: 'Request data validation success.',
    data: null
  },
  warning: {
    statusCode: 300,
    statusType: 'WARNING',
    statusMessage: 'Request data validation warning.',
    data: null
  },
  error: {
    statusCode: 500,
    statusType: 'ERROR',
    statusMessage: 'Request data validation error.',
    data: null
  }
};

module.exports = {
  isRequest: (request, response) => {
    if (!request.body) {
      const responseStatus = Object.assign(responseStatuses.error);
      responseStatus.statusMessage = 'No data found.';
      response.send(responseStatuses.error);
    }
  },
  isRequestValid: (request, response, validateData) => {
    if (!validateData.every(data => request.body[data] ? true : false)) {
      response.send(responseStatuses.error);
    }
  }
};
