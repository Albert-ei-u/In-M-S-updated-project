import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            tittle: "Inventory Management API",
            version: "1.0.0",
            description: "API documentation for Invetory Management system"
        },
        servers: [
            {
                url: "http://localhost:5001"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },

    apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;