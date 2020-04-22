const pool = require('./dbconnection');

const responseStatuses = {
  success: {
    statusCode: 200,
    statusType: 'SUCCESS',
    statusMessage: 'Response processed successfully.',
    data: null
  },
  warning: {
    statusCode: 300,
    statusType: 'WARNING',
    statusMessage: 'Response process warning.',
    data: null
  },
  error: {
    statusCode: 500,
    statusType: 'ERROR',
    statusMessage: 'Error while processing response.',
    data: null
  }
};

module.exports = {
  getGames: response => {
    pool.getConnection((err, connection) => {
      if (err) throw err; // Connection error.

      const query = 'SELECT `id`, `name` FROM `ea_games` ORDER BY `id`';

      connection.query(query, (error, results, fields) => {
        if (error) {
          const responseStatus = Object.assign(responseStatuses.error);
          if (error.sqlMessage) responseStatus.statusMessage = error.sqlMessage;
          response.send(responseStatus);
        }

        const responseStatus = Object.assign(responseStatuses.success);
        if (results === '') {
          responseStatus.statusMessage = 'No data found.';
          response.send(responseStatus);
        } else {
          if (Array.isArray(results)) {
            if (!results.length) {
              responseStatus.statusMessage = 'No data found.';
              response.send(responseStatus);
            }
          }

          responseStatus.data = results;
          response.send(responseStatus);
        }

        // Releasing the connection.
        connection.release();

        // Errors if any after the release.
        if (error) throw error;
      });
    });
  },
  getGamesByName: (request, response) => {
    pool.getConnection((err, connection) => {
      if (err) throw err; // Connection error.

      const query = `
        SELECT id, name
        FROM ea_games
        WHERE name LIKE '%${request.body.game}%'
        ORDER BY id
      `;

      connection.query(query, (error, results, fields) => {
        if (error) {
          const responseStatus = Object.assign(responseStatuses.error);
          if (error.sqlMessage) responseStatus.statusMessage = error.sqlMessage;
          response.send(responseStatus);
        }

        const responseStatus = Object.assign(responseStatuses.success);
        if (results === '') {
          responseStatus.statusMessage = 'No data found.';
          response.send(responseStatus);
        } else {
          if (Array.isArray(results)) {
            if (!results.length) {
              responseStatus.statusMessage = 'No data found.';
              response.send(responseStatus);
            }
          }

          responseStatus.data = results;
          response.send(responseStatus);
        }

        // Releasing the connection.
        connection.release();

        // Errors if any after the release.
        if (error) throw error;
      });
    });
  },
  getPlatforms: (request, response) => {
    pool.getConnection((err, connection) => {
      if (err) throw err; // Connection error.

      const query = `
        SELECT eap.id, eap.name
        FROM ea_games_platforms eagp, ea_platforms eap
        WHERE eagp.game_id = ? AND eagp.platform_id = eap.id
        ORDER BY eagp.id
      `;
      const values = [request.body.gameId];

      connection.query(query, values, (error, results, fields) => {
        if (error) {
          const responseStatus = Object.assign(responseStatuses.error);
          if (error.sqlMessage) responseStatus.statusMessage = error.sqlMessage;
          response.send(responseStatus);
        }

        const responseStatus = Object.assign(responseStatuses.success);
        if (results === '') {
          responseStatus.statusMessage = 'No data found.';
          response.send(responseStatus);
        } else {
          let responseSent = false;
          if (Array.isArray(results)) {
            if (!results.length) {
              responseSent = true;
              // Getting topics directly for the games that have no platform.
              module.exports.getTopics(request, response);
              // responseStatus.statusMessage = 'No data found.';
              // response.send(responseStatus);
            }
          }

          if (!responseSent) {
            responseStatus.data = results;
            response.send(responseStatus);
          }
        }

        // Releasing the connection.
        connection.release();

        // Errors if any after the release.
        if (error) throw error;
      });
    });
  },
  getTopics: (request, response) => {
    pool.getConnection((err, connection) => {
      if (err) throw err; // Connection error.

      let query = ``;
      let values = [];
      if (!request.body.platformId) {
        query = `
          SELECT eat.id, eat.name
          FROM ea_games_topics eagt, ea_topics eat
          WHERE eagt.game_id = ? AND eagt.topic_id = eat.id
          ORDER BY eagt.id
        `;
        values = [request.body.gameId];
      } else {
        query = `
          SELECT eat.id, eat.name
          FROM ea_games_platforms eagp, ea_games_platforms_topics eagpt, ea_topics eat
          WHERE
            eagp.game_id = ?
            AND eagp.platform_id = ?
            AND eagp.id = eagpt.game_platform_id
            AND eagpt.topic_id = eat.id
          ORDER BY eagpt.id
        `;
        values = [request.body.gameId, request.body.platformId];
      }

      connection.query(query, values, (error, results, fields) => {
        if (error) {
          const responseStatus = Object.assign(responseStatuses.error);
          if (error.sqlMessage) responseStatus.statusMessage = error.sqlMessage;
          response.send(responseStatus);
        }

        const responseStatus = Object.assign(responseStatuses.success);
        if (results === '') {
          responseStatus.statusMessage = 'No data found.';
          response.send(responseStatus);
        } else {
          if (Array.isArray(results)) {
            if (!results.length) {
              responseStatus.statusMessage = 'No data found.';
              response.send(responseStatus);
            }
          }

          responseStatus.data = results;
          response.send(responseStatus);
        }

        // Releasing the connection.
        connection.release();

        // Errors if any after the release.
        if (error) throw error;
      });
    });
  }
};
