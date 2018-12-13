'use strict'

module.exports = function (fastify, opts, next) {
  const options = {
    schema: {
      response: {
        '4xx': {
          type: "object",
          required: ["message", "errors"],
          properties: {
            message: {
              type: "string"
            },
            errors: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    field: {
                      type: "string"
                    },
                    error: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  } 

  fastify.get('/', options, function (request, reply) {
    reply.send({ root: true })
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
